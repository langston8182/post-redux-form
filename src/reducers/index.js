import { combineReducers } from 'redux';
import ReducerPosts from './reducer-posts';
import ActivePost from './reducer-active-post';

const rootReducer = combineReducers({
    posts: ReducerPosts,
    activePost: ActivePost,
});

export default rootReducer;
