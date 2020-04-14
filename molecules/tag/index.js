/** @jsx jsx */
import React from 'react';
import { jsx, Flex } from 'theme-ui';
import PropTypes from 'prop-types';
import Text from '../../components/text';

const Tag = ({ close, children }) => {
  return (
    <Flex
      as="div"
      sx={{
        alignItems: 'center',
        borderRadius: 3,
        bg: '#C4D0FD',
        color: 'blue.4',
        paddingY: 2,
        paddingX: 2,
        height: '28px',
        width: 'max-content',
      }}
    >
      <Text size="default" weight="bold" sx={{ color: 'blue.4' }}>
        {children}
      </Text>
      {close && <Close />}
    </Flex>
  );
};

Tag.propTypes = {
  close: PropTypes.bool,
};

Tag.defaultProps = {};

export default Tag;

const Close = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.0833 3.73919L10.2608 2.91669L6.99996 6.17752L3.73913 2.91669L2.91663 3.73919L6.17746 7.00002L2.91663 10.2609L3.73913 11.0834L6.99996 7.82252L10.2608 11.0834L11.0833 10.2609L7.82246 7.00002L11.0833 3.73919Z"
      fill="white"
    />
  </svg>
);
