import React from 'react';

function ImagePopup(props) {

    const popupOpened = props.card ? 'popup_opened' :'';

    return(
        <div className={`popup popup_img ${popupOpened}`}>
            <div className='popup__container popup__container_img'>
                <button className="popup__close popup__close_img" type="button" onClick={props.onClose}></button>
                <img className="popup__image" src={props.cardInfo.link} alt={props.cardInfo.name}/>
                <h2 className="popup__title popup__title_img">{props.cardInfo.name}</h2>
            </div>
        </div>
    );
}

export default ImagePopup;