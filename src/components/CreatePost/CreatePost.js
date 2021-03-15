import React from 'react'
import {Paper,Typography,Container,TextField,Button,TextareaAutosize} from '@material-ui/core';
import {useState} from 'react';
import FileBase from 'react-file-base64';
import {addPost} from '../.././actions/posts.js';
import {useDispatch} from 'react-redux';
import useStyles from './styles.js';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


const CreatePost = () => {
    const classes=useStyles();
    const [formData,setFormData]=useState({title:'',overview:'',body:'',image:''});

    const dispatch=useDispatch();
    const history=useHistory();
    const akhi={'one':'two','zeo':'re'};
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        axios.post('http://localhost:5000/posts',formData).then(response=>console.log(response));
        history.push('/');
      /*  dispatch(addPost(formData));
        history.push('/');*/
    }
    return (
        <Container className={classes.div}>
            <Paper className={classes.paper} style={{marginTop:'100',padding:10}}elevation={3}>
               <form onSubmit={handleSubmit} className={classes.form} autoComplete="off"> <Typography variant="h3" style={{padding:10}}>
                    Create post
                </Typography>
                <TextField className={classes.text} variant="standard" name="title" label="Title" fullWidth value={formData.title} onChange={(e)=>setFormData({...formData,title:e.target.value})} ></TextField>
                <TextField className={classes.text} variant="standard" name="overview" label="Overview" fullWidth value={formData.overview} onChange={(e)=>setFormData({...formData,overview:e.target.value})} ></TextField>
                <TextareaAutosize aria-label="minimum height" rowsMin={6} placeholder="Body" label="Body" variant="standard" fullWidth value={formData.body} className={classes.textarea} onChange={(e)=>setFormData({...formData,body:e.target.value})}/>
                <div className={classes.fileIn}>
                    <FileBase type="file" multiple={false}  onDone={({ base64 }) => setFormData({ ...formData, image: base64 })} /></div>
        <Button  variant="contained" color="primary" size="large" className={classes.buttonSubmit} type="submit" fullWidth>Submit</Button>
      </form>
            </Paper>
            </Container>
           
        
    )
}

export default CreatePost
