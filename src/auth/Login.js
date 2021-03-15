import React from 'react';
import GoogleLogin from 'react-google-login';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {login} from '.././actions/login';
import axios from 'axios';
import {useState} from 'react';

export const Login = () => {
    const dispatch = useDispatch();
    const history=useHistory();
    const [profile,setProfile]=useState({result:'',token:''});
    const googleSuccess=async(response)=>{
        const result=response?.profileObj.name;
        const token=response?.tokenId;
        
        try{
            dispatch({type:"AUTH",data:{result,token}});
            dispatch(login(profile));
            history.push('/');
        }catch(error){
            console.log(error);
        }
        
    }
    const googleFailure=async ()=>{
        console.log("failed");
    }
    return (
        <div>
            <div className="header__login">
                    <div className="header__login-google">
                    <GoogleLogin
                        clientId="130831181306-gn9rouj8214vhp3qr7dju1dfe9e2bdbs.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                        buttonText="LOGIN WITH GOOGLE"
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                    />
                    </div>
                    
        </div>
        </div>
    )
}
export default Login