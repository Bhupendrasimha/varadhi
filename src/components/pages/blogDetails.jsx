import React,{useEffect} from "react"
import { useHistory, useParams } from "react-router-dom";
import {useSelector} from "react-redux"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


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
  });
  
function BlogDetails(){
    const classes = useStyles();
    const history = useHistory()
  const blog=useSelector((state)=>state.blog)
console.log(blog)

  //  const {title,description,category,subtask,official,others,personal,date} = location.state.item
return(
    <>
   
<Card className={classes.root}>
<CardContent>
<Typography  color="textSecondary" >
  {blog.title}
</Typography>

<Typography  color="textSecondary" >
  {blog.body}
</Typography>
<CardActions>
<Button onClick={()=>history.goBack()}>GO BACK</Button>
</CardActions>
 </CardContent>

</Card>
    </>
)
}
export default BlogDetails