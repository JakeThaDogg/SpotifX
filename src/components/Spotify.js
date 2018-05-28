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
        function Art (id, name, followers, genres, pop, img) {

          this.id = id
          this.name = name
          this.followers = followers
          this.genres = genres
          this.pop = pop
          this.img = img
        }

        let tab = []


        const result = res.data.artists.items

        for (let i = 0; i < result.length; i++) {
          let ima
          if (result[i].images[0] === undefined) {
            ima = ''
          } else {
            ima = result[i].images[0].url
          }
          let inst = new Art(result[i].id, result[i].name, result[i].followers.total, result[i].genres.map((genre) => { return (<li>{genre}</li>) }), result[i].popularity, ima)
          tab.push(inst)
        }
        self.setState({artRes: tab})
      })
    }
  }
  render () {
    return (<div>
      <input onChange={this.changeHandler} />
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
