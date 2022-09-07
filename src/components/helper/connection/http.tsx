import axios from 'axios';

export enum LOGIN_TYPE {
  WRONG_EMAIL = 'No user found',
  WRONG_PASSWORD = 'User found but password mismatch',
  SUCCESS = 'ok',
  CONNECTION_FAILED = 'Connection failed',
}

export const baseUrl =
  process.env.NODE_ENV !== 'development'
    ? 'https://hidden-tundra-97787.herokuapp.com/api/'
    : 'http://localhost:3333/api/';

export const registerApiCall = async (inputResult: Object) => {
  try {
    let response = await axios.post(baseUrl + 'users/user/signup', {
      email: inputResult['email'],
      password: inputResult['password'],
      confirmPassword: inputResult['confirmPassword'],
    });

    if (response.status === 201) {
      response.data.accessToken = 'Bearer ' + response.data.accessToken;
      localStorage.setItem('user', JSON.stringify(response.data));
      return {
        message: LOGIN_TYPE.SUCCESS,
      };
    }
  } catch (error) {
    console.error(error);
  }

  return {
    message: LOGIN_TYPE.CONNECTION_FAILED,
  };
};

export const loginApiCall = async (inputResult: Object) => {
  // const userInString = localStorage.getItem('user');
  // const userAccessToken = userInString
  //   ? JSON.parse(userInString).accessToken
  //   : null;

  try {
    const response = await axios.post(baseUrl + 'users/user/login', {
      email: inputResult['email'],
      password: inputResult['password'],
    });

    if (
      response.status === 200 &&
      response.data.message === LOGIN_TYPE.SUCCESS
    ) {
      response.data.accessToken = 'Bearer ' + response.data.accessToken;
      localStorage.setItem('user', JSON.stringify(response.data));
      return {
        message: LOGIN_TYPE.SUCCESS,
      };
    } else if (response.data.message === LOGIN_TYPE.WRONG_EMAIL) {
      return {
        message: LOGIN_TYPE.WRONG_EMAIL,
      };
    } else if (response.data.message === LOGIN_TYPE.WRONG_PASSWORD) {
      return {
        message: LOGIN_TYPE.WRONG_PASSWORD,
      };
    }
  } catch (error) {
    console.log(error);
  }

  return {
    message: LOGIN_TYPE.CONNECTION_FAILED,
  };
};

export const forgotPasswordApiCall = async (email: string) => {
  const response = await axios.post(baseUrl + 'users/user/forgot-password', {
    email: email,
  });

  if (response.status === 200) {
    return true;
  }

  return false;
};

export const resetPasswordApiCall = async (inputResult: Object) => {
  const response = await axios.post(
    baseUrl + 'users/user/reset-password',
    {
      email: inputResult['email'],
      password: inputResult['password'],
    },
    {
      headers: { Authorization: `Bearer ${inputResult['token']}` },
    }
  );

  if (response.status === 200) {
    response.data.accessToken = 'Bearer ' + response.data.accessToken;
    localStorage.setItem('user', JSON.stringify(response.data));
    return true;
  }

  return false;
};
