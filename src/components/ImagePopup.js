
function ImagePopup() {
    return(
        <div className='popup popup_img'>
            <div className='popup__container popup__container_img'>
                <button className="popup__close popup__close_img" type="button"></button>
                <img className="popup__image" src="#" alt="фото места"/>
                <h2 className="popup__title popup__title_img">#</h2>
            </div>
        </div>
    );
}

export default ImagePopup;