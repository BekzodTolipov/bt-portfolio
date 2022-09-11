import React from 'react';
import './transaction-confirmation.css';

export default function TransactionConfirmationCard(props) {
  const confirmationClasses = {
    title: !props.isFail ? 'success' : 'danger',
    message: !props.isFail ? 'success-message' : 'danger-message',
    button: !props.isFail ? 'success' : 'danger',
  };

  const message = {
    title: !props.isFail ? 'Purchase Confirmation' : 'Transaction Failed',
    text: !props.isFail
      ? 'Thank you for your purchase, you will receive a email confirmation in a moment. In a meantime please checkout my other projects.'
      : 'Transaction failed, please give it a try again.',
    button: !props.isFail ? 'Ok' : 'Try Again',
  };

  return (
    <div className='card transaction-card'>
      <div className='card-body'>
        <h5 className={'card-title ' + confirmationClasses.title}>
          {message.title}
        </h5>
        <p className={'card-text ' + confirmationClasses.message}>
          {message.text}
        </p>
      </div>
      <div className='btn-container'>
        <button
          onClick={props.redirectLink}
          type='button'
          className={'btn msg-card-btn btn-' + confirmationClasses.button}
        >
          {message.button}
        </button>
      </div>
    </div>
  );
}
