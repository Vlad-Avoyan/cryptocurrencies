import React from 'react'
import { API_URL } from '../../config';
import { helper } from '../../helpers';
import Loading from '../common/Loading';
import Table from './Table';
import Pagination from './Pagination';
import './Table.css'

class List extends React.Component {
    constructor() {
        super()

        this.state = {
            loading: false,
            error: null,
            currencies: [],
            totalPages: 0,
            page: 1
        }
        this.handlePaginationClick = this.handlePaginationClick.bind(this)
    }
    
    componentDidMount() {
        this.fetchCurrencies()
    }
    fetchCurrencies() {
        this.setState({ loading: true })

        const { page } = this.state

        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
            .then(helper)
            .then(data => {
                this.setState({
                    loading: false,
                    currencies: data.currencies,
                    page: data.page,
                    totalPages: data.totalPages
                })
            })
            
            .catch(error => {
                this.setState({
                    error: error.errorMassage,
                    loading: false
                })
            })
    }

    handlePaginationClick(direction) {
        let nextPage = this.state.page
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;

        this.setState({ page: nextPage }, () => {
            this.fetchCurrencies()
        })
    }

    render() {
        const { loading, error, currencies, page, totalPages } = this.state
        if (loading) {
            return <div className="loading-container"><Loading /></div>
        }
        if (error) {
            return <div className="error">{error}</div>
        }
        return (
            <div>
                <Table
                    currencies={currencies}
                    percentChange={this.percentChange}
                />
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    handlePaginationClick={this.handlePaginationClick}
                />
            </div>
        )
    }
}

export default List