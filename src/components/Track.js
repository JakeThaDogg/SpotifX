import React from 'react'
import '../css/Track.css'

export default class Track extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      playButton: 'http://www.curcaraibes.com/wp-content/uploads/2018/03/play-button-png-filename-play-button-png-237.png',
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
        <p className='track'> {this.props.name} | {this.props.albName} | {this.props.pop} <img onClick={this.handleClick} className='playButtonTr' src={this.state.playButton} alt='play button' /> </p>
      )
    } else {
      return (
        <p className='track'> {this.props.name} | {this.props.albName} | {this.props.pop} <br /> <audio controls><source src={this.props.prev} type='audio/mpeg' /></audio></p>
      )
    }
  }
}
