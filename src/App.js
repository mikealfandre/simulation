import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'


class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [
        {
          name: 'red beanie',
          imageurl: 'this is a url',
          price: 9.99
        },
        {
          name: 'grey shirt',
          imageurl: 'this is a url 2',
          price: 15.99
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        
      <Dashboard inventory={this.state.inventory} />
      <Form />
      <Header />


      </div>
    );
  }
}

export default App;
