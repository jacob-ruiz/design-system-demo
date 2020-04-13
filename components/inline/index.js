/** @jsx jsx */
import React, { Children } from 'react';
import { jsx } from 'theme-ui';
import { Flex, useThemeUI } from 'theme-ui';
import PropTypes from 'prop-types';
import Box from '../box';
import { mapToFlexJustify, mapToFlexAlign } from './helpers';

const Inline = ({ space, justify, alignY, children }) => {
  const negativeMargin = space * -1;
  const justifyContent = mapToFlexJustify(justify);

  return (
    <Box
      sx={{
        marginTop: negativeMargin,
        marginLeft: negativeMargin,
      }}
    >
      <Flex
        sx={{
          justifyContent: justifyContent,
          flexWrap: 'wrap',
          alignItems: mapToFlexAlign(alignY),
        }}
      >
        {Children.map(children, (child) =>
          child !== null && child !== undefined ? (
            <Box sx={{ paddingLeft: space, paddingTop: space }}>{child}</Box>
          ) : null
        )}
      </Flex>
    </Box>
  );
};

Inline.propTypes = {
  space: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  justify: PropTypes.oneOf(['left', 'center', 'right']),
  alignY: PropTypes.oneOf(['center', 'top', 'bottom']),
  children: PropTypes.node,
};

Inline.defaultProps = {
  space: 1,
};

export default Inline;
