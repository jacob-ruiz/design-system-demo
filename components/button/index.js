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
  variant: PropTypes.oneOf([
    'primary',
    'alt1',
    'alt2',
    'alt3',
    'destructive.primary',
    'destructive.secondary',
  ]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
};
