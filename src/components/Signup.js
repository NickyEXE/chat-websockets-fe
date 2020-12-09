import React, { Component } from 'react'
import { signupRequest } from '../services/requests.js'

export default class Signup extends Component{

  state = {
    username: "",
    password: "",
    passwordConfirmation: ""
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value})

  onSubmit = (e) => {
    e.preventDefault()
    const { username, password, passwordConfirmation } = this.state
    if (password === passwordConfirmation){
      const body = {username: username, password: password}
      signupRequest(body)
      .then(response => {
        if (!response.errors){
          this.props.setUser(response)
        } else {
          alert(response.errors)
        }
      })
    } else {
      alert("Passwords do not match!")
    }
  }

  render(){
    return (
      <div className="login">
        <h1>Signup!</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Username:
            <input type="text" name="username" onChange={this.onChange} value={this.state.username} />
          </label><br/>
          <label>
            Password:
            <input type="password" name="password" onChange={this.onChange} value={this.state.password} />
          </label><br/>
          <label>
            Password Confirmation:
            <input type="password" name="passwordConfirmation" onChange={this.onChange} value={this.state.passwordConfirmation} />
          </label><br/>
          <input type="submit" value="Signup!" style={{display: "none"}} />
        </form>
        <button onClick={this.props.toggleSignup}>Or Login!</button>
      </div>
    )
  }
 }
