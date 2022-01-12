/* eslint-disable eqeqeq */
import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios'
const API_URL = 'https://jsonplaceholder.typicode.com'

const initialState = {
    posts : [ ],
    comments: [],
    post : {},
    user:{}
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getPostUser: (state, action) => {
            state.posts = action.payload
        },
        getComments: (state, action) => {
            state.comments = action.payload
        },
        getPost: (state, action) => {
            state.post = action.payload[0]
        },
        getUser: (state, action) => {
            state.user = action.payload[0]
        }
    }
})


export const getPostUserAsync = () => async (dispatch) => {

    try {
        const posts = await axios.get(`${API_URL}/posts`)
        const users = await axios.get(`${API_URL}/users`)
        const data = await {posts: posts.data, users:users.data}
        console.log("data",data)
        dispatch(getPostUser(data))
    } catch (e) {
        console.log(e)
    }
}

export const getPostByIdAsync = (id) => async (dispatch) => {

    try {
        const posts = await axios.get(`${API_URL}/posts`)
        const data = await posts.data.filter((post)=>post.id == id)
        console.log("posts",data)
        dispatch(getPost(data))
    } catch (e) {
        console.log(e)
    }
}
export const getCommentByIdAsync = (id) => async (dispatch) => {

    try {
        const comments = await axios.get(`${API_URL}/comments`)
        const data = await comments.data.filter((comment)=>comment.postId == id)
        console.log("comments",data)
        dispatch(getComments(data))
    } catch (e) {
        console.log(e)
    }
}
export const getUserByIdAsync = (id) => async (dispatch) => {

    try {
        const users = await axios.get(`${API_URL}/users`)
        const data = await users.data.filter((user)=>user.id == id)
        console.log("users",data)
        dispatch(getUser(data))
    } catch (e) {
        console.log(e)
    }
}


export const {getPostUser, getComments, getPost, getUser} = postSlice.actions

export default postSlice.reducer