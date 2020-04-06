import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Divider from '../divider';

const Stack = (props) => {
  const stackItems = Children.toArray(props.children);

  return (
    <div>
      {stackItems.map((child, index) => (
        <div key={index}>
          {index > 0 ? (
            <Box sx={{ paddingY: props.space }} paddingY={props.space}>
              {props.dividers && <Divider />}
            </Box>
          ) : null}
          {child}
        </div>
      ))}
    </div>
  );
};

Stack.propTypes = {
  space: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  dividers: PropTypes.bool,
  children: PropTypes.node,
};

export default Stack;
