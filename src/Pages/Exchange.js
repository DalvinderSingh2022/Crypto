import React from 'react';
import useFetch from '../components/useFetch';
import Loading from '../components/Loading';
import ErrorPage from '../components/Error';
import Card from '../components/Card';

const Exchange = () => {
    const [isLoading, isError, data] = useFetch("exchanges?per_page=30");

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