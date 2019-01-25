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
      inventory: []
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
    axios.delete(`/api/inventory?id=${id}`)

    this.componentDidMount()
}




  render() {
    return (
      <div className="App">
        
      <Dashboard inventory={this.state.inventory} getRequest={this.componentDidMount} deleteProduct={this.deleteProduct} />
      <Form getRequest={this.componentDidMount} />
      <Header />


      </div>
    );
  }
}

export default App;
