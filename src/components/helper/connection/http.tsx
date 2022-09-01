import axios from 'axios';
export const baseUrl =
  process.env.NODE_ENV !== 'development'
    ? 'https://hidden-tundra-97787.herokuapp.com/api/'
    : 'http://localhost:3333/api/';

export const registerApiCall = async (inputResult: Object) => {
  let response = await axios.post(baseUrl + 'users/user/signup', {
    email: inputResult['email'],
    password: inputResult['password'],
    confirmPassword: inputResult['confirmPassword'],
  });

  if (response.status === 201) {
    response.data.accessToken = 'Bearer ' + response.data.accessToken;
    localStorage.setItem('user', JSON.stringify(response.data));
    return true;
  }

  return false;
};

export const loginApiCall = async (inputResult: Object) => {
  // const userInString = localStorage.getItem('user');
  // const userAccessToken = userInString
  //   ? JSON.parse(userInString).accessToken
  //   : null;

  const response = await axios.post(baseUrl + 'users/user/login', {
    email: inputResult['email'],
    password: inputResult['password'],
  });

  if (response.status === 200) {
    response.data.accessToken = 'Bearer ' + response.data.accessToken;
    localStorage.setItem('user', JSON.stringify(response.data));
    return true;
  }

  return false;
};
