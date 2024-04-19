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

const hasNoFlippers = (str) => {
  return !/[BCcDEHIKOoXxl]/g.test(str);
};

const isValidEmail = (str) => {
  return /^[\w.]+@[\w]+\.[\w]{2,4}/.test(str);
};

const isValidPhoneNumber = (str) => {
  return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g.test(str);
};

const matchAllNumbers = (str) => {
  if (str.match(/\d+/g)) return str.match(/\d+/g);
  return [];
};

const matchAllNumbersAsNumbers = (str) => {
  const newArr = str.match(/\d+/g);
  if (newArr === null) return [];
  for (const e in newArr) {
    newArr[e] = Number(newArr[e]);
  }
  return newArr
};

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
