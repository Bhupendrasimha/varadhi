import React from "react"
import {Router,Route,Switch} from "react-router-dom"
import Login from "../pages/login"
import Home from "../pages/home"
import UsersCard from "../pages/users"
import BlogsCard from "../pages/blogs"
import BlogDetails from "../pages/blogDetails.jsx"
import history from "./history"

const Routes=()=>{
    return(
        <>
        <Home/>
       
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/users" component={UsersCard}/>
            <Route path="/blogs" component={BlogsCard}/>
            <Route path="/blog/:id" component={BlogDetails}/>
        </Switch>
  
        </>
    )
}

export default Routes