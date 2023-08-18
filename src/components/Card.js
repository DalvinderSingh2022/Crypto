import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App';

function Coin({ image, name, trust_score_rank, url, current_price, symbol, id }) {
    const link = url || `/coins/${id}`;
    const { currency } = useContext(AppContext);

    return (
        <Link className="coin" target={url && 'blank'} to={link}>
            <img src={image} alt={name} />
            <h4>{trust_score_rank || (currency + " " + current_price)}</h4>
            <h3>{name}</h3>
            {symbol && <h5>{symbol}</h5>}
        </Link>
    )
}

export default Coin;