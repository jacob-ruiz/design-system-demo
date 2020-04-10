/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Select as Element } from 'theme-ui';
import PropTypes from 'prop-types';
import Label from '../label';
import Box from '../box';

const Select = (props) => {
  return (
    <Box>
      {props.label ? <Label>{props.label}</Label> : null}
      <Element {...props} />
    </Box>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
};

Select.defaultProps = {
  label: null,
};

export default Select;
