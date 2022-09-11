import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getTransactions } from '../../../helper/connection/transaction-api-calls';
import {
  redirectToCheckout,
  setupSession,
} from '../../../helper/data/stripe/stipe';
import SliderComponent from '../slider/SliderComponent';
import './support.css';

export default function Support() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState(100);

  useEffect(() => {
    const getTransactionData = async () => {
      const response = await getTransactions(true);

      setTransactions(response);
    };

    getTransactionData();
  }, []);

  const setupStripeOneTimePaymentSession = async () => {
    const session = await setupSession(true, amount);

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
    <div className='transaction-container'>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 support-header'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={setupStripeOneTimePaymentSession}
          >
            One-Time Payment
          </button>
          {/* <button onClick={setupStripeSubscriptionPaymentSession}>
        Subscription
      </button> */}

          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <SliderComponent setAmount={setAmount} />
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
          {transactions?.length > 0 && (
            <Paper className='table-container'>
              <div className='table-btn-header'>
                <i
                  onClick={refreshTable}
                  className='fa-solid fa-arrows-rotate fa-2xl support-refresh-btn'
                ></i>
              </div>
              <TableContainer>
                <Table
                  sx={{ minWidth: 350 }}
                  size='small'
                  aria-label='simple table'
                >
                  <TableHead className='table-header'>
                    <TableRow>
                      <TableCell className='table-cell-header'>
                        Transaction Status
                      </TableCell>
                      <TableCell className='table-cell-header' align='right'>
                        Transaction ID
                      </TableCell>
                      <TableCell className='table-cell-header' align='right'>
                        Amount
                      </TableCell>
                      <TableCell className='table-cell-header' align='right'>
                        Transaction Date
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className='table-body'>
                    {transactions.map((transaction: Transaction, index) => (
                      <TableRow
                        className='table-body-row'
                        key={transaction._id + index.toString()}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell
                          className='table-cell'
                          component='th'
                          scope='row'
                        >
                          {transaction.status}
                        </TableCell>
                        <TableCell className='table-cell' align='right'>
                          {transaction.purchaseId}
                        </TableCell>
                        <TableCell className='table-cell' align='right'>
                          ${(transaction.amount / 100).toString()}
                        </TableCell>
                        <TableCell className='table-cell' align='right'>
                          {transaction.purchaseDate.toString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter></TableFooter>
                </Table>
              </TableContainer>
            </Paper>
          )}
        </div>
      </div>
    </div>
  );
}

interface Transaction {
  _id: String;
  status: boolean;
  purchaseId: String;
  amount: number;
  purchaseDate: Date;
}
