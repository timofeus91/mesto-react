import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);
    const [fullImg, setFullImg] = React.useState({});

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    
    
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(false);
    }

    function handleCardClick(card) {
        setSelectedCard(true);
        setFullImg(card);
    }

  return (
      <>
    <div className="page">
        <Header />
        <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        />
        <Footer />

        <section className='popups'>
            <PopupWithForm 
            name='user'
            title='Редактировать профиль' 
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            >
            
                <input type="text" className="popup__input popup__input_topform" name="popup-name" placeholder="Имя" required minlength='2' maxlength='40' id="name-user-input"/>
                <span className="popup__span" id="name-user-input-error"></span>
                <input type="text" className="popup__input popup__input_bottomform" name="popup-about" placeholder="О себе" required minlength='2' maxlength='200' id="about-user-input"/>
                <span className="popup__span" id="about-user-input-error"></span>
                <button className="popup__button" type='submit'>Сохранить</button>
            </PopupWithForm>


            <PopupWithForm
            name='place'
            title='Новое место'
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            >
                
                <input type="text" className="popup__input popup__input_topform" name="popup-name-place" placeholder="Название" required minlength='2' maxlength='30' id="name-place-input"/>
                <span className='popup__span' id="name-place-input-error"></span>
                <input type="url" className="popup__input popup__input_bottomform" name="popup-link-photo" placeholder="Ссылка на картинку" required id="link-input"/>
                <span className='popup__span' id="link-input-error"></span>
                <button className="popup__button" type='submit'>Сохранить</button>
            </PopupWithForm>


            <PopupWithForm name='areyousure' title='Вы уверены?'>
                <button className="popup__button popup__button_areyousure" type='submit'>Да</button>
            </PopupWithForm>

            <PopupWithForm
            name='new-avatar'
            title='Обновить аватар'
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            >
                <input type="url" className="popup__input popup__input_topform popup__input_new-avatar" name="new-avatar-photo" placeholder="Ссылка на картинку" required id="new-avatar"/>
                <span className='popup__span' id="new-avatar-error"></span>
                <button className="popup__button popup__button_new-avatar" type='submit'>Сохранить</button>
            </PopupWithForm>

            <ImagePopup
            onClose={closeAllPopups}
            card={selectedCard}
            cardInfo={fullImg}
             />
            
        </section>
    </div>


</>
  );
}

export default App;