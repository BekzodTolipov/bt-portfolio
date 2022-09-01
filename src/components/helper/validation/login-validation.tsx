enum ErrorMessages {
  WRONG_EMAIL = 'Please enter valid email',
  PASSWORD_MISMATCH = 'Password does not match',
  WRONG_PASSWORD = 'Password you entered does not match',
}

type Nullable<T> = T | undefined;

export const isEmailValid = (email: Nullable<string>): string => {
  const regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const isValid = regexp.test(email !== undefined ? email : '');
  return isValid ? '' : ErrorMessages.WRONG_EMAIL;
};

export const isPasswordMatch = (
  passOne: Nullable<string>,
  passTwo: Nullable<string>
): string => {
  return passOne === passTwo ? '' : ErrorMessages.PASSWORD_MISMATCH;
};
