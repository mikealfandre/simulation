import React, {Component} from 'react'
import Product from './Product/Product'
import axios from 'axios'


class Dashboard extends Component{
    constructor(){
        super()

     this.deleteProduct = this.deleteProduct.bind(this)   
    }

    deleteProduct(id){
        axios.delete(`/api/inventory/${id}`)
            .then((response) => {
                console.log(response)
            })
        this.props.getRequest()    
    }

    



    render(){
        
       
        const {inventory} = this.props;
        const inventoryList = inventory.map((product, index) => {
            return (
            
            <div>

                <Product key={index} name={product.name} price={product.price} img={product.image_url} id={product.product_id} deleteProductFN={this.deleteProduct} />
                
            
            </div>

            
                
            
            )
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