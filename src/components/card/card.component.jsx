import React from 'react'
import './card.style.css'

export const Card = (props) => {
    return(
        <div className="card-container">
            <img src={`https://i.picsum.photos/id/${props.monster.id}/200/200.jpg`} alt=""/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}