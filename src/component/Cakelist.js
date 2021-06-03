
//import cakes from './data';
import Cake from './Cake';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cakelist() {
    var [cakes, setCakes] = useState( [] )
   useEffect( () => {
        axios({
            method: 'get',
            url: 'https://apibyashu.herokuapp.com/api/allcakes',
            //responseType: 'stream'
        })
        .then(function (response) {
            setCakes(response.data.data);
            console.log(response.data.data);
        });
   }, [])
    

    return(
        <div className="container-fluid mb-5">
            <div className="row">
                {cakes.map((each,index) => {
                    return (
                        <Cake data={each} key={index}/>
                    )
                } )}
            </div>
        </div>
    )
}

export default Cakelist;