import React from 'react'
import axios from 'axios'
import TrackSrch from './TrackSrch'

export default class SearchT extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      resTra: []
    }
    this.searchHandle = this.searchHandle.bind(this)
  }

  searchHandle (e) {
    this.setState({search: e.target.value})
    console.log(this.state.search)
    let self = this
    if (e.target.value.length >= 2) {
      axios({
        method: 'get',
        baseURL: `https://api.spotify.com/v1/search?query=${this.state.search}&type=track`,
        headers: {
          'Authorization': `Bearer ${this.props.token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {

        function Tra (id, name, artistName, img, albName, prev, expl, pop) {

          this.id = id
          this.name = name
          this.artistName = artistName
          this.img = img
          this.albName = albName
          this.prev = prev
          this.expl = expl
          this.pop = pop
        }
        let tab = []
        let data = res.data.tracks.items
        for (let i = 0; i < data.length; i++) {
          let inst = new Tra(data[i].id, data[i].name, data[i].artists[0].name, data[i].album.images[0].url, data[i].album.name, data[i].preview_url, data[i].explicit, data[i].popularity)
          tab.push(inst)
        }
        self.setState({resTra: tab})
      })
    }
  }

  render () {
    return (
      <div>
        <input onChange={this.searchHandle} placeholder='Search for a song' />
        {
          this.state.resTra.map((trac, i) => {
            return (
              <ul>
                <TrackSrch name={trac.name} artistName={trac.artistName} albName={trac.albName} pop={trac.pop} img={trac.img} />
              </ul>
            )
          })
        }
      </div>
    )
  }
}
