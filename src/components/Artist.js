import React from 'react'
import axios from 'axios'
import '../css/Artist.css'
import Track from './Track'

export default class Artist extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tracks: []
    }
  }
  componentWillUpdate () {
    axios({
      method: 'get',
      baseURL: `https://api.spotify.com/v1/artists/${this.props.id}/top-tracks?country=FR`,
      headers: {
        'Authorization': `Bearer ${this.props.token}`
      }
    })
      .then(res => {
        function Trac (id, name, albName, prev, expl, pop) {

          this.id = id
          this.name = name
          this.albName = albName
          this.prev = prev
          this.expl = expl
          this.pop = pop
        }


        let result = res.data.tracks
        let tra = []
        for (let i = 0; i < result.length; i++) {
          let inst = new Trac(
            result[i].id,
            result[i].name,
            result[i].album.name,
            result[i].preview_url,
            result[i].explicit,
            result[i].popularity
          )
          tra.push(inst)
        }
        this.setState({tracks: tra})
      })
  }

  componentWillUnmount () {
    this.setState({tracks: []})
  }

  render () {
    let uri = this.props.img
    return (
      <div className='artist' style={{ backgroundImage: 'linear-gradient( 125deg, rgba(30, 215, 96, 1),rgba(255, 255, 255, 0.5) ) ,url(' + uri + ')' }} >
        <p className='name'>{this.props.name}</p>
        <img src={this.props.img} alt={this.props.name} />
        <p> {this.props.followers} followers </p>
        <p> Genre: {this.props.genres} </p>
        <p> {this.props.name} has {this.props.popularity} on 100 points of popularity </p>

        <div> Top tracks :
          {
          this.state.tracks.map((track, i) => {
            return (
              <li>
                <Track key={i} name={track.name} albName={track.albName} pop={track.pop} prev={track.prev} />
              </li>
            )
          })
        }
        </div>
      </div>
    )
  }
}
