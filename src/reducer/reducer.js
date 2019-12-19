
import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAIL
} from '../actions/actions';


const initialState = {
    date: 'Wating For Fetch',
    fetching: false,
    gotData: false
};

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                data: 'Fetching Pic...',
                fetching: true,
                gotData: false
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                gotData: true

            }

        case FETCH_FAIL:
            return {
                ...state,
                data: ['Get Pic Failed', action.payload]
            }
        default:
            return state;
    }
}