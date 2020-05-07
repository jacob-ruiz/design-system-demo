/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import React from 'react';
import Box from '../components/box';
import Inline from '../components/inline';
import { LogoFull } from './assets';

const TopNav = () => {
  return (
    <Flex
      sx={{
        height: '68px',
        alignContent: 'center',
        alignItems: 'center',
        px: 3,
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: 'grey.1'
      }}
    >
      <LogoFull />
    </Flex>
  );
};

export default TopNav;
