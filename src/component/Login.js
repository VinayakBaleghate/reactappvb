import {Component} from "react"

class Login extends Component {
    
    constructor(props){
        super()
        this.state = {
            emailerrors: ''
        }
        console.log(props);
    } 
    
    
    
    handleOnchange = (e) => {
        this.setState({ input: e.target.value });       
    }

    emailerror = (e) => {        
        //console.log(this.state.input);
        if ( (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.input) )) {
            this.setState({
                emailerrors: 'Valid email'
            });
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
                        <div className="col-md-3"></div>                        
                        <div className="col-md-3">
                            <input onChange={this.handleOnchange} type="emil" className="form-control" placeholder="Email" />
                            <p id="errorEmail">{this.state.emailerrors}</p>
                        </div>
                        <div className="col-md-3">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="col-md-3">
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.emailerror}>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        )            
    }    
}


export default Login;