/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button as Element } from 'theme-ui';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = (props) => {
  return <Element sx={styles} {...props} />;
};

export default Button;

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  variant: 'primary',
};
