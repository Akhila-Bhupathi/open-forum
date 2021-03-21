import React from 'react';
import {
    Container,
    AppBar,
    Typography,
    Grow,
    Grid,
    Paper,
    Button,
  } from "@material-ui/core";
import Posts from ".././Posts/Posts";
import useStyles from "./styles.js";
import NavBar from '.././NavBar/NavBar';
import {useEffect,useState} from 'react';
import {useDispatch} from 'react-redux';
import {getPosts} from '../.././actions/posts';
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import LeaderBoard from '.././LeaderBoard/LeaderBoard';

const Home = () => {
  /*const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  const posts=useSelector((state)=>state.posts);
  const auth=useSelector((state)=>state.auth);
  const a=JSON.stringify(auth)
  const dispatch=useDispatch();
  const location=useLocation();
 // console.log(user);
  useEffect(() => {
    dispatch(getPosts());
    
  }, [location]); */

  const [posts,setposts]=useState([]);
  useEffect(() => {
    axios.get('https://floating-ridge-28249.herokuapp.com/posts').then(response=>setposts(response.data)).catch((error) => {
      console.log(error);
    });
    
  }, []);
  
    const classes = useStyles();
    return (
      
        <Grow in>
            <Container fixed>
          <Grid container  className={classes.gridc}>
          <Grid item xs={6} className={classes.posts}>
          <Posts posts={posts} />
        </Grid>
        <Grid item xs={6} className={classes.leader}>
          <LeaderBoard/>
        </Grid>
          </Grid>
          </Container>
            
          
            
        </Grow>
      
    );
}

export default Home
