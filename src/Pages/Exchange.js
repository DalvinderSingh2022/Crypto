import React from 'react';
import useFetch from '../components/useFetch';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Card from '../components/Card';

const Exchange = () => {
    const [isLoading, { isError, message }, exchanges] = useFetch("exchanges?per_page=30");

    if (isError) return <Error message={message} />;
    if (isLoading) return <Loading />;
    return (
        <section>{
            exchanges.map((coin) => {
                return <Card {...coin} key={coin.id} />
            })
        }</section>
    )
}

export default Exchange;