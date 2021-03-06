import React from 'react'
import Post from './Post/Post';
import {useSelector} from 'react-redux';
import {Container,Grid} from '@material-ui/core';

import useStyles from './Post/styles';

const Posts = ({posts}) => {
   // const posts=useSelector((state)=>state.posts);
   const classes = useStyles();
    return (
      <Container className={classes.cont}>
            {posts.map((post) => (
          <div key={post.post_id}  className={classes.divc}>
            <Post post={post}  />
          </div>
        ))}
        </Container>
        
    )
}

export default Posts