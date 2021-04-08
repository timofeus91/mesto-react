import React from 'react';
import api from '../utils/api';
import Card from './Card';
import {CurrentUserContext} from '../components/CurrentUserContext';



function Main(props) {
    const [cards, setCards] = React.useState([]);
    
    //подписываемся на контекст
    const currentUser = React.useContext(CurrentUserContext);


    //Загружаем карточки с сервера. Проставлена зависимость при которой делается повторный запрос 
    React.useEffect(() => {
        
        api.getInitialCards()
            .then(cards => {
                setCards(cards);
            })

            .catch((err) => {
                console.log(`Произошла ошибка - ${err}`);
            })


        
    }, [currentUser]);

    //функция по снятию-постановке лайка на карточку с использованием api
    function handleCardLike(card) {
        console.log('Нажали кнопку!');
        console.log(card);
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card.id, !isLiked)
        .then((newCard) => {
            setCards(state => state.map((c) => c.id === card.id ? newCard : c)); 
        })
        .catch((err) => {
            console.log(`Произошла ошибка - ${err}`);
        })
    } 

   
    return(
        (
        <main className='content'>
            
            <section className='profile page__profile'>
              <div className='profile__main-container'>
                <div className='profile__avatar-container'>
                    <img className='profile__avatar' src={currentUser.avatar} alt='Аватарка'/>
                    <div className="profile__avatar-overlay">
                        <button onClick={props.onEditAvatar} className='profile__avatar-edit' type="button"></button>
                    </div> 
                </div>
                <div className='profile__info'>
                    <div className='profile__title-button'>
                        <h1 className='profile__title'>{currentUser.name}</h1>
                        <button onClick={props.onEditProfile} className='profile__edit-button' type='button'></button>
                    </div>
                    <p className='profile__subtitle'>{currentUser.about}</p>
                </div>
              </div>
                <button onClick={props.onAddPlace} className='profile__add-button' type='button'></button>

            </section>
            <section className='elements page__elements'>
                <ul className='elements__list'>
                    { cards.map(item => (
                            <Card
                            key={item._id}
                            link={item.link}
                            name={item.name}
                            likes={item.likes}
                            onCardClick={props.onCardClick}
                            owner = {item.owner}
                            onCardLike = {handleCardLike}
                            id = {item._id}
                            
                            
                            />
                    )
                        )}
                </ul>
            </section>
        </main>
        )
    );
}

export default Main;