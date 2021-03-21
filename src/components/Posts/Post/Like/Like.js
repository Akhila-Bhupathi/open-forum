import React from 'react'
import {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {isLiked} from '../../../.././actions/posts';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import useStyles from './style';
import {Button} from '@material-ui/core';

const Like = ({post_id}) => {
    const classes=useStyles();
    const dispatch=useDispatch();
    const [vote,setVoted]=useState(false);
    useEffect(() => {
        dispatch(isLiked(post_id));
        
      }, []);
      
      const voted=useSelector((state)=>state.like);
      //const voted1=voted;
      console.log(voted);
      //const votes=voted.map((vote)=>)
    //const likes=JSON.stringify(like);
    
    
    return (
        <div>
            {({voted})?"YES":"NO"}

            
        </div>
    )
}

export default Like
/*
<Button size="small" color="primary">
          <ThumbUpIcon/>
        </Button>

        <Button size="small" color="primary">
          <ThumbUpIcon/>
        </Button>)  (<Button size="small" className={classes.unvote} color="primary">
          <ThumbUpIcon/>
        </Button>
        */