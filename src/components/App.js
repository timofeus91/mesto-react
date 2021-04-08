import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import {CurrentUserContext, currentUser} from './CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';



function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({name: '', link: '', imgOpen: false});
    const [currentUser, setCurrentUser] = React.useState({
        //пока идет загрузка с сервера чтобы позиции не были пустыми и говорили о выполнении загрузки
        name: 'Ждёмс',
        about: 'Ждёмс',
        avatar: 'https://i007.fotocdn.net/s124/4a5340ffd4d2b33c/public_pin_l/2826322361.jpg'
    });


    //эффект для получения информации о пользователе
    React.useEffect(() => {
        api.getUserInfo()
        .then(userInfo => {
            setCurrentUser(userInfo);
        })
        .catch((err) => {
            console.log(`Произошла ошибка - ${err}`);
        })
    }, []);

    //обработчки для открытия попапов
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    
    
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }


    //обработчик по закрытию попапов
    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({name: '', link: '', imgOpen: false});
    }

    //обработчик для открытия большого варианта фото
    function handleCardClick(card) {
        setSelectedCard(card);
    }

    //обработчки для отправки через api новых данных о пользователе и обновлении страницы
    function handleUpdateUser(data) {
        api.editUserInfo(data)
            .then(data => {
                setCurrentUser(data)
                closeAllPopups()
            })
            .catch((err) => {
                console.log(`Произошла ошибка - ${err}`);
            })
    }

    //обработчик для отправки через api данных о новом аватаре и обновлении страницы
    function handleUpdateAvatar(avatar) {
        api.editUserAvatar(avatar)
            .then(avatar => {
                setCurrentUser(avatar)
                closeAllPopups()
            })
            .catch((err) => {
                console.log(`Произошла ошибка - ${err}`);
            })
    }

  return (
    <CurrentUserContext.Provider value={ currentUser }>
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

            <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser} /> 


            <PopupWithForm
            name='place'
            title='Новое место'
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            >
                
                <input type="text" className="popup__input popup__input_topform" name="popup-name-place" placeholder="Название" required minLength='2' maxLength='30' id="name-place-input"/>
                <span className='popup__span' id="name-place-input-error"></span>
                <input type="url" className="popup__input popup__input_bottomform" name="popup-link-photo" placeholder="Ссылка на картинку" required id="link-input"/>
                <span className='popup__span' id="link-input-error"></span>
                <button className="popup__button" type='submit'>Сохранить</button>
                
            </PopupWithForm>


            <PopupWithForm name='areyousure' title='Вы уверены?'>
                
                <button className="popup__button popup__button_areyousure" type='submit'>Да</button>
                
            </PopupWithForm>

            <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            />

            <ImagePopup
            onClose={closeAllPopups}
            card={selectedCard}
            
             />
            
        </section>
    </div>
</CurrentUserContext.Provider>
  );
}

export default App;