import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Map, List } from 'immutable';
import * as api from 'lib/api';

// action types
const INITIALIZE = 'signup/INITIALIZE';
const CHANGE_INPUT = 'signup/CHANGE_INPUT';
const SIGN_UP = 'signup/SIGN_UP';

// action creator
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const signup = createAction(SIGN_UP, api.signup);

// initial state
const initialState = Map({
    id: '',
    password: '',
    error: Map({
        username: '',
        password: ''
    })
});

// reducer
export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const {name, value} = action.payload;
        return state.set(name, value);
    },
    ...pender({
        type: SIGN_UP,
        onSuccess: (state, action) => {

        },
        onError: (state, action) => {
            const { username, email, password } = action.payload.response.data;
            return state.setIn(['error', 'username'], username)
                        .setIn(['error', 'password'], password);
        }
    }),
    [INITIALIZE]: (state, action) => initialState
}, initialState);