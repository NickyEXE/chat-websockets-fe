import React, { Component } from 'react'
import Channel from '../components/Channel'
import { channelsRequest } from '../services/requests'

export default class ChannelContainer extends Component {

  state = {
    channels: []
  }

  componentDidMount(){
    channelsRequest()
    .then(channels => this.setState({ channels }))
  }

  render(){
    const channels = this.state.channels.map(channel => <Channel key={channel.id} changeChannel={this.props.changeChannel} {...channel} />)
    return (
      <aside>{channels}</aside>
    )
  }
}
