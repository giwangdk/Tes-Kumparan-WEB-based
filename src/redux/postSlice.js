/* eslint-disable eqeqeq */
import {createSlice} from '@reduxjs/toolkit';

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
            state.post = {}
            state.user = {}    
        },
        getComments: (state, action) => {
            state.comments = action.payload
        },
        getPost: (state, action) => {
                state.post = {}
                state.post =  action.payload
                state.user = {}
        },
        getUser: (state, action) => {
            state.user = action.payload
            state.post = {}
        }
    }
})



export const {getPostUser, getComments, getPost, getUser} = postSlice.actions

export default postSlice.reducer