import React from 'react';
import { API_URL } from '../../config';
import { helper, percentChange } from '../../helpers';
import Loading from '../common/Loading'

import './Detail.css'

class Det extends React.Component {
    constructor() {
        super()

        this.state = {
            currency: [],
            error: null,
            loading: false
        }
    }

    componentDidMount() {
        const currencyId = this.props.match.params.id
        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
        .then(helper)
        .then((currency) => {
            this.setState({
                loading: false,
                currency,
                error: null
            })
        })
        .catch((error) => {
            this.setState({
                loading: false,
                error: error.errorMessage
            });
        });
    }

    render() {
        const { loading, error, currency } = this.state
         if(loading) {
             return <div className="loading-container"><Loading /></div>
         }
         if(error) {
             return <div className="error">{error}</div>
         }
        return (
            <div className="Detail">
                <h1>
                    {currency.name} ({currency.symbol})
                </h1>
                <div className="Detail-container">
          <div className="Detail-item">
            Price <span className="Detail-value">$ {currency.price}</span>
          </div>
          <div className="Detail-item">
            Rank <span className="Detail-value">{currency.rank}</span>
          </div>
          <div className="Detail-item">
            24H Change
            <span className="Detail-value">{percentChange(currency.percentChange24h)}</span>
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Market cap</span>
            <span className="Detail-dollar">$</span>
            {currency.marketCap}
          </div>
          <div className="Detail-item">
            <span className="Detail-title">24H Volume</span>
            <span className="Detail-dollar">$</span>
            {currency.volume24h}
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Total supply</span>
            {currency.totalSupply}
          </div>
        </div>
            </div>
        )
    }
}

export default Det