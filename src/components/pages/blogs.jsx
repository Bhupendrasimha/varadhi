import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useDispatch,useSelector} from "react-redux"
import {getBlogsDetails,getUsersDetails,singleBlog} from "../redux/actionCreator"
import Grid from "@material-ui/core/Grid"
import {Link,useHistory} from "react-router-dom"
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
//import history from "../routes/history"
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height:120,
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
  select:{
    width:180,
  }
});

function BlogsCard() {
    const classes = useStyles();
    const history=useHistory()
      const dispatchs=useDispatch()
    const blogsData=useSelector((state)=>state.blogData)
    const userData = useSelector((state)=>state.usersDetails)
    const [user,setUser] = useState(0)
    const [filter,setFilter] = useState(blogsData,...blogsData)
//     console.log("invoked")

     useEffect(()=>{
      dispatchs(getBlogsDetails())
      dispatchs(getUsersDetails())
    },[])
const handleBlog=(id,item)=>{
  //console.log(item)  
  dispatchs(singleBlog(item))
  
  history.push(`/blog/${id}`);
}
const handleAuthor=()=>{
  console.log(user)
  const items = blogsData.filter(item=>item.userId == Number(user))
  setFilter(items,...blogsData)
  console.log(filter)
}
    // console.log(filter)
    return (
        <div>
          <FormControl className ={classes.select}>
          <InputLabel id="Select-author">Select Author</InputLabel>
          <Select
          Id = "Select-author"
          value = {user}
          onChange = {
            (e)=>setUser(e.target.value)
            
          }
          >
            <MenuItem value = "0" > None
            </MenuItem>
            {
             userData&& userData.map(item=>(
               <MenuItem value = {item.id}> 
                  {item.name}
                </MenuItem>
              ))
            }
          </Select>
          
          </FormControl><Button onClick = {handleAuthor}>Select</Button>
           < Grid container spacing={2}>
       {user == 0 ?blogsData.map((item)=>
        
            <Grid item sm={12} lg={3} key={item.id}>

              <Card className={classes.root}>
                <CardContent>
                  <Typography  color="textSecondary" >
                      {item.title}
                  </Typography>
                </CardContent>
                  <CardActions>
                    <Link size="small" onClick={()=>handleBlog(item.id,item)}>View Blog</Link>
                  </CardActions>
              </Card>

            </Grid>
        
      
    ):filter.map((item)=>
        
    <Grid item sm={12} lg={3} key={item.id}>

      <Card className={classes.root}>
        <CardContent>
          <Typography  color="textSecondary" >
              {item.title}
          </Typography>
        </CardContent>
          <CardActions>
            <Link size="small" onClick={()=>handleBlog(item.id,item)}>View Blog</Link>
          </CardActions>
      </Card>

    </Grid>)
}
      
    
    </Grid>
    </div>
  );
}
export default BlogsCard