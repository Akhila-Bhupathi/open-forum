import React,{useState,useEffect} from 'react'

import useStyles from './styles';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';

function LeaderBoard() {
  const classes = useStyles();
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/profile/lead").then(response=>{
        setUsers(response.data);
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    })
},[]);


  return (
    <Card className={classes.root} elevation={15}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Users and points
        </Typography>
        <Typography  variant="h4">
          Leaderboard
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Grid container>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Shipping
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              €0
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Total
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              €0
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button size="large" color="secondary">
          
        </Button>
      </CardActions>
    </Card>
  );
}

export default LeaderBoard
