import React, { useContext, useEffect, useState } from 'react';
import useFetch from '../components/useFetch';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { AppContext } from '../App';

const Home = () => {
    const { symbol, currency } = useContext(AppContext);
    const [coin, setCoin] = useState({});
    const [isLoading, { isError, message }, list] = useFetch(`/coins/markets?vs_currency=${currency}&per_page=10&page=0`);

    useEffect(() => {
        setCoin({ ...list[0], rank: 1 })
    }, [list]);

    if (isError) return <Error message={message} />;
    if (isLoading) return <Loading />;
    return (
        <section className="home">
            <div className="image">
                <h1>Rank : {coin?.rank}</h1>
                <span className="name">{coin?.name}</span>
                <img src={coin?.image} alt="coin" className='coin' />
            </div>
            <div className="table">
                <h1>Current Top Coins</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Coin</th>
                            <th>Price</th>
                            <th>24H Change</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((coin, index) => {
                            return (
                                <tr key={coin.id} onClick={() => setCoin({ ...coin, rank: (index + 1) })}>
                                    <td>{index + 1}.</td>
                                    <td>{coin.name}</td>
                                    <td>{symbol + " " + coin.current_price}</td>
                                    <td>{coin.market_cap_change_percentage_24h} %</td>
                                    <td>{symbol + " " + coin.market_cap}</td>
                                </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Home;