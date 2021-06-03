
import './App.css';
import './mystyle.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Login from './component/Login';
import PageNotFound from './component/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

var userDetails = {
	userName: "Vinayak",
	password: "123456"
}


function App() {
  return (
    <Router>
      <Navbar sitetitle="MyReactApp" mylink="test" userDetails={userDetails} ></Navbar>
      <Switch>
        <Route exact path="/" > <Home/> </Route>     
        <Route path="/login" component={Login} />      
        <Route exact Link="/*"> <PageNotFound /> </Route> 
      </Switch>
           
    </Router>
  );
}

export default App;
