import React from 'react'

const Card = ({mov}) => {
    return(
        <div className="card" >
            <p className="movieName">{mov.Title} ({mov.Year})</p>
            <img src={mov.Poster}/>
        </div>

    )
}

export default Card