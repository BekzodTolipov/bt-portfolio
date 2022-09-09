import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getTransactions } from '../../../helper/connection/transaction-api-calls';
import {
  redirectToCheckout,
  setupSession,
} from '../../../helper/data/stripe/stipe';

export default function Support() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactionData = async () => {
      const response = await getTransactions(true);

      setTransactions(response);
    };

    getTransactionData();
  }, []);

  const setupStripeOneTimePaymentSession = async () => {
    const session = await setupSession(true, 1000);

    if (session) {
      redirectToCheckout(session);
    }
  };

  const setupStripeSubscriptionPaymentSession = async () => {};

  const refreshTable = async () => {
    const response = await getTransactions(true);

    setTransactions(response);
  };

  return (
    <>
      <button onClick={setupStripeOneTimePaymentSession}>
        One-Time Payment
      </button>
      {/* <button onClick={setupStripeSubscriptionPaymentSession}>
        Subscription
      </button> */}

      {transactions.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Transaction Status</TableCell>
                <TableCell align='right'>Transaction ID</TableCell>
                <TableCell align='right'>Amount</TableCell>
                <TableCell align='right'>Transaction Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction: Transaction, index) => (
                <TableRow
                  key={transaction._id + index.toString()}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {transaction.status}
                  </TableCell>
                  <TableCell align='right'>{transaction.purchaseId}</TableCell>
                  <TableCell align='right'>
                    ${(transaction.amount / 100).toString()}
                  </TableCell>
                  <TableCell align='right'>
                    {transaction.purchaseDate.toString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <button onClick={refreshTable}>Refresh</button>
    </>
  );
}

interface Transaction {
  _id: String;
  status: boolean;
  purchaseId: String;
  amount: number;
  purchaseDate: Date;
}
