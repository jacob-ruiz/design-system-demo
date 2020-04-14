/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Field as Element } from 'theme-ui';
import Input from '../input';
import PropTypes from 'prop-types';

const Field = props => {
  return (
    <Element aria-invalid={props.invalid} sx={{ padding: 2 }} {...props} />
  );
};

Field.propTypes = {
  as: PropTypes.element,
  label: PropTypes.string,
  name: PropTypes.string,
  ...Input.propTypes
};

Field.defaultProps = {
  label: 'Label',
  name: 'input',
  ...Input.defaultProps
};

export default Field;
