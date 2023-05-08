import { MESSAGE_ERROR_MINOR_LONG, MESSAGE_ERROR_NOT_CONTAIN_NUMBER, MESSAGE_ERROR_ONE_CAPITAL_LETTER, MESSAGE_ERROR_ONE_SPECIAL_CHARACTER, passwordValidation } from './index';

describe('Password validation', () => {
  test('When password is undefined then it returns a falsy value', () => {
    expect(passwordValidation(undefined as unknown as string).isValidate).toBeFalsy();
  });
  describe('When password is minor than 8 and not contain at least 2 numbers', () => {
    test('When password is minor than 8 then it returns a falsy value and a message', () => {
      const { message, isValidate } = passwordValidation('lre34T$');
      expect(message).toBe(MESSAGE_ERROR_MINOR_LONG);
      expect(isValidate).toBeFalsy();
    });
    test('When password must not contain at least 2 numbers then it returns a falsy value and an error message', () => {
      const { message, isValidate } = passwordValidation('lerelararaTB%');
      expect(message).toBe(MESSAGE_ERROR_NOT_CONTAIN_NUMBER);
      expect(isValidate).toBeFalsy();
    });
    test('When password must not be minor than 8 and contain at least 2 numbers then it returns a falsy value and an error message', () => {
      const { message, isValidate } = passwordValidation('lere@B');
      const twoErrorMessage = MESSAGE_ERROR_MINOR_LONG.concat('\n', MESSAGE_ERROR_NOT_CONTAIN_NUMBER);
      expect(message).toBe(twoErrorMessage);
      expect(isValidate).toBeFalsy();
    });
  });

  describe('When password not contain at least one capital letter and one special character', () => {
    test('When password must not contain at least one capital letter it returns a falsy value and a error message', () => {
      const { message, isValidate } = passwordValidation('lerelarara$123');
      expect(message).toBe(MESSAGE_ERROR_ONE_CAPITAL_LETTER);
      expect(isValidate).toBeFalsy();
    });
    test('When password must not contain at least one special character it returns a falsy value and a error message', () => {
      const { message, isValidate } = passwordValidation('lerelaB723456');
      expect(message).toBe(MESSAGE_ERROR_ONE_SPECIAL_CHARACTER);
      expect(isValidate).toBeFalsy();
    });
  });
});
