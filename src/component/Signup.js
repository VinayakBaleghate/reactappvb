import {Component} from "react"

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
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                        <div className="col-md-5">
                            <input onChange={this.handleOnchange} type="emil" className="form-control" placeholder="Email" />
                            <p id="errorEmail">{this.state.emailerrors}</p>
                        </div>
                        <div className="col-md-1">
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.emailerror}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )            
    }    
}




// function Signup() {
//     return(
//         <div className="container-fluid p-4 mb-5" style={{backgroundColor: "#f2f2f2"}}>
//             <form>
//                 <div className="form-row">
//                     <div className="col-md-3">
//                         <input type="text" className="form-control" placeholder="First name" />
//                     </div>
//                     <div className="col-md-3">
//                         <input type="text" className="form-control" placeholder="Last name" />
//                     </div>
//                     <div className="col-md-5">
//                         <input type="emil" className="form-control" placeholder="Email" />
//                         <p id="errorEmail"> </p>
//                     </div>
//                     <div className="col-md-1">
//                     <button className="btn btn-outline-success my-2 my-sm-0" onClick={onSubmit}>Submit</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

export default Signup;