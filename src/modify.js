const swapAllCases = (str) => {
  const changeCase = (match) => {
    if (/[a-z]/.test(match)) return match.toUpperCase();
    if (/[A-Z]/.test(match)) return match.toLowerCase();
  };
  return (str.replaceAll(/[a-zA-Z]/g, changeCase));
};

module.exports = {
  swapAllCases,
};
