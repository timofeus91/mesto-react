import logo from './logo.svg';
import './index.css';

function App() {
  return (
      <>
    <div className="page">
        <header className='header page__header'>
            <img className='header__logo' src="<%=require('./images/Vector-mesto-logo.svg')%>" alt='Логотип'/>
        </header>

        <main className='content'>
            
            <section className='profile page__profile'>
              <div className='profile__main-container'>
                <div className='profile__avatar-container'>
                    <img className='profile__avatar' src="<%=require('./images/megacat.jpg')%>" alt='Аватарка'/>
                    <div className="profile__avatar-overlay">
                        <button className='profile__avatar-edit' type="button"></button>
                    </div>
                    
                    
                </div>
                <div className='profile__info'>
                    <div className='profile__title-button'>
                        <h1 className='profile__title'>Бэтмен</h1>
                        <button className='profile__edit-button' type='button'></button>
                    </div>
                    <p className='profile__subtitle'>Властитель Ночи</p>
                </div>
              </div>
                <button className='profile__add-button' type='button'></button>

            </section>
            <section className='elements page__elements'>
                <ul className='elements__list'>
                </ul>
            </section>
        </main>
        <footer className="footer page__footer">
            <p className='footer__text'>&copy; 2020 Mesto Russia</p>
        </footer>

        <section className='popups'>
        <div className='popup popup_user'>
            <div className='popup__container'>
                <button className="popup__close" type="button"></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form popup__form_user" name="user-form" novalidate>
                    <input type="text" className="popup__input popup__input_topform" name="popup-name" placeholder="Имя" required minlength='2' maxlength='40' id="name-user-input"/>
                    <span className="popup__span" id="name-user-input-error"></span>

                    <input type="text" className="popup__input popup__input_bottomform" name="popup-about" placeholder="О себе" required minlength='2' maxlength='200' id="about-user-input"/>
                    <span className="popup__span" id="about-user-input-error"></span>
                    <button className="popup__button" type='submit'>Сохранить</button>
                </form>
            </div>
        </div>

        <div className='popup popup_place'>
            <div className='popup__container popup__container_place'>
                <button className="popup__close popup__close_place" type="button"></button>
                <h2 className="popup__title popup__title_place">Новое место</h2>
                <form className="popup__form popup__form_place" name="newplace-form" novalidate>
                    <input type="text" className="popup__input popup__input_topform" name="popup-name-place" placeholder="Название" required minlength='2' maxlength='30' id="name-place-input"/>
                    <span className='popup__span' id="name-place-input-error"></span>

                    <input type="url" className="popup__input popup__input_bottomform" name="popup-link-photo" placeholder="Ссылка на картинку" required id="link-input"/>
                    <span className='popup__span' id="link-input-error"></span>

                    <button className="popup__button" type='submit'>Сохранить</button>
                </form>
            </div>
        </div>

        <div className='popup popup_img'>
            <div className='popup__container popup__container_img'>
                <button className="popup__close popup__close_img" type="button"></button>
                <img className="popup__image" src="#" alt="фото места"/>
                <h2 className="popup__title popup__title_img"></h2>
            </div>
        </div>

        <div className="popup popup_areyousure">
            <div className='popup__container popup__container_popup_areyousure'>
                <button className="popup__close popup__close_popup_areyousure" type="button"></button>
                <h2 className="popup__title popup__title_mini-popup">Вы уверены?</h2>
                <form className="popup__form popup__form_areyousure popup__form_mini-popup" name="areyousure-form" novalidate>
                    <button className="popup__button popup__button_areyousure" type='submit'>Да</button>
                </form>
            </div>
        </div>

        <div className="popup popup_new-avatar">
            <div className='popup__container popup__container_new-avatar'>
                <button className="popup__close" type="button"></button>
                <h2 className="popup__title popup__title_mini-popup">Обновить аватар</h2>
                <form className="popup__form popup__form_new-avatar popup__form_mini-popup" name="new-avatar-form" novalidate>
                    <input type="url" className="popup__input popup__input_topform popup__input_new-avatar" name="new-avatar-photo" placeholder="Ссылка на картинку" required id="new-avatar"/>
                    <span className='popup__span' id="new-avatar-error"></span>
                    <button className="popup__button popup__button_new-avatar" type='submit'>Сохранить</button>
                </form>
            </div>
        </div>




        </section>
    </div>

<template class='template__elements-list'>
<li class='elements__item'>
    <img class="elements__photo" src="#" alt='Фото места'/>
    <button type="button" class='elements__delete-photo'></button>
    <div class='elements__container'>
        <h2 class='elements__text'></h2>
        <div class="elements__like-container">
            <button type="button" class='elements__heart-button'></button>
            <p class="elements__like-counter">0</p>
        </div>
        
    </div> 
</li> 
</template>
</>
  );
}

export default App;