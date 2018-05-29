import React from 'react'
import '../css/TrackSrch.css'

export default class TrackSrch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState(prevState => ({
      isClick: !prevState.isClick
    }))
  }

  render () {
    let uri = this.props.img
    if (!this.state.isClick) {
      return (
        <p className='track'> {this.props.name} | {this.props.artistName} | {this.props.albName} | {this.props.pop} | <button style={{ backgroundImage: `url(${uri})` }} type='button' className='listen' onClick={this.handleClick}>Listen Me !</button></p>
      )
    } else {
      return (
        <p className='track'> {this.props.name} | {this.props.artistName} | {this.props.albName} | {this.props.pop} <br /> <audio controls><source src={this.props.prev} type='audio/mpeg' /></audio></p>
      )
    }
  }
}
