import React, { Component } from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {

    handleDetailsClick = (film) =>{
        console.log(`Fetching details for ${film}`)
    }

  render() {
    return (
        <div className="film-row" onClick={() => {this.handleDetailsClick(this.props.film.title)}}>
            <FilmPoster poster_path={this.props.film.poster_path} title={this.props.film.title}/>

            <div className="film-summary">
                <Fave film={this.props.film}/>
                <h1>{this.props.film.title}</h1>
                <p>{this.props.film.release_date.slice(0,4)}</p>
            </div>
        </div>
    );
  }
}

export default FilmRow