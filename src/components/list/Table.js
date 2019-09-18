import React from 'react'
import './Table.css'

const Table = (props) => {
    const  {currencies, percentChange} = props
   return (
        <div className="Table-container">
                <table className="Table">
                    <thead className="Table-head">
                        <tr>
                            <th>Crypto Currency</th>
                            <th>Price</th>
                            <th>Market Cap</th>
                            <th>24H Change</th>
                        </tr>
                    </thead>
                    <tbody className="Table-body">
                        { currencies.map((currency) => (
                            <tr key={currency.id}>
                                <td>
                                   <span className="Table-rank">{currency.rank} </span> 
                                   {currency.name}
                                </td>
                                <td>
                                    <span className="Table-dollar">$ {currency.price}</span>
                                </td>
                                <td>
                                    <span className="Table-dollar">$ {currency.marketCap}</span>
                                </td>
                                <td>
                                    {percentChange(currency.percentChange24h)}
                                </td>
                            </tr>
                        ))
                            
                        }
                    </tbody>
                </table>
            </div>
   )
}
export default Table