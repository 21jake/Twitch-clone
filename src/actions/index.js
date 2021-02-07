import streams from '../api/stream';
import history from "../history";

import {
    SIGN_IN, SIGN_OUT,
    CREATE_STREAM,
    UPDATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM
} from "./types";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}
export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = values => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const res = await streams.post('/streams', { ...values, userId });
    dispatch({
        type: CREATE_STREAM,
        payload: res.data
    })
    history.push('/')
}
export const fetchStreams = () => async dispatch => {
    const res = await streams.get('/streams');
    dispatch({
        type: FETCH_STREAMS,
        payload: res.data
    })
}
export const fetchStream = id => async dispatch => {
    const res = await streams.get(`/streams/${id}`);
    dispatch({
        type: FETCH_STREAM,
        payload: res.data
    })
}
export const updateStream = (id, values) => async dispatch => {
    const res = await streams.put(`/streams/${id}`, values);
    dispatch({
        type: UPDATE_STREAM,
        payload: res.data
    })
}
export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
}