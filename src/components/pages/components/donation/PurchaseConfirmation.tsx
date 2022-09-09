import React from 'react';
import { useParams } from 'react-router-dom';
import './purchase-conformation.css';
import TransactionConfirmationCard from './transaction-confirmation/transaction-confirmation';
export default function PurchaseConfirmation() {
  let { purchaseResult } = useParams();

  return (
    <div className='confirmation-container'>
      <h1>Purchase Confirmation</h1>
      {purchaseResult?.toLowerCase() === 'success' ? (
        <TransactionConfirmationCard isFail={false} />
      ) : (
        <TransactionConfirmationCard isFail={true} />
      )}
    </div>
  );
}
