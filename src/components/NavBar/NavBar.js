import React from 'react'
import {AppBar,Typography,Button,Toolbar,Avatar} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Link} from 'react-router-dom';
import useStyles from "./styles.js";
import AddIcon from '@material-ui/icons/Add';
import {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory,useLocation} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import {login} from '../.././actions/login';
import axios from 'axios';

const NavBar = () => {
    const classes=useStyles();
    const dispatch=useDispatch();
    const history=useHistory();
    const location=useLocation();
    const [userpro,setUserpro]=useState({google_id:'',name:'',email:'',tumbnail:''});
    const [user,setUser]=useState();
  console.log(user);
  const [profile,setProfile]=useState({result:'',token:''});
    const googleSuccess=(response)=>{
        const result=response?.profileObj;
        const token=response?.tokenId;
        console.log(response);
        setUserpro({...userpro,google_id:response.profileObj.googleId});
        setUserpro({...userpro,name:response.profileObj.name});
        setUserpro({...userpro,email:response.profileObj.email});
        setUserpro({...userpro,tumbnail:response.profileObj.tumbnail});
        console.log(userpro);
        
        try{
      /*      dispatch({type:"AUTH",data:{result,token}});
            dispatch(login(result));
            history.push('/'); */
        }catch(error){
            console.log(error);
        }
        
    }
    const googleFailure=()=>{
        console.log("failed");
    }
 /* useEffect(() => {
    const token=user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
    
  }, [location]);
*/
  const logout=()=>{
    localStorage.clear();
    history.push("/");
  };

  const create=()=>{
    history.push("/create");
  }
    return (
      
        <AppBar className={classes.appBar} position="sticky"  >
          
        <Typography  component={Link} className={classes.heading} to="/" variant="h4" >
          Open Forum Website
        </Typography>
      
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.brandContainer}>
            <AddIcon onClick={create} className={classes.icon} style={{ cursor: 'pointer' }}/>
            
            <Typography  variant="h6" className={classes.profile}>{user?.result.name}</Typography>
            <Avatar alt="Cindy Baker" className={classes.profilephoto} src={user?.result.imageUrl} />
            <Button variant="contained"  color="primary" className={classes.logout} onClick={logout}>Logout</Button>
          </div>
        ) : (
          <GoogleLogin
          clientId="130831181306-gn9rouj8214vhp3qr7dju1dfe9e2bdbs.apps.googleusercontent.com" 
          render={(renderProps) => (
              <Button className={classes.login} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} color="primary" >
                Sign In
              </Button>
            )}
          
          onSuccess={googleSuccess}
          onFailure={googleFailure}
      />
        )}
      </Toolbar>
      </AppBar>
      
    )
}

export default NavBar
/*
 <Link to="/login">
        <Button variant="contained" color="primary">
          Login
        </Button>
        </Link>
        <Link to="/create">
          <AddIcon/>
        </Link>*/