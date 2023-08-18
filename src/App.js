import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';

import NavBar from './components/NavBar';

import Home from './Pages/Home';
import Exchange from './Pages/Exchange';
import Coins from './Pages/Coins';
import NotFound from './Pages/NotFound';
import CoinDetails from './Pages/CoinDetails';

export const AppContext = createContext();
const currencies = [{ symbol: "₹", currency: "inr" }, { symbol: "$", currency: "usd" }, { symbol: "€", currency: "eur" }];

const App = () => {
    const [symbol, setSymbol] = useState(currencies[0].symbol);
    const [currency, setCurrency] = useState(currencies[0].currency);
    const [index, setIndex] = useState(0);

    const changeCurrency = () => {
        index < currencies.length - 1 ? setIndex((prev) => prev + 1) : setIndex(0);
        setCurrency(currencies[index].currency);
        setSymbol(currencies[index].symbol);
    }

    return (
        <AppContext.Provider value={{ changeCurrency, symbol, currency }}>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/exchange' element={<Exchange />}></Route>
                    <Route path='/coins' element={<Coins />}></Route>
                    <Route path='/coins/:id' element={<CoinDetails />}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
            </Router>
        </AppContext.Provider>
    )
}

export default App;