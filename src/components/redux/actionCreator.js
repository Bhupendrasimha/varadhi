import {LOGIN_REQ,LOGIN_REQ_FAILURE,LOGIN_REQ_SUCCESS,
USERS_REQ,USERS_REQ_FAILURE,USERS_REQ_SUCCESS,
BLOGS_REQ,BLOGS_REQ_FAILURE,BLOGS_REQ_SUCCESS,RENDER, RENDER_SUCCESS,LOG_OUT
,SINGLE_BLOG} from "./actionType"

import axios from "axios"

const loginReq=()=>({
    type:LOGIN_REQ
})

const loginReqSuccess=(payload)=>({
    type:LOGIN_REQ_SUCCESS,
    payload
})

const loginReqFailure=(payload)=>({
    type:LOGIN_REQ_FAILURE,
    payload
})

export const getLoginDetails=(payload)=>(dispatch)=>{
    dispatch(loginReq)
    var url=`https://jsonplaceholder.typicode.com/users?email=${payload.email}&username=${payload.username}`
    
    axios({
        method:"GET",
        url:url
    })
    .then((res) =>dispatch(loginReqSuccess(res.data)))
    .catch((err) =>dispatch(loginReqFailure(err)))

}

//USERS DATA


const usersReq=()=>({
    type:USERS_REQ
})

const usersReqSuccess=(payload)=>({
    type:USERS_REQ_SUCCESS,
    payload
})

const usersReqFailure=(payload)=>({
    type:USERS_REQ_FAILURE,
    payload
})

export const getUsersDetails=()=>(dispatch)=>{
    dispatch(usersReq)
    var url=`https://jsonplaceholder.typicode.com/users`    
    axios({
        method:"GET",
        url:url
    })
    .then((res) => dispatch(usersReqSuccess(res.data)))
    .catch((err) =>dispatch(usersReqFailure(err)))

}


//BLOGS DATA

const blogsReq=()=>({
    type:BLOGS_REQ
})

const blogsReqSuccess=(payload)=>({
    type:BLOGS_REQ_SUCCESS,
    payload
})

const blogsReqFailure=(payload)=>({
    type:BLOGS_REQ_FAILURE,
    payload
})

export const getBlogsDetails=()=>(dispatch)=>{
    dispatch(blogsReq)
    var url=`https://jsonplaceholder.typicode.com/posts`    
    axios({
        method:"GET",
        url:url
    })
    .then((res) =>dispatch(blogsReqSuccess(res.data)))
    .catch((err) =>dispatch(blogsReqFailure(err)))

}
export const render=(payload)=>({
    type:RENDER,
    payload
})
export const renderSuccess=(payload)=>({
    type:RENDER_SUCCESS,
    payload
})



export const singleBlog=(payload)=>({
    type:SINGLE_BLOG,
    payload
})

export const logout=(payload)=>({
    type:LOG_OUT,
    payload

})