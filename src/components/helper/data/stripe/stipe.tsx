import axios from 'axios';
import { getHeaders } from '../../connection/api-links';
import { baseUrl } from '../../connection/user-api-calls';

declare const Stripe;

export const setupSession = async (isLoggedIn, amount) => {
  try {
    const response = await axios.post(
      baseUrl + 'stripe/checkout-session',
      {
        callbackUrl: buildCallbackUrl(),
        amount,
      },
      {
        headers: getHeaders(isLoggedIn),
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const redirectToCheckout = async (session) => {
  const stripe = Stripe(session.stripePublicKey);

  stripe.redirectToCheckout({
    sessionId: session.stripeCheckoutSessionId,
  });
};

const buildCallbackUrl = () => {
  const protocol = window.location.protocol;
  const hostName = window.location.hostname;
  const port = ':' + window.location.port;

  let callBackUrl = `${protocol}//${hostName}`;

  if (port) {
    callBackUrl += port;
  }

  callBackUrl += '/stripe-checkout';

  return callBackUrl;
};
