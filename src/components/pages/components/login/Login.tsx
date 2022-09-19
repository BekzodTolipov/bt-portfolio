import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  forgotPasswordApiCall,
  loginApiCall,
  LOGIN_TYPE,
  registerApiCall,
} from '../../../helper/connection/user-api-calls';
import {
  ERROR_MESSAGE,
  isEmailValid,
  isMinPassReqSatisfied,
  isPasswordMatch,
} from '../../../helper/validation/login-validation';
import './login.css';

const theme = createTheme({
  palette: {
    background: {
      default: '#193549',
    },
  },
});

export default function Login(props: any) {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState({
    email: 'Please enter valid email',
    password: 'Password does not match',
    passStandard: '',
  });
  const [isDialog, setIsDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [dialogConfirmation, setDialogConfirmation] = useState(false);
  const [isPassStandard, setIsPassStandard] = useState(false);

  const _handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const inputResult = {
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
    };

    const emailErrorMsg = isEmailValid(inputResult.email?.toString());
    let passwordErrorMsg = '';
    let passStandard = '';
    if (isRegister) {
      passwordErrorMsg = isPasswordMatch(
        inputResult.password?.toString(),
        inputResult.confirmPassword?.toString()
      );

      passStandard = isMinPassReqSatisfied(inputResult.password?.toString());
    }

    if (
      !Boolean(emailErrorMsg) &&
      !Boolean(passwordErrorMsg) &&
      !Boolean(passStandard)
    ) {
      setIsValid(true);
      const isSuccessLogin = isRegister
        ? await registerApiCall(inputResult)
        : await loginApiCall(inputResult);

      if (isSuccessLogin.message === LOGIN_TYPE.SUCCESS) {
        props.setLoginState(isSuccessLogin);
        navigate('/');
      } else {
        const emailMsg =
          isSuccessLogin.message === LOGIN_TYPE.WRONG_EMAIL
            ? LOGIN_TYPE.WRONG_EMAIL
            : '';
        const passMsg =
          isSuccessLogin.message === LOGIN_TYPE.WRONG_PASSWORD
            ? LOGIN_TYPE.WRONG_PASSWORD
            : '';

        setErrorMsg({
          email: emailMsg,
          password: passMsg,
          passStandard: '',
        });
        setIsValid(false);
      }
    } else {
      setErrorMsg({
        email: emailErrorMsg,
        password: passwordErrorMsg,
        passStandard: passStandard,
      });
      setIsValid(false);
    }
  };

  const _handleDialogOpen = () => {
    setIsDialog(true);
  };

  const _handleDialogClose = () => {
    setIsDialog(false);
  };

  const _handleDialogConfirmationClose = () => {
    setDialogConfirmation(false);
  };

  const _forgotPasswordRequest = async () => {
    const checkEmail = isEmailValid(email);

    if (!Boolean(checkEmail)) {
      _handleDialogClose();

      const resposne = await forgotPasswordApiCall(email);

      setDialogConfirmation(true);
    } else {
      setIsValid(false);
      setErrorMsg({
        email: 'Please enter valid email',
        password: '',
        passStandard: '',
      });
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            backgroundColor: '#456268',
            padding: '0 15px 15px 25px',
          }}
          component='main'
          maxWidth='xs'
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#de4c28' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            {isRegister && !isPassStandard && (
              <Typography
                color='rgba(248, 106, 153, 1)'
                component='h1'
                variant='body1'
              >
                * {ERROR_MESSAGE.PASSWORD_MIN_STANDARD}
              </Typography>
            )}
            <Box
              component='form'
              onSubmit={_handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                InputProps={{
                  style: {
                    backgroundColor: '#bcc2c0',
                  },
                }}
                InputLabelProps={{
                  style: { fontWeight: 'bold' },
                }}
                error={!isValid}
                helperText={!isValid && errorMsg.email}
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                InputProps={{
                  style: {
                    backgroundColor: '#bcc2c0',
                  },
                }}
                InputLabelProps={{
                  style: { fontWeight: 'bold' },
                }}
                error={!isValid}
                helperText={!isValid && errorMsg.password}
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              {isRegister && (
                <TextField
                  InputProps={{
                    style: {
                      backgroundColor: '#bcc2c0',
                    },
                  }}
                  InputLabelProps={{
                    style: { fontWeight: 'bold' },
                  }}
                  error={!isValid}
                  helperText={!isValid && errorMsg.password}
                  margin='normal'
                  required
                  fullWidth
                  name='confirmPassword'
                  label='Confirm Password'
                  type='password'
                  id='confirmPassword'
                  autoComplete='current-password'
                />
              )}
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                {isRegister ? 'Sign Up' : 'Sign In'}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    onClick={_handleDialogOpen}
                    href='#'
                    sx={{ color: 'white' }}
                    variant='body2'
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href='#'
                    sx={{ color: 'white' }}
                    variant='body2'
                    onClick={() => {
                      setIsRegister(!isRegister);
                    }}
                  >
                    {!isRegister ? "Don't have an account? Sign Up" : 'Sign In'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>

      {isDialog && (
        <Dialog open={isDialog} onClose={_handleDialogClose}>
          <DialogTitle>Reset Password</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter email associated with your account
            </DialogContentText>
            <TextField
              autoFocus
              error={!isValid}
              helperText={!isValid && errorMsg.email}
              margin='dense'
              id='name'
              label='Email Address'
              type='email'
              fullWidth
              variant='standard'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={_handleDialogClose}>Cancel</Button>
            <Button
              onClick={() => {
                _forgotPasswordRequest();
              }}
            >
              Reset
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {dialogConfirmation && (
        <Dialog
          open={dialogConfirmation}
          onClose={_handleDialogConfirmationClose}
        >
          <DialogTitle>Reset Password</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Password reset request has been sent, please check you email,
              possible in spam folder
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={_handleDialogConfirmationClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
