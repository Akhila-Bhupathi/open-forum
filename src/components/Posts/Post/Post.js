import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import useStyles from './styles';
import Like from './Like/Like';
import Comments from '../../Comments/Comments';
import CompletePost from '../../CompletePost/CompletePost';
import {useHistory} from 'react-router-dom';

const Post = ({post}) => {
    const classes = useStyles();
    const history=useHistory();
    const send=(e)=>{
      e.preventDefault();
      history.push(`/completepost/${post.post_id}`)
    };
    return (
     
        <Card className={classes.card}>
        
      <CardActionArea>
        <CardMedia
        
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image={post.image}
          title={post.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ThumbUpIcon/>
        <Button size="small" color="primary" onClick={send}>
           More
        </Button>
      </CardActions>
    </Card>
    
    )
}

export default Post
