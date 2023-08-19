import React, { useEffect, useState } from 'react';

const FloatingCoin = ({ list, rowRef }) => {
    const [index, setIndex] = useState(0);
    const [coin, setCoin] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            index < list.length - 1 ? setIndex((prev) => prev + 1) : setIndex(0);
        }, 5000);

        Array.from(rowRef.current.querySelectorAll("tr")).forEach((tr, number) => {
            tr.style.backgroundColor = index == number ? "rgb(240 240 240)" : "";
        });

        setCoin({ ...list[index], rank: index + 1 });
        setInterval(interval);

        return () => clearInterval(interval);
    }, [list, index]);


    return (<div className="image">
        <h1>Rank : {coin?.rank}</h1>
        <span className="name">{coin?.name}</span>
        <img src={coin?.image} alt="coin" className='coin' />
    </div>);
};

export default FloatingCoin;