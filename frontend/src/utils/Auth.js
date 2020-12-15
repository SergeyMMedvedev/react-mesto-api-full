import { BASE_URL } from './utils';

class Auth {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  async register(email, password) {
    const loadingRegisterInfo = fetch(this.baseUrl + '/signup', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password })
    })
    const response = await loadingRegisterInfo;
    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`)
    }
    const newUserRegistrationData = await response.json();
    return new Promise((resolve) => {
      resolve(newUserRegistrationData);
    })
  }

  async authorize(email, password) {
    const loadingAuthorizeInfo = fetch(this.baseUrl + '/signin', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password })
    })
    const response = await loadingAuthorizeInfo;
    if (!response.ok) {
      const authorizeData = await response.json();
      return Promise.reject(`Ошибка: ${response.status} ${authorizeData.message}`)
    }
    const authorizeData = await response.json();
    return new Promise((resolve) => {
      resolve(authorizeData);
    })
  }

  async getContent(token) {
    const contentInfo = fetch(this.baseUrl + '/users/me', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    const response = await contentInfo;
    if (!response.ok) { return Promise.reject(`Ошибка: ${response.status}`) }
    const selfData = await response.json();
    return new Promise((resolve) => {
      resolve(selfData);
    })
  }
}

const auth = new Auth({
  baseUrl: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default auth;
