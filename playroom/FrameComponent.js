import React from 'react';
import { ThemeProvider, Styled } from 'theme-ui';
import theme from '../themes/qordoba';

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <Styled.root>{children}</Styled.root>
    </>
  </ThemeProvider>
);
