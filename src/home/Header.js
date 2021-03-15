import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import './Header.css';
import {useHistory,useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Header()  {
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);
    
  const dispatch = useDispatch();
  const history=useHistory();
  const location=useLocation();
  const logout=()=>{
    dispatch({type:"LOGOUT"});
    history.push("/");
  }  
  useEffect(() => {
    const token=user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
    
  }, [location]);
      
  
    return (
        <div>
            <div className="header">
                
                <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      

      <div className="header__nav">
        
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Hi</span>
          <span className="header__optionLineTwo">Guest</span>
        </div>

      {user? (<div>
          <button onClick={logout}>Logout</button>
          
        </div>)
        :(<div>
          <Link to="/login">
          <button >Login</button>
          </Link>
        </div>
        )
}
                </div>
        
        






            </div>
        </div>
        
    )
      
    
}

export default Header
