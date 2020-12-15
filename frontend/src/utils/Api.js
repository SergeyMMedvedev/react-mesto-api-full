import { BASE_URL } from './utils';

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  async getUserInfo() {
    const loadingUserInfo = fetch(this.baseUrl + '/users/me', {
      headers: this.headers,
    })
    const response = await loadingUserInfo;
    if (!response.ok) {return Promise.reject(`Ошибка: ${response.status}`)}
    const userData = await response.json();
    return new Promise((resolve) => {
      resolve(userData);
    })
  }

  async getInitialCards() {
    const loadingInitialCards = fetch(this.baseUrl + '/cards', {
      headers: this.headers,
    })
    const response = await loadingInitialCards;
    if (!response.ok) { return Promise.reject(`Ошибка: ${response.status}`) }
    const initialCards = await response.json();
    return new Promise((resolve) => {
      resolve(initialCards);
    })
  }

  async setUserInfo(data) {
    const loadingNewUserInfo = fetch(this.baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(data)
    })
    const response = await loadingNewUserInfo;
    if (!response.ok) { return Promise.reject(`Ошибка: ${response.status}`) }
    const newUserData = await response.json();
    return new Promise((resolve) => {
      resolve(newUserData);
    })
  }

  async addCard(data) {
    const loadingNewCardInfo = fetch(this.baseUrl + '/cards', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    })
    const response = await loadingNewCardInfo;
    if (!response.ok) { return Promise.reject(`Ошибка: ${response.status}`) }
    const newCardData = await response.json();
    return new Promise((resolve) => {
      resolve(newCardData);
    })
  }

  async removeCard(item) {
    fetch(this.baseUrl + '/cards/' + item._id, {
      method: 'DELETE',
      headers: this.headers,
    })
    return new Promise((resolve) => {
      resolve();
    })
  }

  async addLike(card) {
    const loadingLikeData = fetch(this.baseUrl + `/cards/${card._id}/likes`, {
      method: 'PUT',
      headers: this.headers,
    })
    const response = await loadingLikeData;
    if (!response.ok) { return Promise.reject(`Ошибка: ${response.status}`) }
    const newLikeData = response.json();
    return new Promise((resolve) => {
      resolve(newLikeData);
    })
  }

  async removeLike(card) {
    const loadingLikeData = fetch(this.baseUrl + `/cards/${card._id}/likes`, {
      method: 'DELETE',
      headers: this.headers,
    })
    const response = await loadingLikeData;
    if (!response.ok) { return Promise.reject(`Ошибка: ${response.status}`) }
    const newLikeData = response.json();
    return new Promise((resolve) => {
      resolve(newLikeData);
    })
  }

  async changeAvatar(avatarLink) {
    const loadingAvatarInfo = fetch(this.baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(avatarLink)
    })
    const response = await loadingAvatarInfo;
    if (!response.ok) { return Promise.reject(`Ошибка: ${response.status}`) }
    const newAvatarData = await response.json();
    return new Promise((resolve) => {
      resolve(newAvatarData);
    })
  }
}

const api = new Api({
  baseUrl: BASE_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json'
  }
});

export default api;
