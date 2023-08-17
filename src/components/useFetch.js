import { useState, useEffect } from 'react';

function useFetch(url) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, SetData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.coingecko.com/api/v3/" + url);
                const result = await response.json();
                if (response.ok) {
                    SetData(result);
                    setIsLoading(false);
                } else {
                    setIsError(true);
                }
            } catch {
                setIsError(true);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url])
    return [isLoading, isError, data];
}

export default useFetch;