import React, { useContext, useState } from 'react';
import useFetch from '../components/useFetch';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Card from '../components/Card';
import { AppContext } from '../App';

const Exchange = () => {
    const totalCOins = 10176;
    const perPage = 96;

    const { currency } = useContext(AppContext);
    const [page, setPage] = useState(0);
    const [isLoading, { isError, message }, coins] = useFetch(`/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${page}`);

    if (isError) return <Error message={message} />;
    if (isLoading) return <Loading />;
    return (
        <>
            <section>
                {coins.map((coin) => {
                    return <Card {...coin} key={coin.id} />
                })}
            </section>
            <div className="page">
                <button className="prev" disabled={page <= 0} onClick={() => setPage((prev) => prev - 1)}>Previous</button>
                <span className="current">{page + 1} of {(totalCOins / perPage) - 1}</span>
                <button className="next" disabled={page >= (totalCOins / perPage) - 1} onClick={() => setPage((prev) => prev + 1)}>Next</button>
            </div>
        </>
    )
}

export default Exchange;