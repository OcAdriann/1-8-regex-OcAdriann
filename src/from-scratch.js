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

const matchAllWords = (str) => {
  if (str.match(/[a-zA-Z']+/g)) return str.match(/[a-zA-Z']+/g);
  return [];
};

const replaceAllNumbers = (str) => {
  return str.replace((/\d+/g), '???')
};

const fixFileName = (str) => {
  return str.replaceAll(/\s+/g, '_');
};

const nameRedacter = (str) => {
  return str.replace(/[A-Z]{2,}/g, "REDACTED")
};

const camelToSnakeCase = (str) => {
  const convertToSnakeCase = (letter, index) => { // Make a function to change the matches accordingly.
    return (index > 0 ? '_' : '') + letter.toLowerCase(); // If the index is above 0, add a underscore and then concatenate the letter in lowercase.
  };
  return str.replaceAll(/[A-Z]/g, convertToSnakeCase); // Call the replace and invoke the previous function for replacing.
};

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
