import React from 'react'
import axios from 'axios'
import Artist from './Artist'

export default class Spotify extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      artRes: []
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler (e) {
    this.setState({search: e.target.value})
    if (e.target.value.length >= 2) {
      let self = this
      axios({
        method: 'get',
        baseURL: `https://api.spotify.com/v1/search?query=${this.state.search}&type=artist`,
        headers: {
          'Authorization': `Bearer ${this.props.token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
        const RESULT = res.data.artists.items
        function Art (id, name, followers, genres, pop, img) {
          this.id = id
          this.name = name
          this.followers = followers
          this.genres = genres
          this.pop = pop
          this.img = img
        }

        let tab = []

        for (let i = 0; i < RESULT.length; i++) {
          let ima
          if (RESULT[i].images[0] === undefined) {
            ima = ''
          } else {
            ima = RESULT[i].images[0].url
          }
          let inst = new Art(RESULT[i].id, RESULT[i].name, RESULT[i].followers.total, RESULT[i].genres.map((genre) => { return (<li>{genre}</li>) }), RESULT[i].popularity, ima)
          tab.push(inst)
        }
        self.setState({artRes: tab})
      })
    }
  }
  render () {
    return (<div>
      <input onChange={this.changeHandler} placeholder='Search for an artist' />
      {
        this.state.artRes.map((artist, index) => {
          return (
            <ul>
              <Artist key={index} id={artist.id} name={artist.name} genres={artist.genres} followers={artist.followers} popularity={artist.pop} img={artist.img} token={this.props.token} />
            </ul>
          )
        })
      }
    </div>)
  }
}
