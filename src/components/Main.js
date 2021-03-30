import avatar from '../images/megacat.jpg';



function Main(props) {

    return(
        <main className='content'>
            
            <section className='profile page__profile'>
              <div className='profile__main-container'>
                <div className='profile__avatar-container'>
                    <img className='profile__avatar' src={avatar} alt='Аватарка'/>
                    <div className="profile__avatar-overlay">
                        <button onClick={props.onEditAvatar} className='profile__avatar-edit' type="button"></button>
                    </div> 
                </div>
                <div className='profile__info'>
                    <div className='profile__title-button'>
                        <h1 className='profile__title'>Бэтмен</h1>
                        <button onClick={props.onEditProfile} className='profile__edit-button' type='button'></button>
                    </div>
                    <p className='profile__subtitle'>Властитель Ночи</p>
                </div>
              </div>
                <button onClick={props.onAddPlace} className='profile__add-button' type='button'></button>

            </section>
            <section className='elements page__elements'>
                <ul className='elements__list'>
                </ul>
            </section>
        </main>
    );
}

export default Main;