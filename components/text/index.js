/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Text as Element } from 'theme-ui';
import PropTypes from 'prop-types';

const Text = ({ align, size, weight, color, ...props }) => {
  return (
    <Element
      sx={{
        color: color,
        textAlign: align,
        fontSize: size,
        fontWeight: weight,
      }}
      {...props}
    />
  );
};

Text.propTypes = {
  align: PropTypes.oneOf(['left', 'right', 'center']),
  variant: PropTypes.oneOf(['default', 'subtle', 'danger', 'success']),
  weight: PropTypes.oneOf(['body', 'bold']),
  size: PropTypes.oneOf(['small', 'default', 'large']),
};

Text.defaultProps = {
  variant: 'default',
  fontSize: 'default',
};

export default Text;
