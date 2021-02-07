import {
    CREATE_STREAM,
    UPDATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM
} from "../actions/types";
import { omit, mapKeys } from "lodash";

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_STREAM:
        case FETCH_STREAM:
        case UPDATE_STREAM:
            return {...state, [action.payload.id] : action.payload};
        case DELETE_STREAM:
            return omit(state, action.payload );
        case FETCH_STREAMS:
            return {...state, ...mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}
