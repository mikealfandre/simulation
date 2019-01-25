import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'


class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
      curProduct: {}
    }

    this.componentDidMount = this.componentDidMount.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    

  }

  componentDidMount(){
    axios.get('/api/inventory')
      .then(response => {
        this.setState({
          inventory: response.data
        })
      })
  }



  deleteProduct(id){
    axios.delete(`/api/inventory/${id}`)

    
  }




  render() {
    return (
      <div className="App">
        
      <Dashboard inventory={this.state.inventory} deleteProduct={this.deleteProduct} id={this.state.inventory.product_id} getRequest={this.componentDidMount} />
      <Form getRequest={this.componentDidMount} inventory={this.state.inventory} currentProduct={this.state.curProduct} />
      <Header />


      </div>
    );
  }
}

export default App;
