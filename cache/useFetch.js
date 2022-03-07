import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);

    useEffect(() => {
        if(!url) return;
        const fetchData = async () => {
            try {
                setStatus('Fun fetchData - fetching...');
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setStatus('Fun fetchData - fetched');
            } catch(e) {
                console.log(e.message);
            }      
        };

        fetchData();
    }, [url]);
    
    return { status, data };
};
