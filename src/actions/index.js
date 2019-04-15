import axios from 'axios';
import {AT_POSTS} from "./action-types";

const END_POINT = "http://localhost:8080";

export function readAllPost() {
    return function (dispatch) {
        axios.get(`${END_POINT}/posts`).then(response => {
            dispatch({
                type: AT_POSTS.READ_ALL,
                payload: response.data
            })
        });
    }
}

export function readPost(id) {
    return function (dispatch) {
        axios.get(`${END_POINT}/posts/${id}`).then(response => {
            dispatch({
                type: AT_POSTS.READ,
                payload: response
            })
        });
    }
}

export function deletePost(id) {
    return function (dispatch) {
        axios.delete(`${END_POINT}/posts/${id}`).then(response => {
            dispatch({
                type: AT_POSTS.READ_ALL,
                payload: id
            })
        });
    }
}

export function createPost(post) {
    return function (dispatch) {
        axios.post(`${END_POINT}/posts/`,
            {
                title: post.title,
                content: post.content,
                author: post.author
            }
        ).then(response => {
            dispatch({
                type: AT_POSTS.CREATE,
                payload: response.data
            })
        });
    }
}