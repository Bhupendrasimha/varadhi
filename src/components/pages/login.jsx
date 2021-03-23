import React,{useState} from "react"
import {useDispatch,useSelector}from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button} from '@material-ui/core';
import {getLoginDetails} from "../redux/actionCreator.js"
import {Redirect} from "react-router-dom"

import {renderSuccess} from "../redux/actionCreator"
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


function Login(){
    
    const classes = useStyles()
    const [email,setEmail]=useState("")
    const [userName,setUserName]=useState("")
    const dispatch=useDispatch()
    const [error,setError]=useState(false)
    const isSuccess=useSelector((state)=>state.isSuccess)
    const isError=useSelector((state)=>state.isError)
    const userData=useSelector((state)=>state.userData)
    const [disErr,setDisErr]=useState("Please check Email and Username")
    
    
    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log(email,userName+"clcik")
        if(email.includes("@",".com")){
            let payload={
                email:email,
                username:userName
            }
            dispatch(getLoginDetails(payload))
            setError(false)
        }
        else{
            setError(true)

        }
        
    }
    if(isSuccess&&userData.length>=1){
        dispatch(renderSuccess())
      
    }
    
  //  {isSuccess&&userData.length>=1 ? :null}
    return(
        <>
        {isError?<div>Please enter registered details</div>:null}

        <form className={classes.root}>
     <div>
     
     {error?<div>Please type the registered email</div>:null}
      <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}/>
         
      </div>
      <div>
       
      <TextField id="outlined-basic" label="User Name" variant="outlined" onChange={(e)=>setUserName(e.target.value)}/>
         
      </div>
      <div>
      <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
    </div>
    </form>
    
    
        
        </>
    )
}
export default Login


