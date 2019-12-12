
import axios from 'axios';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetch = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios
        .get('https://api.nasa.gov/planetary/apod?api_key=Iandqwh7n0bu1uJ0E2dioBXqEpz7QK9GYi6wBuNb')
        .then(res =>
            dispatch({ type: FETCH_SUCCESS, payload: res })
        )
        .catch(error => dispatch({ type: FETCH_FAIL, playload: error }))
};

