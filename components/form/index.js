/** @jsx jsx */
import { jsx } from 'theme-ui';
import Box from '../box';
import Stack from '../stack';
import PropTypes from 'prop-types';

const Form = ({ children, space, ...props }) => {
  return (
    <Box as="form" {...props}>
      <Stack space={space}>{children}</Stack>
    </Box>
  );
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
  space: PropTypes.number,
};

Form.defaultProps = {
  space: 2,
};
