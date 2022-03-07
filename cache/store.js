import { useReducer } from 'react';

const initialState = {
    status: 'idle',
    error: null,
    data: []
};
const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
        case 'FETCHING':
            return { ...initialState, status: 'Fun fetchData - fetching...' };
        case 'FETCHED':
            return { ...initialState, status: 'fetched', data: action.payload };
        case 'ERROR':
            return { ...initialState, status: 'error', error: action.payload };
        default:
            return state;
    }
}, initialState);
