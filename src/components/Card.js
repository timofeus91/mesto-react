import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick({name: props.name, link: props.link, imgOpen: true});
      }  

    return(
    (
        <li className='elements__item'>
            <img className="elements__photo" src={props.link} alt={props.name} onClick={handleClick}/>
            <button type="button" className='elements__delete-photo '></button>
            <div className='elements__container'>
                <h2 className='elements__text'>{props.name}</h2>
                <div className="elements__like-container">
                    <button type="button" className='elements__heart-button'></button>
                    <p className="elements__like-counter">{props.likes.length}</p>
                </div>
            </div> 
        </li> 
    )


    );
}

export default Card;