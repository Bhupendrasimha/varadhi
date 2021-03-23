import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useDispatch,useSelector} from "react-redux"
import {getUsersDetails} from "../redux/actionCreator"

import Grid from "@material-ui/core/Grid"
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function UsersCard() {
    const classes = useStyles();
    const dispatchs=useDispatch()
    const usersData=useSelector((state)=>state.usersDetails)
     console.log("invoked")
    useEffect(()=>{
      dispatchs(getUsersDetails())
    },[])
    console.log(usersData)
    return (
        <div>
           < Grid container spacing={2}>
        {usersData&&usersData.map((item)=>
        
            <Grid item sm={12} lg={6}>

        <Card className={classes.root}>
        <CardContent>
       <Typography  color="textSecondary" >
         Name :  {item.name}
        </Typography>
         <Typography>
          Email : {item.email}
        </Typography>
        <Typography>
          User Name : {item.username}
        </Typography>
      
         </CardContent>
      
    </Card>
    </Grid>
        
      
    )}
    </Grid>
    </div>
  );
}
export default UsersCard