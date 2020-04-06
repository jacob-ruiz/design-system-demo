/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button as Element } from 'theme-ui';
import PropTypes from 'prop-types';
import { components } from '../../themes/qordoba';
import { useThemeUI } from 'theme-ui';

const Button = (props) => {
  const { theme } = useThemeUI();
  return <Element sx={theme.components.Button} {...props} />;
};

export default Button;

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  variant: 'primary',
};

const styles = {
  borderRadius: 1,
  fontSize: 2,
  fontWeight: 'bold',
  height: 5,
  minWidth: '100px',
  fontFamily: 'body',
};
