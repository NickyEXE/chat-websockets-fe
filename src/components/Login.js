import React, { Component } from 'react'
import { loginRequest } from '../services/requests'

export default class Login extends Component{

  state = {
    username: "",
    password: ""
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value})

  onSubmit = (e) => {
    e.preventDefault()
    const { username, password } = this.state
    const body = {username: username, password: password}
    loginRequest(body)
    .then(response => {
      if (!response.errors){
        console.log(response)
        this.props.setUser(response)
      } else {
        alert(response.errors)
      }
    })
  }

  render(){
    return (
      <div className="login">
        <h1>Login!</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Username:
            <input type="text" name="username" onChange={this.onChange} value={this.state.username} />
          </label><br/>
          <label>
            Password:
            <input type="password" name="password" onChange={this.onChange} value={this.state.password} />
          </label>
          <br/>
          <input type="submit" value="Login!" style={{display: "none"}}/>
        </form>
        <button onClick={this.props.toggleSignup}>Or Sign Up!</button>
      </div>
    )
  }


 }
