import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';
// action types
const GET_BOOKMARK_LIST = 'list/GET_BOOKMARK_LIST';
const READ_BOOKMARK_LIST = 'list/READ_BOOKMARK_LIST';

// action creator
export const getBookmarkList = createAction(GET_BOOKMARK_LIST, api.getBookmarkList);
export const readBookmarkList = createAction(READ_BOOKMARK_LIST, api.readBookmarkList);

// initial state
const initialState = Map({
    bookmarks: List(),
    bookmark: Map({

    })
    
});

// reducer
export default handleActions({
    ...pender({
        type: GET_BOOKMARK_LIST,
        onSuccess: (state, action) => {
            const { data: bookmarks } = action.payload;
            return state.set('bookmarks', fromJS(bookmarks))
        }
    }),
    ...pender({
        type: READ_BOOKMARK_LIST,
        onSuccess: (state, action) => {
            const { data: bookmark } = action.payload;
            return state.set('bookmark', fromJS(bookmark));
        }
    })
}, initialState);