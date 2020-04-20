import React, {Component} from 'react';
import Film from "./Film";

class FilmList extends Component{
    render(){
        const filmNodes = this.props.films.map(film =>{
            return <li key={film.id}>
                <a href={film.url}>{film.name}</a>
            </li>
        })
        

        return(
            <div className = "film-list">
                <ul>
                {filmNodes}
                </ul>
            </div>
          )
}

}

export default FilmList;