import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios'
const API_URL = 'https://jsonplaceholder.typicode.com'

const initialState = {
    posts : [ ]
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getPostUser: (state, action) => {
            state.posts = action.payload
        }
    }
})


export const getPostUserAsync = () => async (dispatch) => {

    try {
        const posts = await axios.get(`${API_URL}/posts`)
        const users = await axios.get(`${API_URL}/users`)
        const data = await {posts: posts.data, users:users.data}
        console.log("hia",data)
        dispatch(getPostUser(data))
    } catch (e) {
        console.log(e)
    }
}

export const {getPostUser} = postSlice.actions

export default postSlice.reducer