import { useState } from "react";
import { Link, withRouter } from "react-router-dom";


var searchValue='';

function handleOnchange(event) {
    searchValue = event.target.value;
}

function Navbar(props) {

    let getSearch = (event)=>{
        event.preventDefault();
        console.log('search value is ', searchValue)
        if (event.target.value.trim()!== '' || event.target.value.trim()!== undefined) {
            var url = '/search?q='+searchValue
            props.history.push(url) 
        }
        
    }

    //console.log(props);
    var [isLoggedIn, setLogin] = useState(false);
    var username = localStorage.getItem("username");
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">{props.sitetitle}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">Action</Link>
                <Link className="dropdown-item" to="#">Another action</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">Something else here</Link>
                </div>
            </li>
            <li className="nav-item">
                <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input id="test" onChange={handleOnchange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
            </form>
            { !username && <Link to="/login"><button className="btn btn-success my-sm-0 mx-2">Login</button></Link> }
            { username && <Link to="/logout"><button className="btn btn-danger my-sm-0 mx-2">Logout</button></Link> }
            { !username && <Link to="/register"><button className="btn btn-success my-sm-0 mx-2">Register</button></Link> }
        </div>
        </nav>
    );
}

// export default Navbar;
export default withRouter(Navbar);