import React, { useState, useEffect } from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from '../utils/Api';
import auth from '../utils/Auth';
import { CurrentUserContext, userDefault } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeletePlacePopup from './DeletePlacePopup';
import ImagePopup from './ImagePopup';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';
import Login from './Login';
import InfoTooltip from './InfoTooltip';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [currentUser, setUser] = useState(userDefault);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [loggedIn, setLoggedIn] = useState(null);
  const [email, setEmail] = useState('');

  const [isOpenEditProfile, setIsOpenEditProfile] = useState(false);
  const [isOpenEditAvatar, setIsOpenEditAvatar] = useState(false);
  const [isOpenonAddPlace, setIsOpenonAddPlace] = useState(false);
  const [isOpenDelPlace, setIsOpenDelPlace] = useState(false);
  const [isOpenImage, setIsOpenImage] = useState(false);
  const [isOpenInfoTooltip, setIsOpenInfoTooltip] = useState(false);
  const [isSuccessSignUp, setIsSuccessSignUp] = useState();
  const [infoTooltipText, setInfoTooltipText] = useState('')

  const history = useHistory();

  function handleEditProfileClick() {
    setIsSaving(false);
    setIsOpenEditProfile(true);
  }

  function handleEditAvatarClick() {
    setIsSaving(false);
    setIsOpenEditAvatar(true);
  }

  function handleAddPlaceClick() {
    setIsSaving(false);
    setIsOpenonAddPlace(true);
  }

  function handleDelPlaceClick(card) {
    setSelectedCard(card);
    setIsSaving(false);
    setIsOpenDelPlace(true);
  }

  function handleRegisterClick(successRegistration) {
    if (successRegistration) {
      setInfoTooltipText('Вы успешно зарегистрировались!')
    } else {
      setInfoTooltipText('Что-то пошло не так! Попробуйте еще раз.')
    }
    setIsSuccessSignUp(successRegistration)
    setIsOpenInfoTooltip(true);
  }

  function closeInfoTooltip(successSignUp) {
    if (successSignUp) { history.push('/sign-in'); }
    setIsOpenInfoTooltip(false);
  }

  function closeAllPopups(handleEscClose, infoTooltip, successSignUp) {
    setIsOpenEditProfile(false);
    setIsOpenEditAvatar(false);
    setIsOpenonAddPlace(false);
    setIsOpenDelPlace(false);
    setIsOpenImage(false);
    if (infoTooltip) {
      closeInfoTooltip(successSignUp);
    }
    document.removeEventListener('keydown', handleEscClose);
  }

  function handleUpdateUser(data) {
    setIsSaving(true);
    api.setUserInfo(data)
      .then((newUserData) => {
        setUser(newUserData);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(data) {
    setIsSaving(true);
    api.changeAvatar(data)
      .then((newUserData) => {
        setUser(newUserData);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlace(card) {
    setIsSaving(true);
    api.addCard(card).then((newCard) => {
      const newCards = [...cards];
      newCards.unshift(newCard);
      setCards(newCards);
      closeAllPopups();
    })
      .catch((err) => console.log(err));
  }

  function handleDeletePlace(card) {
    setIsSaving(true);
    api.removeCard(card).then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
      closeAllPopups();
    })
      .catch((err) => console.log(err));
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsOpenImage(true);
  }

  function handleCardLike(card) {
    console.log('card', card)
    console.log('card.likes', card.likes)
    console.log('card.likes._id', card.likes._id)
    console.log('currentUser._id', currentUser._id)
    console.log('card.likes._id == currentUser._id', card.likes._id == currentUser._id)
    // const isLiked = card.likes.some((i) => i._id == currentUser._id);
    const isLiked = card.likes.some((i) => i === currentUser._id);
    if (isLiked) {
      api.removeLike(card).then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
        .catch((err) => console.log(err));
    } else {
      api.addLike(card).then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
        .catch((err) => console.log(err));
    }
  }

  function handleRegister(identifier, password, clearFields) {
    auth.register(identifier, password)
      .then(() => {
        handleRegisterClick(true);
        clearFields()
      })
      .catch((e) => {
        handleRegisterClick(false);
        console.log(e);
      });
  }

  function handleLogin(identifier, password) {
    auth.authorize(identifier, password)
      .then((data) => {
        if (data.token) {
          const jwt = data.token;
          localStorage.setItem('jwt', jwt);
          setLoggedIn(true);
          setEmail(identifier);
          // history.push('/');
        }
      })
      .catch((e) => {
        setInfoTooltipText(e);
        setIsOpenInfoTooltip(true);
        console.log(e)
      });
  }

  useEffect(() => {
    if (loggedIn) {
      history.push('/');
    }
  }, [loggedIn]);

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setEmail(res.email);
            history.push('/');
          }
        })
        .catch((e) => console.log(e));
    } else {
      setLoggedIn(false);
      localStorage.removeItem('jwt');
    }
  }

  function signOut() {
    localStorage.removeItem('jwt');
    history.push('/sign-in');
    setLoggedIn(false);
  }

  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setCards(initialCards);
        setUser(userData);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
    }
  }, [loggedIn]);

  useEffect(() => {
    tokenCheck();
  }, []);

  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>

          <Header
            loggedIn={loggedIn}
            email={email}
            onSignOut={signOut}
          />
          {(loggedIn === null)
            ? (
              <div className='spinner spinner_visible'>
                <i className='spinner__inner' />
                <p className='spinner__text'>Загрузка...</p>
              </div>)
            : (<Switch>
              <ProtectedRoute
                exact
                path='/'
                loggedIn={loggedIn}
                component={Main}
                onEditProfile={handleEditProfileClick}
                onEditAvatar={handleEditAvatarClick}
                onAddPlace={handleAddPlaceClick}
                onDelPlace={handleDelPlaceClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                isLoading={isLoading}
                cards={cards}
              />

              <Route path='/sign-in'>
                <Login onLogin={handleLogin} />
              </Route>

              <Route path='/sign-up'>
                <Register onRegister={handleRegister} />
              </Route>

              <Route>
                {loggedIn ? <Redirect to='/' /> : <Redirect to='/sign-in' />}
              </Route>

            </Switch>
            )}

          {loggedIn && <Footer />}

          <EditProfilePopup
            isSaving={isSaving}
            onUpdateUser={handleUpdateUser}
            isOpen={isOpenEditProfile}
            onClose={closeAllPopups}
          />

          <EditAvatarPopup
            isSaving={isSaving}
            onUpdateAvatar={handleUpdateAvatar}
            isOpen={isOpenEditAvatar}
            onClose={closeAllPopups}
          />

          <AddPlacePopup
            isSaving={isSaving}
            onAddPlace={handleAddPlace}
            isOpen={isOpenonAddPlace}
            onClose={closeAllPopups}
          />
          <DeletePlacePopup
            isSaving={isSaving}
            onDeletePlace={handleDeletePlace}
            isOpen={isOpenDelPlace}
            card={selectedCard}
            onClose={closeAllPopups}
          />

          <ImagePopup
            card={selectedCard}
            isOpen={isOpenImage}
            onClose={closeAllPopups}
          />

          <InfoTooltip
            isOpen={isOpenInfoTooltip}
            onClose={closeAllPopups}
            isSuccessSignUp={isSuccessSignUp}
            // successSignUpText={'Вы успешно зарегистрировались!'}
            // unsuccessSignUpText={'Что-то пошло не так! Попробуйте еще раз.'}
            infoTooltipText={infoTooltipText}
          />

        </CurrentUserContext.Provider>

      </div>
    </div>
  );
}

export default App;
