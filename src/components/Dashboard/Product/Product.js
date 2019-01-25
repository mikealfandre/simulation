import React, {Component} from 'react'

function Product(props){

    return(
        
    <div>

        <h4>{props.img}</h4>
        <h4>{props.name}</h4>
        <h4>{props.price}</h4>

    </div> 
        
    )
}

export default Product