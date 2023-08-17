import React from 'react';
import useFetch from '../components/useFetch';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Card from '../components/Card';

const Exchange = () => {
    const page = 0;
    const [isLoading, isError, coins] = useFetch(`/coins/markets?vs_currency=inr&per_page=96&page=${page}`);

    if (isError) return <Error />;
    if (isLoading) return <Loading />;
    return (
        <section>{
            coins.map((coin) => {
                return <Card {...coin} key={coin.id} />
            })
        }</section>
    )
}

export default Exchange;