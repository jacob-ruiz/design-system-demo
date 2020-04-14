import cropText from '../util/cropText';

const calcMarginTop = lineHeight => {
  const capitalHeight = 0.35;
  const toTrim = (lineHeight - capitalHeight) * -0.5;
  return `${toTrim}em`;
};

const trimWhitespace = {
  transform: `translateY(0.2em)`,
  '::before': {
    content: `''`,
    display: 'block',
    opacity: 0,
    height: 0,
    width: '100%',
    marginBottom: `${calcMarginTop(1.1)}`
  }
};

const theme = {
  useBorderBox: true,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 36, 64, 128, 256, 512],
  fonts: {
    body:
      '"Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  // fontSizes: [10, 12, 13, 18, 30, 40, 48, 64, 96],
  fontSizes: {
    0: 10,
    1: 12,
    2: 13,
    3: 18,
    4: 30,
    5: 48,
    6: 64,
    7: 96,
    // aliases
    large: 19
  },
  fontWeights: {
    body: 400,
    heading: 600,
    medium: 500,
    bold: 600
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1
  },
  borders: {
    'grey.1': '1px solid red'
  },
  borderWidths: [0, 1, 2],
  shadows: {
    input: '0px 0px 18px rgba(191, 203, 255, 0.38)'
  },
  colors: {
    white: '#fff',
    black: '#000',
    text: '#000',
    background: '#fff',
    primary: '#3C64FA',
    secondary: '#00EBA8',
    muted: '#f6f6f6',
    transparent: 'transparent',
    grey: {
      1: '#EFF0F2',
      2: '#9AA2AF',
      3: '#5A677C',
      4: '#233551',
      5: '#001435'
    },
    blue: {
      1: '#E5F4FF',
      2: '#C3E6FF',
      3: '#84CBFF',
      4: '#3C64FA',
      5: '#001071'
    },
    green: {
      1: '#E2FDF5',
      2: '#A9F9E1',
      3: '#00EBA8',
      4: '#00CA8E',
      5: '#045758'
    },
    orange: {
      1: '#FFF4F1',
      2: '#FFD8CD',
      3: '#FF8866',
      4: '#FF643C'
    }
  },
  radii: [0, 4, 8, '999px'],
  styles: {
    root: {
      fontFamily: '"Poppins"',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 2
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    },
    hr: {
      color: 'grey.1',
      margin: 0
    }
  },

  // Variants
  forms: {
    select: {
      bg: 'grey.1',
      outline: 'none',
      border: 'none',
      fontWeight: 'bold',
      height: '36px',
      cursor: 'pointer'
    },
    checkbox: {
      cursor: 'pointer',
      color: 'grey.3'
    },
    label: {
      fontWeight: 'bold'
    },
    input: {
      // Base styles
      fontFamily: 'body',
      fontSize: 1,
      height: 5,
      borderRadius: 1,
      transition: '100ms',
      outline: 'none',
      '::placeholder': {
        color: 'grey.2'
      },
      // Empty, not focused
      ':placeholder-shown:not(:focus)': {
        bg: 'grey.1'
      },
      // Focused
      ':focus': {
        borderColor: 'green.2',
        bg: 'white',
        boxShadow: 'input'
      },
      // Invalid
      '&[aria-invalid]': {
        borderColor: 'orange.2',
        bg: 'white',
        boxShadow: '0px 0px 18px rgba(255, 100, 60, 0.1)'
      },
      // Invalid, not focused (forcing these styles over "Empty, not focused")
      '&[aria-invalid]:not(:focus)': {
        borderColor: 'orange.2',
        bg: 'white',
        boxShadow: '0px 0px 18px rgba(255, 100, 60, 0.1)'
      },
      // Disabled
      ':disabled': {
        borderColor: 'grey.1',
        color: 'grey.3',
        cursor: 'not-allowed'
      },
      // Filled and not focused
      bg: 'white',
      borderStyle: '1px solid',
      borderColor: 'grey.1'
    }
  },
  buttons: {
    primary: {
      bg: 'primary',
      color: 'white',
      // States
      ':hover': {
        bg: '#4C70FA'
      },
      ':focus': {
        bg: '#2E59FA'
      },
      ':disabled': {
        background: '#C5D1FE'
      }
    },
    alt1: {
      bg: 'blue.1',
      color: 'primary',
      // States
      ':hover': {
        bg: '#C3E6FF'
      },
      ':focus': {
        bg: '#A1D8FF'
      },
      ':disabled': {
        background: '#E5F4FF',
        color: 'white'
      }
    },
    alt2: {
      bg: 'transparent',
      color: 'primary',
      borderColor: 'blue.1',
      borderWidth: 1,
      borderStyle: 'solid',
      // States
      ':hover': {
        bg: '#C3E6FF',
        border: '#C3E6FF'
      },
      ':focus': {
        bg: '#A1D8FF',
        border: '#A1D8FF'
      },
      ':disabled': {
        background: '#E5F4FF',
        color: 'white',
        border: '#E5F4FF'
      }
    },
    alt3: {
      bg: 'white',
      color: 'primary',
      // States
      ':hover': {
        color: '#6282FA'
      },
      ':focus': {
        color: '#1F4DFC'
      },
      ':disabled': {
        opacity: 0.5
      }
    },
    destructive: {
      primary: {
        bg: 'orange.4',
        color: 'white',
        // States
        ':hover': {
          bg: '#FF7552'
        },
        ':focus': {
          bg: '#FF5428'
        },
        ':disabled': {
          bg: '#FFD8CD'
        }
      },
      secondary: {
        bg: 'orange.2',
        color: 'orange.4',
        // States
        ':hover': {
          bg: '#FEECE7'
        },
        ':focus': {
          bg: '#FFCCBE'
        },
        ':disabled': {
          bg: '#FFD8CD'
        }
      }
    }
  },
  display: {
    1: {
      fontSize: 8,
      ...trimWhitespace
    },
    2: {
      fontSize: 7,
      ...trimWhitespace
    },
    3: {
      fontSize: 6,
      ...trimWhitespace
    }
  },
  heading: {
    1: {
      fontSize: 5,
      ...trimWhitespace
    },
    2: {
      fontSize: 4,
      ...trimWhitespace
    },
    3: {
      fontSize: 3,
      ...trimWhitespace
    },
    4: {
      fontSize: 2,
      ...trimWhitespace
    },
    5: {
      fontSize: 0,
      letterSpacing: 1.3,
      fontWeight: 600,
      textTransform: 'uppercase',
      ...trimWhitespace
    }
  },
  text: {
    default: {
      color: 'black',
      lineHeight: 1.5,
      ...cropText({
        lineHeight: 1.5,
        capitalHeight: 0.15,
        baseline: 0.3
      })
    },
    subtle: {
      color: 'grey.3',
      ...cropText({
        lineHeight: 1.5,
        capitalHeight: 0.15,
        baseline: 0.3
      })
    },
    danger: {
      color: 'orange.4',
      ...cropText({
        lineHeight: 1.5,
        capitalHeight: 0.15,
        baseline: 0.3
      })
    },
    success: {
      color: 'green.4',
      ...cropText({
        lineHeight: 1.5,
        capitalHeight: 0.15,
        baseline: 0.3
      })
    }
  }
};

// Aliases
theme.fontSizes.small = theme.fontSizes[0];
theme.fontSizes.default = theme.fontSizes[1];
theme.fontSizes.large = '13px';

// Components
theme.components = {
  BreadcrumbItem: {
    fontSize: '14px',
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  BreadcrumbSeparator: {
    color: 'grey.2'
  }
};

export default theme;
