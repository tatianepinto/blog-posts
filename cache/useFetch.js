import {useEffect, useRef} from 'react';
import { dispatch } from './store';

export const useFetch = (url) => {
    const cache = useRef({});

    useEffect(() => {
        let cancelRequest = false;
        if(!url) return;
        const fetchData = async () => {
            dispatch({ type: 'FETCHING' });
            
                if(cache.current[url]){
                    const data = cache.current[url];
                    dispatch({ type: 'FETCHED' });
                } else {
                    try {
                        const response = await fetch(url);
                        const data = await response.json();
                        cache.current[url] = data;
                        if(cancelRequest) return;
                        dispatch({ type: 'FETCHED', payload: data });
                    } catch(e) {
                        if(cancelRequest) return;
                        dispatch({ type: 'ERROR', payload : e.message });
                    } 
                }     
        };

        fetchData();

        return cleanUp = () => {
            cancelRequest = true;
        };

    }, [url]);
    
    return { status, data };
};
