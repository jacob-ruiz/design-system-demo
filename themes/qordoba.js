const calcMarginTop = (lineHeight) => {
  const capitalHeight = 0.3;
  const toTrim = (lineHeight - capitalHeight) * -0.5;
  return `${toTrim}em`;
};

const trimWhitespace = {
  transform: `translateY(0.25em)`,
  '::before': {
    content: `''`,
    display: 'block',
    opacity: 0,
    height: 0,
    width: '100%',
    marginBottom: `${calcMarginTop(1.1)}`,
  },
};

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 36, 64, 128, 256, 512],
  fonts: {
    body:
      '"Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [10, 12, 13, 18, 30, 40, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 500,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#3C64FA',
    secondary: '#00EBA8',
    muted: '#f6f6f6',
    blue: {
      1: '#E5F4FF',
      2: '#C3E6FF',
      3: '#84CBFF',
      4: '#3C64FA',
      5: '#001071',
    },
  },
  radii: [0, 4, 8, '50%'],
  styles: {
    root: {
      fontFamily: '"Poppins"',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },

  // Variants
  buttons: {
    primary: {
      bg: 'primary',
    },
    secondary: {
      bg: 'blue.1',
      color: 'primary',
    },
  },
  display: {
    1: {
      fontSize: 8,
      ...trimWhitespace,
    },
    2: {
      fontSize: 7,
      ...trimWhitespace,
    },
    3: {
      fontSize: 6,
      ...trimWhitespace,
    },
  },
  heading: {
    1: {
      fontSize: 5,
      ...trimWhitespace,
    },
    2: {
      fontSize: 4,
      ...trimWhitespace,
    },
    3: {
      fontSize: 3,
      ...trimWhitespace,
    },
    4: {
      fontSize: 2,
      ...trimWhitespace,
    },
    5: {
      fontSize: 0,
      letterSpacing: 1.3,
      fontWeight: 700,
      textTransform: 'uppercase',
      ...trimWhitespace,
    },
  },
};

theme.components = components;

export { components };
export default theme;
