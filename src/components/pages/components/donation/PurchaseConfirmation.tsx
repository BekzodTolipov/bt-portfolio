import React from 'react';
import { useParams } from 'react-router-dom';

export default function PurchaseConfirmation() {
  let { purchaseResult } = useParams();

  return (
    <>
      {purchaseResult === 'success' && <div>Success</div>}

      {purchaseResult === 'fail' && <div>Failed</div>}
    </>
  );
}
