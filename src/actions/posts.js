import * as api from '.././api/index.js';

export const addPost=(post)=>async(dispatch)=>{
    try {
        const { data } = await api.addPost(post);
    
        dispatch({ type: 'CREATE', payload: data });
      } catch (error) {
        console.log(error);
      }
    };


export const getPosts=()=>async(dispatch)=>{
  try{
    const {data}=await api.getPosts();
    dispatch({type:'GET',payload:data});
  }
  catch(error){
    console.log(error);
  }
}

export const isLiked=(post_id)=>async(dispatch)=>{
  try{
    const {data}=await api.isLiked(post_id);
    dispatch({type:'GETLIKE',payload:data});
  }
  catch(error){
    console.log(error);
  }
}
