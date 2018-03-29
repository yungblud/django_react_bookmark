import { createAction, handleActions } from 'redux-actions';

import { Map, List } from 'immutable';
import * as api from 'lib/api';
import { pender } from 'redux-pender';

// action types
const CHECK_LOGIN = 'login/CHECK_LOGIN';
const LOGIN = 'login/LOGIN';
const TEMP_LOGIN = 'login/TEMP_LOGIN';
const LOGOUT = 'login/LOGOUT';

// action creator
export const checkLogin = createAction(CHECK_LOGIN, api.checkLogin);
export const login = createAction(LOGIN, api.login);
export const tempLogin = createAction(TEMP_LOGIN);
export const logout = createAction(LOGOUT);

// initial state
const initialState = Map({
    isLogged: false,
    error: false
});

// reducer
export default handleActions({
    ...pender({
        type: CHECK_LOGIN,
        onSuccess: (state, action) => {
            const { token } = action.payload.data;
            localStorage.access_token = token;
            return state.set('isLogged', true);
        },
        onError: (state, action) => {
            return state.set('isLogged', false);
        }
    }),
    ...pender({
        type: LOGIN,
        onSuccess: (state, action) => {
            const { token } = action.payload.data;
            if(token) {
                localStorage.access_token = token;
                return state.set('isLogged', true);
            }
        },
        onError: (state, action) => {
            return state.set('error', true);
        }
    }),
    [TEMP_LOGIN]: (state, action) => {
        return state.set('isLogged', true);
    },
    [LOGOUT]: (state, action) => {
        localStorage.access_token = "null";
        localStorage.logged = "false";
        return state.set('isLogged', false);
        
    }
}, initialState);