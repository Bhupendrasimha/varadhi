import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory,Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import {logout} from "../redux/actionCreator"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Home() {
  const classes = useStyles();
  const history=useHistory()
  const dispatch=useDispatch()
 
    
    const handleLogout=()=>{
      console.log("LOGOUT")
      dispatch(logout())
      history.push("/login")
    }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.text}>
            Bhupendra Simha
          </Typography>
          <Typography variant = "h5" className={classes.title}>

          </Typography>

          <Link to="/users" 
          style={{textDecoration:"none",color:"white"}}>
          <Button color="inherit"  >Users</Button>
          </Link>
          <Link to="/blogs"
           style={{textDecoration:"none",color:"white"}}>
          <Button color="inherit"  >Blogs</Button>
          </Link>
    
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
          
        </Toolbar>
      </AppBar>

     
    </div>
  );
}
export default Home