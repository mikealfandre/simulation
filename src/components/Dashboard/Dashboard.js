import React, {Component} from 'react'
import Product from './Product/Product'


class Dashboard extends Component{

    

    render(){

        const {inventory} = this.props;
        const inventoryList = inventory.map((product, index) => {
            return (<Product key={index} name={product.name} price={product.price} img={product.imageurl}/>)
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