export const MESSAGE_ERROR_MINOR_LONG = 'Password must be at least 8 characters';
export const MESSAGE_ERROR_NOT_CONTAIN_NUMBER = 'The password must contain at least 2 numbers';
export const MESSAGE_ERROR_ONE_CAPITAL_LETTER = 'Password must contain at least one capital letter';
export const MESSAGE_ERROR_ONE_SPECIAL_CHARACTER = 'Password must contain at least one special character';

interface Validation {
  isValidate: boolean;
  message?: string;
}

const regexMiniumTwoNumbers = /(?=\d{2,})/g;
const regexOneCapitalLetter = /[A-Z]+/;
const regexSpecialCharacter = /(?=.*[@#$%^&+=]).*$/;
const validatorMajorToEightLong = (password: string): boolean => password.length >= 8 && true;
const validatorWith2Numbers = (password: string): boolean => regexMiniumTwoNumbers.test(password) && true;
const validatorOneCapitalLetter = (password: string): boolean => regexOneCapitalLetter.test(password) && true;
const validatorSpecialCharacter = (password: string): boolean => regexSpecialCharacter.test(password) && true;

const errorMessage = (validationMessage: string | undefined, messageError: string) => validationMessage === undefined ? messageError : validationMessage.concat('\n', messageError);

export const passwordValidation = (password: string): Validation => {
  let validationOfPassword:Validation = { isValidate: true };
  if (password === undefined) {
    return { isValidate: false };
  }

  if (!validatorMajorToEightLong(password)) {
    validationOfPassword = { isValidate: false, message: MESSAGE_ERROR_MINOR_LONG };
  }

  if (!validatorWith2Numbers(password)) {
    validationOfPassword = { isValidate: false, message: errorMessage(validationOfPassword?.message, MESSAGE_ERROR_NOT_CONTAIN_NUMBER) };
  }

  if (!validatorOneCapitalLetter(password)) {
    validationOfPassword = { isValidate: false, message: errorMessage(validationOfPassword?.message, MESSAGE_ERROR_ONE_CAPITAL_LETTER) };
  }

  if (!validatorSpecialCharacter(password)) {
    validationOfPassword = { isValidate: false, message: errorMessage(validationOfPassword?.message, MESSAGE_ERROR_ONE_SPECIAL_CHARACTER) };
  }

  return validationOfPassword;
};
