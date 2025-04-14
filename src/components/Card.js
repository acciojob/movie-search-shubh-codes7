import React from 'react'

const Card = ({mov}) => {
    return(
        <div className="card" >
            <li className="movieName">{mov.Title} ({mov.Year})</li>
            <img src={mov.Poster}/>
        </div>

    )
}

export default Card