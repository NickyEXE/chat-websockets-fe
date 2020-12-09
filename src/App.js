// import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import MessageContainer from './containers/MessageContainer'
import ChannelContainer from './containers/ChannelContainer'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Signup from './components/Signup'
import { autologinRequest } from './services/requests';

class App extends Component {

  state = {
    channel: null,
    user: {id: null, name: ""},
    signup: false
  }

  componentDidMount(){
    if (localStorage.token){
      autologinRequest()
      .then(response => {
        if (!response.errors){
          this.setUser(response)
        } else {
          alert(response.errors)
        }
      })
    }
  }

  changeChannel = (id) => this.setState({ channel: id })

  renderMainContainer = () => {
    return this.state.user.username ?
      this.state.channel ?
        <MessageContainer channel={this.state.channel}/> :
        <Welcome/>
      :
        this.state.signup ?
          <Signup setUser={this.setUser} toggleSignup={this.toggleSignup}/> :
          <Login setUser={this.setUser} toggleSignup={this.toggleSignup}/>
  }

  setUser = (response) => {
    this.setState({user: response.user})
    localStorage.token = response.token
  }

  toggleSignup = () => this.setState({signup: !this.state.signup})

  logout = () => {
    this.setState({user: {id: null, username: ""}})
    localStorage.clear("token")
  }

  render(){
    return (<>
        <header>
        {this.state.user.username && <button onClick={this.logout}>Logout</button>}
        <h1 onClick={() => this.changeChannel(null)}>Welcome to Hacker Chat</h1>
        <h3>A place for hackers and slashers to cut loose and cut flesh</h3>
        </header>
        <ChannelContainer changeChannel={this.changeChannel}/>
      <main>{this.renderMainContainer()}</main>
      </>
    );
  }
}

export default App;
