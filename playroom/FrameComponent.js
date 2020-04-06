import React from 'react';
import { ThemeProvider, Styled } from 'theme-ui';
import theme from '../themes/qordoba';

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Styled.root>{children}</Styled.root>
  </ThemeProvider>
);
