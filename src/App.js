import React, { Component } from 'react'
import './App.css';
import User from './components/user';


class App extends Component {
  state = {
    users: [
      {name: 'Will', hobbies: 'b-ball'},
      {name: 'James', hobbies: 'football'},
      {name: 'Boswell', hobbies: 'baseball'}
    ]
  }

  // object.assign takes an empty array and copies the contents 
  deleteUser = (index, e) =>{
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({users:users})
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user, index) =>{
              return(<User 
                hobbies={User.hobbies}
                deletion={this.deleteUser.bind(this, index)}
              >{User.name}</User>)
            })
          }
        </ul>
      </div>
    )
  }
}


export default App

