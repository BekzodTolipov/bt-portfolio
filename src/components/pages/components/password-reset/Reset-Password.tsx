import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPasswordApiCall } from '../../../helper/connection/http';
import { isPasswordMatch } from '../../../helper/validation/login-validation';

const theme = createTheme({
  palette: {
    background: {
      default: 'rgba(137, 170, 171, 0.8)',
    },
  },
});

export default function ResetPassword() {
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState({
    passMsg: 'Password mismatch',
    captchaMsg: 'Please use Captcha',
  });
  const [isCaptchaValid, setIsCaptchaValid] = useState({
    initial: true,
    isValid: true,
  });

  let { token } = useParams();

  const _handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const inputResult = {
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
      token: token,
    };

    const passwordErrorMsg = isPasswordMatch(
      inputResult.password?.toString(),
      inputResult.confirmPassword?.toString()
    );

    if (isCaptchaValid.initial && isCaptchaValid.isValid) {
      setIsCaptchaValid({
        initial: false,
        isValid: false,
      });
    }

    if (Boolean(passwordErrorMsg)) {
      setIsValid(false);
    } else if (!isCaptchaValid.initial && isCaptchaValid.isValid) {
      // TODO: need to validate api call
      const passwordReset = await resetPasswordApiCall(inputResult);
      navigate('/login');
    }
  };

  return (
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
          <Typography component='h1' variant='h5'>
            Please enter new password
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
              InputLabelProps={{
                style: { fontWeight: 'bold' },
              }}
              error={!isValid}
              helperText={!isValid && errorMsg.passMsg}
              margin='normal'
              required
              fullWidth
              name='password'
              label='New Password'
              type='password'
              id='password'
              autoComplete='current-password'
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
              helperText={!isValid && errorMsg.passMsg}
              margin='normal'
              required
              fullWidth
              name='confirmPassword'
              label='Confirm New Password'
              type='password'
              id='confirmPassword'
              autoComplete='current-password'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
            <ReCAPTCHA
              sitekey='6LfTa8ohAAAAAMmbyolSR_udQyuS2Z1J1aIVqz5b'
              theme='dark'
              onChange={() => {
                setIsCaptchaValid({
                  initial: false,
                  isValid: true,
                });
              }}
            />
            {!isCaptchaValid.initial && !isCaptchaValid.isValid && (
              <Typography color='#f44336' component='h1' variant='h5'>
                * Please use captcha
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
