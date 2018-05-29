import React from 'react'
import '../css/TrackSrch.css'

export default class TrackSrch extends React.Component {
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
    let uri = this.props.img
    if (!this.state.isClick) {
      return (
        <p className='trackSrch'> {this.props.name} | {this.props.artistName} | {this.props.albName} | {this.props.pop} <button style={{ backgroundImage: `url(${uri})`, backgroundSize: 'contain' }} type='button' className='buttonSrch' onClick={this.handleClick}> <img className='playButton' src={this.state.playButton} alt='play button' /> </button></p>
      )
    } else {
      return (
        <p className='trackSrch'> {this.props.name} | {this.props.artistName} | {this.props.albName} | {this.props.pop} <br /> <audio controls><source src={this.props.prev} type='audio/mpeg' /></audio></p>
      )
    }
  }
}
