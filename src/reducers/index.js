import { combineReducers } from 'redux';
import ReducerPosts from './reducer-posts';
import ActivePost from './reducer-active-post';
import {reducer as ReducerForm} from "redux-form";

const rootReducer = combineReducers({
    posts: ReducerPosts,
    activePost: ActivePost,

    form: ReducerForm
});

export default rootReducer;
