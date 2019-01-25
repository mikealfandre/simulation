import React, {Component} from 'react'

function Product(props){

     
    
    return(
       
        
    <div>

        <h4>{props.img}</h4>
        <h4>{props.name}</h4>
        <h4>{props.price}</h4>
        <h4>{props.id}</h4>

        
        <button onClick={() => props.deleteProductFN(props.id)}>Delete</button>

    </div> 
        
    )
}

export default Product