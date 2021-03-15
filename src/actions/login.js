
import * as api from '.././api/index.js';

export const login=(result)=>async(dispatch)=>{
    try{
        const {data}=await api.login(result);
        dispatch({type:'SEND',payload:data});
    }
    catch(error){
        console.log(error);
    }

}