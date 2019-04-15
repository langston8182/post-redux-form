import {AT_POSTS} from "../actions/action-types";

export default function(state = [], action) {

    switch (action.type) {
        case AT_POSTS.READ_ALL:
            return action.payload;

        case AT_POSTS.DELETE:
            return state.filter((post) => {
               return post.id !== action.payload;
            });

        case AT_POSTS.CREATE:
            return [...state, action.payload];

        default:
            return state;
    }
}