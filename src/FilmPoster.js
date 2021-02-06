import React, { Component } from 'react'

class FilmPoster extends Component {
  render() {
      let posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.poster_path}`
    return (
        <img src={posterUrl} alt={this.props.title} />

    );
  }
}

export default FilmPoster