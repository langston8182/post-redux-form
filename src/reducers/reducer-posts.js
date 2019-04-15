import {AT_POSTS} from "../actions/action-types";

export default function(state = [], action) {
    switch (action.type) {
        case AT_POSTS.READ_ALL:
            return action.payload;
            break;

        default:
            return state;
    }
}