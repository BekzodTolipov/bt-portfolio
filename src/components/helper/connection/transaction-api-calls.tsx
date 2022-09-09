import axios from 'axios';
import { getHeaders } from './api-links';
import { baseUrl } from './user-api-calls';

export const getTransactions = async (isAuth) => {
  try {
    const response = await axios.post(
      baseUrl + 'transactions/transaction-list',
      {},
      { headers: getHeaders(isAuth) }
    );

    return response.data.purchaseDetails;
  } catch (error) {
    return { message: error.message, data: {} };
  }
};
