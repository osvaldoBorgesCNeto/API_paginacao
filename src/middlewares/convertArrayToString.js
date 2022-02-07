const convertArrayToString = (result) => {
  let resultString = '[';
  result.forEach((elem, index) => {
    if (index === result.length - 1) {
      resultString = `${resultString}'${elem}']`;
    } else {
      resultString = `${resultString}'${elem}', `;
    }
  });

  return resultString;
};

module.exports = convertArrayToString;
