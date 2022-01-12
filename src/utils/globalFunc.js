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

export const getPostByIdAsync = async (id) => {

    try {
        const posts = await axios.get(`${API_URL}/posts`)
        const data = await posts.data.filter((post)=>post.id == id)
        console.log("posts",data)
        return data
    } catch (e) {
        console.log(e)
    }
}
export const getCommentByIdAsync = async (id) => {

    try {
        const comments = await axios.get(`${API_URL}/comments`)
        const data = await comments.data.filter((comment)=>comment.postId == id)
        console.log("comments", data)
        return data
    } catch (e) {
        console.log(e)
    }
}
export const getUserByIdAsync = async (id) => {

    try {
        const users = await axios.get(`${API_URL}/users`)
        const data = await users.data.filter((user)=>user.id == id)
        console.log("users",data)
        return data
    } catch (e) {
        console.log(e)
    }
}
export const getAlbumByIdAsync = async (id) => {

    try {
        const albums = await axios.get(`${API_URL}/albums`)
        const data = await albums.data.filter((album)=>album.userId == id)
        console.log("albums",data)
        return data
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
        const post = await getPostByIdAsync(id)
        const user = await getUserByIdAsync(post[0].id)
        const comments = await getCommentByIdAsync(post[0].id)

        const data = {
            post: post[0],
            user: user[0],
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
        const user = await getUserByIdAsync(id)
        const albums = await getAlbumByIdAsync(user[0].id)

        const data = {
            user: user[0],
            albums:albums
        }
        console.log("details", data)
        dispatch(getUser(data))
        return data
    } catch (e) {
        console.log(e)
    }
}