import { Link } from "react-router-dom";


function Cake(props) {
    return(
        <div className="col-md-3 cake-item my-3">
            <div className="card px-3">
                <Link to={'/cake/'+props.data.cakeid}><img src={props.data.image} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.data.name}</h5>
                    <p className="card-text">{props.data.price}</p>                
                </div></Link>
            </div>
        </div>
    )
}

export default Cake;