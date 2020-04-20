import React, {Component} from 'react';
import FilmList from '../components/FilmList'


class FilmBox extends Component{


render(){
    return (
        <div className = "film-box">
            <h2>Upcoming Film Releases for UK</h2>
            <FilmList/>
        </div>
        )
    }
}

export default FilmBox;