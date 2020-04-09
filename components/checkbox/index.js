/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Checkbox as Element } from 'theme-ui';
import Label from '../label';
import PropTypes from 'prop-types';

const Checkbox = ({ label, weight, ...props }) => {
  return (
    <Label
      sx={{
        fontWeight: weight,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Element {...props} />
      {label}
    </Label>
  );
};

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  weight: PropTypes.string,
};

Checkbox.defaultProps = {
  weight: 'bold',
};

export default Checkbox;
