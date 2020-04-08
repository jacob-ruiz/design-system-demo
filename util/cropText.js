/* Pass this function an object with the measurements:

  Example:

    cropText({
      lineHeight: 1.5,
      capitalHeight: 0.35,
      baseline: 0.2,
    })
*/

const cropText = ({ lineHeight, capitalHeight, baseline }) => {
  const calcMargin = (line, capital) => {
    const toTrim = (line - capital) * -0.5;
    return `${toTrim}em`;
  };

  const marginTop = calcMargin(lineHeight, capitalHeight);

  const styles = {
    transform: `translateY(${baseline}em)`,
    '::before': {
      content: `''`,
      display: 'block',
      height: 0,
      marginTop: `${marginTop}`,
    },
  };

  return styles;
};

export default cropText;
