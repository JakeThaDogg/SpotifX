import React from 'react'
import '../css/Track.css'

export default class Track extends React.Component {
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
    if (!this.state.isClick) {
      return (
        <p className='track'> {this.props.name} | {this.props.albName} | {this.props.pop} | <button type='button' className='listen'onClick={this.handleClick}>Listen Me !</button></p>
      )
    } else {
      return (
        <p className='track'> {this.props.name} | {this.props.albName} | {this.props.pop} <br /> <audio controls><source src={this.props.prev} type='audio/mpeg' /></audio></p>
      )
    }
  }
}
