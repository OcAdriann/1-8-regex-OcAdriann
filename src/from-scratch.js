const helloWorldRegex = (str) => {
  return /Hello world/i.test(str);
};

const hasAVowel = (str) => {
  return /[aeiou]/i.test(str);
};

const hasCatsOrDogs = (str) => {
  return /(cats|dogs)/i.test(str);
};

const hasVowelStart = (str) => {
  return /^[aeiou]/i.test(str);
};

const hasPunctuationEnd = (str) => {
  return /[.!?]$/.test(str);
};

const hasNothingOrDigits = (str) => {
  return !/[a-zA-Z]/gi.test(str);
};

const hasNoFlippers = (str) => { };

const isValidEmail = (str) => { };

const isValidPhoneNumber = (str) => { };

const matchAllNumbers = (str) => { };

const matchAllNumbersAsNumbers = (str) => { };

const matchAllWords = (str) => { };

const replaceAllNumbers = (str) => { };

const fixFileName = (str) => { };

const nameRedacter = (str) => { };

const camelToSnakeCase = (str) => { };

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
