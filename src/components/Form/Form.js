import React, {Component} from 'react'
import axios from 'axios'


class Form extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            name: '',
            price: 0,
            imgurl: '',
            id: null
            
        }
      this.clearFields = this.clearFields.bind(this) 
      this.addProduct = this.addProduct.bind(this) 
    }

    componentDidUpdate(prevProps){
        if (this.props.id !== prevProps.currentProduct.product_id){
            this.fetchData(this.props.userID)
        }

    }

    handleInputIMG(input){
        this.setState({
            imgurl: input
        })
    }
    handleInputName(input){
        this.setState({
            name: input
        })
    }
    handleInputPrice(input){
        this.setState({
            price: +input
        })
    }
    clearFields(){
        this.setState({
            imgurl: '',
            price: '',
            name: ''

        })
    }
    addProduct(){
        const {imgurl, name, price} = this.state
        
        axios.post('/api/product', {imgurl, name, price})
            .then((response) => {
                console.log(response)
            })

       this.props.getRequest()
       this.clearFields()
    }

    

    


    render(){
        console.log(this.state)
        return(
            <div>
                <div>Form</div>
                <p>Image URL:</p>
                    <input value={this.state.imgurl} onChange={(e) => this.handleInputIMG(e.target.value)} />
                <p>Product Name</p>
                    <input value={this.state.name} onChange={(e) => this.handleInputName(e.target.value)} />
                <p>Price</p>
                    <input value={this.state.price} onChange={(e) => this.handleInputPrice(e.target.value)} />
                
                <button onClick={this.clearFields}>Cancel</button>
                <button value ={this.addProduct} onClick={this.addProduct}>Add To Inventory</button>
                
                {this.props.getRequest}






            </div>
            

        )
    }
    
}

export default Form