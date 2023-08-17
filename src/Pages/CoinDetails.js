import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useFetch from '../components/useFetch';

const CoinDetails = () => {
    const [isLoading, isError, { image, name, market_data, market_cap_rank, coingecko_score }] = useFetch(`coins/${useParams().id}`);

    return (
        <section>
            {isError ? <Error /> : (
                isLoading ? <Loading /> :
                    <div className='container'>
                        <div className="general">
                            <img src={image.large} alt={name} />
                            <h1 className='name'>{name}</h1>
                            <h2 className='price'>₹ {market_data.current_price["inr"]}</h2>
                            <h2>
                                <i className={`fa-solid fa-caret-${market_data.price_change_percentage_24h >= 0 ? "up increase" : "down decrease"}`}></i>
                                {market_data.price_change_percentage_24h}%
                            </h2>
                            <h1 className='rank'># {market_cap_rank}</h1>
                        </div>
                        <div className="progress">
                            <p>Coingecko Score : {coingecko_score}</p>
                            <div className="progressBar" style={{ width: `${coingecko_score}%` }}></div>
                            <div className="today">
                                <div className='high'>₹ {market_data.high_24h["inr"]}</div>
                                <div>24H Range</div>
                                <div className='low'>₹ {market_data.low_24h["inr"]}</div>
                            </div>
                        </div>
                        <div className='market'>
                            <div className='row'>
                                <span>{"Max Supply"}</span>
                                <span>{market_data.max_supply}</span>
                            </div>
                            <div className='row'>
                                <span>{"Circulating Supply"}</span>
                                <span>{market_data.circulating_supply}</span>
                            </div>
                            <div className='row'>
                                <span>{"Market Cap"}</span>
                                <span>₹ {market_data.market_cap["inr"]}</span>
                            </div>
                            <div className='row'>
                                <span>{"All Time Low"}</span>
                                <span>₹ {market_data.atl["inr"]}</span>
                            </div>
                            <div className='row'>
                                <span>{"All Time High"}</span>
                                <span>₹ {market_data.ath["inr"]}</span>
                            </div>
                        </div>
                        <p className='lastUpdate'>Last updated on {Date(market_data.last_updated).split("G")[0]}</p>
                    </div>
            )}
        </section>
    )
}

export default CoinDetails;