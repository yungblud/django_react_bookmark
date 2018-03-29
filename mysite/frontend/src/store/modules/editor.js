import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import * as api from 'lib/api';
import {pender} from 'redux-pender';

// action types
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';
const POST_BOOKMARK = 'editor/POST_BOOKMARK';
const READ_BOOKMARK = 'editor/READ_BOOKMARK';
const PATCH_BOOKMARK = 'editor/PATCH_BOOKMARK';
const REMOVE_BOOKMARK = 'editor/REMOVE_BOOKMARK';


// action creator
export const changeInput = createAction(CHANGE_INPUT);
export const initialize = createAction(INITIALIZE);
export const postBookmark = createAction(POST_BOOKMARK, api.postBookmark);
export const readBookmark = createAction(READ_BOOKMARK, api.readBookmarkList);
export const patchBookmark = createAction(PATCH_BOOKMARK, api.patchBookmark);
export const removeBookmark = createAction(REMOVE_BOOKMARK, api.removeBookmark);

// initial state
const initialState = Map({
    site_title: '',
    site_url: '',
    bookmarkId: null,
});

// reducer
export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload
        return state.set(name, value);
    },
    [INITIALIZE]: (state, action) => initialState,
    ...pender({
        type: POST_BOOKMARK,
        onSuccess: (state, action) => {
            const { id } = action.payload.data;
            return state.set('bookmarkId', id);
        }
    }),
    ...pender({
        type: READ_BOOKMARK,
        onSuccess: (state, action) => {
            const { site_title, site_url, id } = action.payload.data;
            return state.set('site_title', site_title)
                        .set('site_url', site_url)
                        .set('bookmarkId', id);
        }
    })
}, initialState);