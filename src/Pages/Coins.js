import React from 'react';
import useFetch from '../components/useFetch';
import Loading from '../components/Loading';
import ErrorPage from '../components/Error';
import Card from '../components/Card';

const Exchange = () => {
    const page = 0;
    const [isLoading, isError, data] = useFetch(`/coins/markets?vs_currency=inr&per_page=96&page=${page}`);

    return (
        <section>
            {isError ? <ErrorPage /> : (
                isLoading ? <Loading /> :
                    data.map((coin) => {
                        return <Card {...coin} key={coin.id} />
                    })
            )}
        </section>
    )
}

export default Exchange;