import React, { memo, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../App';

const NavBar = () => {
    const { changeCurrency, symbol, currency } = useContext(AppContext);

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/exchange">Exchange</NavLink>
                </li>
                <li>
                    <NavLink to="/coins">Coins</NavLink>
                </li>
            </ul>
            <button onClick={changeCurrency}>{symbol + " " + currency.toUpperCase()}</button>
        </nav>
    )
}

export default memo(NavBar);
