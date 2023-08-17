import { useState, useEffect } from 'react';

function useFetch(url) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ isError: false, message: "" });
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
                    setError({ isError: true, message: response.statusText || `Error invalid response status: ${response.status}` });
                }
            } catch (e) {
                setError({ isError: true, message: e.message });
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url])
    return [isLoading, error, data];
}

export default useFetch;