import React from 'react';
import {CurrentUserContext} from '../components/CurrentUserContext';

function Card(props) {

    const currentUser = React.useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = props.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    /*const cardDeleteButtonClassName = (
        `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
    ); */

    function handleClick() {
        props.onCardClick({name: props.name, link: props.link, imgOpen: true});
      }  

    return(
    (
        <li className='elements__item'>
            <img className="elements__photo" src={props.link} alt={props.name} onClick={handleClick}/>
            <button type="button" className={`elements__delete-photo ${isOwn ? '' : 'elements__delete-photo_no-active'}`}></button>
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