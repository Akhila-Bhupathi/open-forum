import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Paper,Typography,Container,Grid,ButtonBase,TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import useStyles from './styles.js';
import uparrow from  '../.././images/up-arrow.png';
import {useHistory} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';

const CompletePost = (props) => {
    const classes = useStyles();
    const history=useHistory();
    const post_id1=props.match.params.post;
     const [posts,setPosts]=useState([]);
     const [comments,setComments]=useState([]);
     const [newcomment,setNewComment]=useState({post_id:post_id1,title:'',body:''});
     

    useEffect(()=>{
        axios.get(`http://localhost:5000/posts/${post_id1}`).then(response=>{
            setPosts(response.data.post);
            setComments(response.data.comments);
        })
    },[]);

    const handleSubmit=(e)=>{
      e.preventDefault();
     // setNewComment({...newcomment,post_id:post_id1});
      console.log(newcomment);
      axios.post('http://localhost:5000/comments',newcomment).then(response=>console.log(response));
      history.push('/');
    /*  dispatch(addPost(formData));
      history.push('/');*/
  }


    return (
        <>
          <Container maxwidth="sm" className={classes.con}>
          <Typography variant="h3" align="center" className={classes.text}>{posts.title}</Typography>
          <Typography variant="subtitle1" align="center" className={classes.text}>{posts.overview}</Typography>
          
          <Grid container spacing={3} justify="center" className={classes.grid}>
          <Grid item variant="contained" xs={6} md={6} className={classes.griditem}>
          
            <img className={classes.img} src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF3bnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
          
          </Grid>
          <Grid item variant="contained" xs={6} md={6} className={classes.griditem}>
          <Typography variant="body2" align="center" className={classes.body}>{posts.body}</Typography>
          <div className={classes.pro}>
          <ThumbUpIcon className={classes.icon} /><span className="classes.votes">{posts.votes}</span>
          <Typography variant="h6" className={classes.name}>{posts.name}</Typography>
          <Typography variant="h6" className={classes.date}>{posts.created}</Typography>
          </div>
          </Grid>
            </Grid>

            <Typography className={classes.commentstr} variant="h3" >
              Comments
            </Typography>
            <Paper className={classes.comments}>
            {comments.map((comment)=>(
                <Grid container spacing={3} key={comment.gridcomments} className={classes.comment}>
                    <Grid item xs={12}>
                    <Typography variant="h4" className={classes.ctitle}>{comment.title}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={10} className={classes.cgrid}>
                    <Typography variant="body1" className={classes.cbody}>{comment.body}</Typography>
                    <Typography variant="h6" className={classes.cname}>{comment.name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} className={classes.cgrid}>
                    <Button><img src={uparrow} className={classes.voteicon}/></Button>
                    <Typography variant="h6" className={classes.cvotes}>{comment.votes}</Typography>
                    </Grid>
                </Grid>
            ))}

              <Typography variant="h4" style={{marginTop:100,marginBottom:40}}>
                Add a comment
              </Typography>

            <Paper elevation={3} className={classes.cpaper}>
            <form onSubmit={handleSubmit} className={classes.form} autoComplete="off">
              <TextField className={classes.text} variant="standard" name="title" label="Title" fullWidth value={newcomment.title} onChange={(e)=>setNewComment({...newcomment,title:e.target.value})} ></TextField>
              <TextField className={classes.text} variant="standard" name="body" label="Body" fullWidth value={newcomment.body} onChange={(e)=>setNewComment({...newcomment,body:e.target.value})} ></TextField>
              <Button
            variant="contained"
            color="primary"
            className={classes.buttonSubmit} 
            type="submit"
            className={classes.button}
            endIcon={<SendIcon/>}
              ></Button>
              </form>

            </Paper>

            
            </Paper>
          </Container>
        </>
    )
}

export default CompletePost
