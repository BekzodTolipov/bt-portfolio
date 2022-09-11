import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './purchase-conformation.css';
import TransactionConfirmationCard from './transaction-confirmation/transaction-confirmation';

export default function PurchaseConfirmation() {
  let navigate = useNavigate();
  let { purchaseResult } = useParams();

  const redirectLink = () => {
    navigate('/support');
  };

  return (
    <div className='confirmation-container'>
      {
        <TransactionConfirmationCard
          isFail={purchaseResult?.toLowerCase() === 'success' ? false : true}
          redirectLink={redirectLink}
        />
      }
    </div>
  );
}
