import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';

import NavBar from './components/NavBar';

import Home from './Pages/Home';
import Exchange from './Pages/Exchange';
import Coins from './Pages/Coins';
import ErrorPage from './components/Error';
import CoinDetails from './Pages/CoinDetails';


const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/exchange' element={<Exchange />}></Route>
                <Route path='/coins' element={<Coins />}></Route>
                <Route path='/coins/:id' element={<CoinDetails />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
        </Router>
    )
}

export default App;