export const mapToFlexJustify = (justify) => {
  const values = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  return values[justify];
};

export const mapToFlexAlign = (align) => {
  const values = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
  };

  return values[align];
};
