import React from 'react'
import axios from 'axios'

export default class SearchT extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
    this.searchHandle = this.searchHandle.bind(this)
  }

  searchHandle (e) {
    this.setState({search: e.target.value})
    console.log(this.state.search)
    if (e.target.value.length >= 2) {
      axios({
        method: 'get',
        baseURL: `https://api.spotify.com/v1/search?query=${this.state.search}&type=track`,
        headers: {
          'Authorization': `Bearer ${this.props.token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
        console.log(res.data)
      })
    }
  }

  render () {
    return (
      <div>
        <input onChange={this.searchHandle} placeholder='Search for a song' />
        {this.state.search}
      </div>
    )
  }
}
