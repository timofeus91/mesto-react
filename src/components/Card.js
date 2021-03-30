import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props);
      }  

    return(
    
        <li class='elements__item'>
            <img class="elements__photo" src={props.link} alt={props.name} onClick={handleClick}/>
            <button type="button" class='elements__delete-photo'></button>
            <div class='elements__container'>
                <h2 class='elements__text'>{props.name}</h2>
                <div class="elements__like-container">
                    <button type="button" class='elements__heart-button'></button>
                    <p class="elements__like-counter">{props.likes.length}</p>
                </div>
            </div> 
        </li> 


    );
}

export default Card;