import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const constfetChData = async () => {

            try {

                setLoading(true);

                const response = await fetch(`${process.env.REACT_APP_API_URL+url}`, {
                    method: 'GET'
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);

            } catch (err) {
                setError(err);
                setLoading(false);
            }

        }

        constfetChData();

    }, [url]);

    return { data, loading, error }

}

export default useFetch
