import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Cakedetails(props) {
    var params = useParams()
    var [ratingWidth, setRatingWidth]=useState(0);
    var [quantity, setQty]=useState(1);

    let starWidth=(value)=>{
		
		let ratingString=(Math.max(0, (Math.min(5, parseFloat(value)))) * 16)+"px";
		setRatingWidth(ratingString)
	}
    let quantityChange=(e)=>{
		setQty(e.target.value);
	}

    var [cake, setCakes] = useState( [] )
    useEffect( () => {
         axios({
             method: 'get',
             url: 'https://apibyashu.herokuapp.com/api/cake/'+params.cakeid,
             //responseType: 'stream'
         })
         .then(function (response) {
            setCakes(response.data.data);
            starWidth(response.data.data.ratings)
            console.log(response.data.data);
         });
    }, [params.cakeid])
    
    return(
        <div className="row m-0">
        <div className="col-lg-6 left-side-product-box pb-3">
            <img width="100%" src={cake.image} className="border p-3" alt={cake.name}/>
        </div>
        <div className="col-lg-6">
            <div className="right-side-pro-detail p-3 m-0">
                <div className="row">
                    <div className="col-lg-12">						
                        <h2 className="m-0 p-0">{cake.name}</h2>
                    </div>
                    <div className="content mt-2 mb-2 col-lg-12">
                        <div className="ratings"><strong>Ratings: </strong> <span className="product-rating">{cake.ratings}</span><span>/5</span>
                            <span className="stars"><span style={{width:ratingWidth}}></span></span>
                            <span>({cake.reviews} reviews)</span>
                        </div>
                    </div>
                    <div className="col-lg-12"></div>
                    <div className="col-lg-12">
                        <p className="m-0  pb-2 price-pro">&#8377;{cake.price}</p>                        
                    </div>

                    <div className="col-lg-12">
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Cake Detail</a>
                                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Other Details</a>
                            </div>
                        </nav>
                        <div class="tab-content bg-light p-4" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <span>{cake.description}</span>                                
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <p className="tag-section"><strong>Weight : </strong> {cake.weight} Kg</p>
                                <p className="tag-section"><strong>Flavour : </strong> {cake.flavour}</p>
                                <p className="tag-section"><strong>Occasion : </strong> {cake.type}</p>
                                <p className="tag-section"><strong>Ingredients : </strong> {cake.ingredients}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="p-0 mt-3 mb-2"/>
                <div className="row">                
                    <div className="col-lg-3">
                        <h6>Quantity :</h6>
                        <input type="number" name="quntity" className="form-control text-center w-100" value={quantity} onChange={quantityChange}/>
                    </div>
                    <div className="col-lg-9 mt-4">
                        <a href="/cart" className="btn btn-success w-100" >Add To Cart</a>                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Cakedetails;