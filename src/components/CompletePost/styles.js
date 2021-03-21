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
      gridcomments:{
        alignItems:'center',
        padding:30,
        
        
        position:'relative',
        marginBottom:40,
      },
      griditem:{
        margin:'0 auto',
        align:'center',
        padding:10
        
      },
      cvotes:{
        align:'center',
        position:'absolute',
        padding:25,
      },
      cgrid:{
        margin:'0 auto',
        align:'center',
        padding:20,
        marginTop:50,
        marginTop:20,
        
      },
      body:{
        fontSize:15,
        width:'100%',
  
      },
      icon:{
        marginTop:40,
      },
      voteicon:{
        width:50,
        height:50
      },
      cname:{
        marginTop:10
      },
      cbody:{
        paddingLeft:20,
      },
      cpaper: {
        padding: theme.spacing(1),
        width:'100%',
        height:'60%',
        textAlign:'center',
        margin:'0 auto',
        marginBottom:40,
        
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
          marginBottom:40,
      },
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
    }));
    