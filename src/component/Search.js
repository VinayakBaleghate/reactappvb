import querystring from "query-string"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cake from './Cake';

function Search(props) {
    var query = querystring.parse(props.location.search)
    var urlis = 'https://apibyashu.herokuapp.com/api/searchcakes'+props.location.search
    console.log(urlis)
    var [cakes, searchCakes] = useState( [] )
    useEffect( () => {
         axios({
             method: 'get',
             url: urlis,
             //responseType: 'stream'
         })
         .then(function (response) {
            searchCakes(response.data.data);
            console.log(response.data.data);
         });
    }, [])


    return(
        <div className="container-fluid mb-5 search-page">
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

export default Search;