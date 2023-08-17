import React from 'react'
import { Link } from 'react-router-dom'

function Coin({ image, name, trust_score_rank, url, current_price, symbol }) {
    return (
        <Link className="coin" target='blank' to={url}>
            <img src={image} alt={name} />
            <h4>{trust_score_rank || ("₹ " + current_price)}</h4>
            <h3>{name}</h3>
            {symbol && <h5>{symbol}</h5>}
        </Link>
    )
}

export default Coin;