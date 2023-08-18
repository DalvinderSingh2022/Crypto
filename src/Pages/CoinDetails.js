import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useFetch from '../components/useFetch';
import { AppContext } from '../App';

const CoinDetails = () => {
    const [isLoading, { isError, message }, coin] = useFetch(`coins/${useParams().id}`);
    const { symbol, currency } = useContext(AppContext);

    if (isError) return <Error message={message} />;
    if (isLoading) return <Loading />;
    return (
        <section>
            <div className='container'>
                <div className="general">
                    <img src={coin.image.large} alt={coin.name} />
                    <h1 className='name'>{coin.name}</h1>
                    <h2 className='price'>{symbol + " " + coin.market_data.current_price[currency]}</h2>
                    <h2>
                        <i className={`fa-solid fa-caret-${coin.market_data.price_change_percentage_24h >= 0 ? "up increase" : "down decrease"}`}></i>
                        {coin.market_data.price_change_percentage_24h}%
                    </h2>
                    <h1 className='rank'># {coin.market_cap_rank}</h1>
                </div>
                <div className="progress">
                    <p>Coingecko Score : {coin.coingecko_score}</p>
                    <div className="progressBar" style={{ width: `${coin.coingecko_score}%` }}></div>
                    <div className="today">
                        <div className='high'>{symbol + " " + coin.market_data.high_24h[currency]}</div>
                        <div>24H Range</div>
                        <div className='low'>{symbol + " " + coin.market_data.low_24h[currency]}</div>
                    </div>
                </div>
                <div className='market'>
                    <div className='row'>
                        <span>{"Max Supply"}</span>
                        <span>{coin.market_data.max_supply}</span>
                    </div>
                    <div className='row'>
                        <span>{"Circulating Supply"}</span>
                        <span>{coin.market_data.circulating_supply}</span>
                    </div>
                    <div className='row'>
                        <span>{"Market Cap"}</span>
                        <span>{symbol + " " + coin.market_data.market_cap[currency]}</span>
                    </div>
                    <div className='row'>
                        <span>{"All Time Low"}</span>
                        <span>{symbol + " " + coin.market_data.atl[currency]}</span>
                    </div>
                    <div className='row'>
                        <span>{"All Time High"}</span>
                        <span>{symbol + " " + coin.market_data.ath[currency]}</span>
                    </div>
                </div>
                <p className='lastUpdate'>Last updated on {Date(coin.market_data.last_updated).split("G")[0]}</p>
            </div>
        </section>
    )
}

export default CoinDetails;