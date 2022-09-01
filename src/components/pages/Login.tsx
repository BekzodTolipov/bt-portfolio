import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApiCall, registerApiCall } from '../helper/connection/http';
import {
  isEmailValid,
  isPasswordMatch,
} from '../helper/validation/login-validation';
import './css/login.css';

const theme = createTheme({
  palette: {
    background: {
      default: 'rgba(137, 170, 171, 0.8)',
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
  });

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
    if (isRegister) {
      console.log(isRegister);
      passwordErrorMsg = isPasswordMatch(
        inputResult.password?.toString(),
        inputResult.confirmPassword?.toString()
      );
    }

    if (!Boolean(emailErrorMsg) && !Boolean(passwordErrorMsg)) {
      setIsValid(true);
      //TODO: DB call here
      const isSuccessLogin = isRegister
        ? await registerApiCall(inputResult)
        : await loginApiCall(inputResult);
      if (isSuccessLogin) {
        props.setLoginState(isSuccessLogin);
        navigate('/');
      }
    } else {
      setErrorMsg({
        email: emailErrorMsg,
        password: passwordErrorMsg,
      });
      setIsValid(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          backgroundColor: 'rgba(79, 214, 198, 0.9)',
          padding: '0 10px 10px 10px',
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
            />
            <TextField
              InputProps={{
                style: {
                  backgroundColor: '#bcc2c0',
                },
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
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href='#'
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
  );
  // const [isLoggedIn, setLoggedIn] = useState(props.isLoggedIn);
  // const [isRegister, setRegister] = useState(true);

  // // useEffect(() => {
  // //   props.setLoginState()
  // // }, [props.isLoggedIn])

  // return (
  //   <>
  //     {isRegister && (
  //       <form className='login-form'>
  //         <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

  //         <div className='form-floating'>
  //           <input
  //             type='email'
  //             className='form-control'
  //             id='floatingInput'
  //             placeholder='name@example.com'
  //           />
  //           <label htmlFor='floatingInput'>Email address</label>
  //         </div>
  //         <div className='form-floating'>
  //           <input
  //             type='password'
  //             className='form-control'
  //             id='floatingPassword'
  //             placeholder='Password'
  //           />
  //           <label htmlFor='floatingPassword'>Password</label>
  //         </div>
  //         <button className='w-100 btn btn-lg btn-custom' type='submit'>
  //           Sign in
  //         </button>
  //       </form>

  //     )}

  //     {!isRegister && (
  //       <form className='login-form'>
  //         <h1 className='h3 mb-3 fw-normal'>Please Register</h1>

  //         <div className='form-floating'>
  //           <input
  //             type='email'
  //             className='form-control'
  //             id='floatingInput'
  //             placeholder='name@example.com'
  //           />
  //           <label htmlFor='floatingInput'>Email address</label>
  //         </div>
  //         <div className='form-floating'>
  //           <input
  //             type='password'
  //             className='form-control'
  //             id='password'
  //             placeholder='Password'
  //           />
  //           <label htmlFor='password'>Password</label>
  //         </div>
  //         <div className='form-floating'>
  //           <input
  //             type='password'
  //             className='form-control'
  //             id='c-password'
  //             placeholder='Password'
  //           />
  //           <label htmlFor='c-password'>Confirm Password</label>
  //         </div>
  //         <button className='w-100 btn btn-lg btn-custom' type='submit'>
  //           Sign Up
  //         </button>
  //       </form>
  //     )}
  //   </>
  // );
}
