import {Component} from "react"
import axios from 'axios';

class Signup extends Component {

    constructor(){
        super()
        this.state = {
            emailerrors: ''
        }
    }  
    
    handleOnchange = (e) => {
        this.setState({ input: e.target.value });
        
    }

    emailerror = (e) => {        
        //console.log(this.state.input);
        if ( (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.input) )) {
            
            var self = this;
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            
            axios({
                method: 'post',
                url: 'https://apibyashu.herokuapp.com/api/register',
                data: {
                    name: name,
                    email: email,
                    password: password
                }
            }).then(function (response) {
                self.setState({emailerrors:response.data.message})
                
                //console.log(response)                             
            });

            //console.log('signup form ready to work', name, email, password);
        } else {
            this.setState({
                emailerrors: 'Provide a valid email'
            });
        }
        e.preventDefault();        
    }
   

    render() {        
        return(            
            <div className="container-fluid p-4 mb-5" style={{backgroundColor: "#f2f2f2"}}>
                <form>
                    <div className="form-row">
                        <div className="col-md-3">
                            <input type="text" className="form-control" id="name" placeholder="Full name" />
                        </div>                        
                        <div className="col-md-5">
                            <input id="email" onChange={this.handleOnchange} type="emil" className="form-control" placeholder="Email" />
                            <p id="errorEmail">{this.state.emailerrors}</p>
                        </div>
                        <div className="col-md-3">
                            <input id="password" type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="col-md-1">
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.emailerror}>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        )            
    }    
}


export default Signup;