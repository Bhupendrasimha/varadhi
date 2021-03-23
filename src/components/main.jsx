import React from "react"
import Routes from"./routes/nav"
import Login from "./pages/login"
import {useSelector} from "react-redux"
function RenderPart(){
    const login=useSelector((state)=>state.login)
return(
    <>
    {login? <Routes/>:<Login/>}
    
   
</>
)
}
export default RenderPart