import React, {Component} from 'react'

export default class MessageForm extends Component {

  state = {
    content: ""
  }

  onChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addMessage(this.state)
    this.setState({
      content: ""
    })
  }

  render(){
    return(
    <form className="message-form" onSubmit={this.onSubmit}>
      <input type="content" name="content" value={this.state.content} onChange={this.onChange} id="content" />
      <br/>
      <input type="submit" value="Submit" />
    </form>
    )
  }

}
