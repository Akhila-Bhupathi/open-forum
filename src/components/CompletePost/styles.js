import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        margin: 10,
        maxWidth: 500,
        align:'center',
      },
      imagediv: {
        width: 400,
        height: 400,
        margin:'0 auto',
        borderRadius:19,
        border:'1 solid black',
        marginTop:20,
      },
      text:{
        margin:'0 auto',
        width:'40%',
        align:'center',
        padding:5,
      },
      img: {
        display: 'block',
        maxWidth: '80%',
        maxHeight: '80%',
        borderRadius:19,
        border:'1 solid black'
      },
      body:{
        margin:'0 auto',
        align:'center',
      },
      grid:{
        alignItems:'center',
        padding:10,
        margin:'0 auto',
        position:'relative',
      },
      griditem:{
        margin:'0 auto',
        align:'center',
        padding:20,
        
      },
      body:{
        fontSize:15,
        width:'100%',
  
      },
      icon:{
        marginTop:40,
      },
      name:{
        
      },
      date:{
        
      },
      votes:{
          display:'inline-block',

      },
      pro:{
          position:'absolute',
          bottom:0,
          
      },
      commentstr:{
          marginTop:60,
      }
    }));
    