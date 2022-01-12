import { getPostUser, getComments, getPost, getUser } from '../redux/postSlice';

import axios from 'axios'
const API_URL = 'https://jsonplaceholder.typicode.com'


export const getPostUserAsync = () => async (dispatch) => {

    try {
        const posts = await axios.get(`${API_URL}/posts`)
        const users = await axios.get(`${API_URL}/users`)
        const data = await {posts: posts.data, users:users.data}
        console.log("data",data)
        return dispatch(getPostUser(data))
    } catch (e) {
        console.log(e)
    }
}


export const getDataByIdAsync = async (params) => {

    try {
        const results = await axios.get(`${API_URL}/${params}`)
        console.log("photos",results.data)
        return results.data
    } catch (e) {
        console.log(e)
    }
}

export const getPhotosByIdAsync = async (id) => {

    try {
        const photos = await axios.get(`${API_URL}/photos`)
        const data = await photos.data.filter((photo)=>photo.albumId == id)
        console.log("photos",data)
        return data
    } catch (e) {
        console.log(e)
    }
}

export const getDetailPostByid = (id) => async (dispatch) => {

    try {
        const post = await getDataByIdAsync(`posts/${id}`)
        const user = await getDataByIdAsync(`users/${id}`)
        const comments = await getDataByIdAsync(`comments?postId=${id}`)

        const data = {
            post: post,
            user: user,
            comments:comments
        }
        console.log("users", data)
        dispatch(getPost(data))
        return data
    } catch (e) {
        console.log(e)
    }
}

export const getDetailUserByid = (id) => async (dispatch) => {

    try {
        const user = await getDataByIdAsync(`users/${id}`)
        const albums = await getDataByIdAsync(`albums?userId=${id}`)

        const data = {
            user: user,
            albums:albums
        }
        console.log("details", data)
        dispatch(getUser(data))
        return data
    } catch (e) {
        console.log(e)
    }
}