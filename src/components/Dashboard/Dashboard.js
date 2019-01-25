import React, {Component} from 'react'
import Product from './Product/Product'
import axios from 'axios'


class Dashboard extends Component{
    constructor(){
        super()
    }



    render(){

        const {inventory} = this.props;
        const inventoryList = inventory.map((product, index) => {
            return (<Product key={index} name={product.name} price={product.price} img={product.imageurl} id={product.product_id} deleteProduct={this.props.deleteProduct}/>)
        })

        return(
            <div>
            
            <div>Dashboard</div>
            
            {inventoryList}
            
            
            </div>
        )
    }
    
}

export default Dashboard