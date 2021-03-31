import React from 'react';
import api from '../utils/api';
import Card from './Card';



function Main(props) {
    //При попытке деструктуризации , как вы написали в ревью в комментарии "можно лучше", у меня пошли ошибки и код не работал. Видимо я не до конца понял как это правильно сделать в этом месте. Спасибо за замечание, обязательно изучу этот вопрос. 
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        api.getUserInfo()
        .then(userInfo => {
            setUserName(userInfo.name)
            setUserDescription(userInfo.about)
            setUserAvatar(userInfo.avatar)
        })

        .catch((err) => {
            console.log(err);
        })

        api.getInitialCards()
            .then(cards => {
                setCards(cards);
            })

            .catch((err) => {
                console.log(err);
            })


        
    }, []);

   
    return(
        (
        <main className='content'>
            
            <section className='profile page__profile'>
              <div className='profile__main-container'>
                <div className='profile__avatar-container'>
                    <img className='profile__avatar' src={userAvatar} alt='Аватарка'/>
                    <div className="profile__avatar-overlay">
                        <button onClick={props.onEditAvatar} className='profile__avatar-edit' type="button"></button>
                    </div> 
                </div>
                <div className='profile__info'>
                    <div className='profile__title-button'>
                        <h1 className='profile__title'>{userName}</h1>
                        <button onClick={props.onEditProfile} className='profile__edit-button' type='button'></button>
                    </div>
                    <p className='profile__subtitle'>{userDescription}</p>
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