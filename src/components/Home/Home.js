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
    axios.get('http://localhost:5000/posts').then(response=>setposts(response.data));
    
  }, []);
  
    const classes = useStyles();
    return (
      
        <Grow in>
            
          
            <Posts posts={posts} />
          
            
        </Grow>
      
    );
}

export default Home
