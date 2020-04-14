/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input as Element } from 'theme-ui';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <Element aria-invalid={props.invalid} sx={{ padding: 2 }} {...props} />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email']),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  defaultValue: PropTypes.string,
};

Input.defaultProps = {
  disabled: false,
  invalid: null,
  defaultValue: null,
  // This is a hack that allows different styles for
  // "empty + unfocused" vs. "empty + focused"
  placeholder: ` `,
};

export default Input;
