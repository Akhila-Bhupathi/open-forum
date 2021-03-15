import logo from "./logo.svg";
import "./App.css";
import Header from "./home/Header";
import Home from "./components/Home/Home";
import Login from "./auth/Login";
import {Container} from '@material-ui/core';
import CreatePost from './components/CreatePost/CreatePost';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Sample from './Sample';
import CompletePost from "./components/CompletePost/CompletePost";

function App() {
  
  return(
    
   <Router>
    
      <NavBar />
      
      <Switch>
        <Route path="/create" component={CreatePost} />
        <Route path="/completePost/:post" component={CompletePost} />
        <Route path="/" component={Home} >
          </Route>
      </Switch>
    
    
    </Router>
  );
  
}

export default App;
/*
  */
