import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

// action types
const CHANGE_INPUT = 'login/CHANGE_INPUT';
const INITIALIZE = 'login/INITIALIZE';

// action creator
export const changeInput = createAction(CHANGE_INPUT);
export const initialize = createAction(INITIALIZE);

// initial state
const initialState = Map({
    id: '',
    password: '',

});

// reducer
export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.set(name, value);
    },
    [INITIALIZE]: (state, action) => initialState
}, initialState);