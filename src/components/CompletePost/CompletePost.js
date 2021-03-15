import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Paper,Typography,Container,Grid,ButtonBase,TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import useStyles from './styles.js';


   

const CompletePost = (props) => {
    const classes = useStyles();
    const post_id=props.match.params.post;
     const [posts,setPosts]=useState([]);
     const [comments,setComments]=useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/posts/${post_id}`).then(response=>{
            setPosts(response.data.post);
            setComments(response.data.comments);
        })
    },[]);
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

            <Typography className={classes.commentstr} variant="h4" >
              Comments
            </Typography>
            <Paper className={classes.comments}>
            {comments.map((comment)=>(
                <div key={comment.title} className={classes.comment}>
                    <Typography variant="h5" className={classes.title}>{comment.title}</Typography>
                    <Typography variant="body1" className={classes.title}>{comment.body}</Typography>
                </div>
            ))}
            <TextField></TextField>
            </Paper>
          </Container>
        </>
    )
}

export default CompletePost
/*
<div>
            <Paper >
                <Typography variant="h5">{posts.title}</Typography>
            <Grid container spacing={2}>
          <Grid item>
              
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={posts.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {posts.overview}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {posts.body}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  {posts.created}
                </Typography>
              </Grid>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
            </Paper>
        </div>*/