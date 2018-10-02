import axios from '../axios-stocks';

import { GET_TRANSACTIONS, TRANSACTION_LOADING, GET_ERRORS } from './types';

export const getTransactions = () => dispatch => {
    dispatch(setTransactionLoading());
    axios.get('/api/transactions/all')
        .then(res =>
            dispatch({
                type: GET_TRANSACTIONS,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_TRANSACTIONS,
                payload: {}
            })
        );
};

export const addTransaction = (transactionData, history) => dispatch => {
    axios
        .post('/api/transactions', transactionData)
        .then(res => history.push('/transactions'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const setTransactionLoading = () => {
    return{
        type: TRANSACTION_LOADING
    };
};