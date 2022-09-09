import axios from 'axios';
import { verifyAccessTokenUri } from './api-links';
import { baseUrl } from './user-api-calls';

export const isAuthenticated = async (): Promise<boolean> => {
  const user = localStorage.getItem('user');
  if (user) {
    const userJson = JSON.parse(user);

    try {
      const res = await axios.post(
        baseUrl + verifyAccessTokenUri(),
        {
          loggedUserId: userJson.userId,
        },
        {
          headers: { Authorization: userJson.accessToken },
        }
      );

      if (res.data.message === 'ok') {
        return true;
      }
    } catch (error) {
      return false;
    }
  }

  return false;
};
