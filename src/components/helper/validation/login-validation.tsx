export enum ERROR_MESSAGE {
  WRONG_EMAIL = 'Please enter valid email',
  PASSWORD_MIN_STANDARD = 'Password should contain at least 8 character, at least 1 letter and 1 number',
  WRONG_PASSWORD = 'Password you entered does not match',
  PASSWORD_MISMATCH = 'Password does not match',
}

type Nullable<T> = T | undefined;

export const isEmailValid = (email: Nullable<string>): string => {
  const regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const isValid = regexp.test(email !== undefined ? email : '');
  return isValid ? '' : ERROR_MESSAGE.WRONG_EMAIL;
};

export const isPasswordMatch = (
  passOne: Nullable<string>,
  passTwo: Nullable<string>
): string => {
  return passOne === passTwo ? '' : ERROR_MESSAGE.PASSWORD_MISMATCH;
};

export const isMinPassReqSatisfied = (password: Nullable<string>) => {
  const min8Char1Letter1Number = new RegExp(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  );

  const isValid = min8Char1Letter1Number.test(
    password !== undefined ? password : ''
  );
  return isValid ? '' : ERROR_MESSAGE.PASSWORD_MIN_STANDARD;
};
