let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'user';

// userName = userInput; // Error: Type 'unknown' is not assignable to type 'string'
//  To fix this
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError('an error occurred', 500);
