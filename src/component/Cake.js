function Cake(props) {
    return(
        <div className="card col cake-item mx-2">
            <img src={props.data.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.price}</p>                
            </div>
        </div>
    )
}

export default Cake;