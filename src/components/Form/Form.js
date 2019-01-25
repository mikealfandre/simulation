import React, {Component} from 'react'


class Form extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
      this.clearFields = this.clearFields.bind(this)  
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

    


    render(){
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
                <button>Add To Inventory</button>





            </div>
            

        )
    }
    
}

export default Form