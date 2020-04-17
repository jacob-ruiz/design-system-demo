/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box as Element } from 'theme-ui';
import PropTypes from 'prop-types';

const Box = props => {
  return <Element {...props} />;
};
export default Box;

Box.propTypes = {
  padding: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6])
};

Box.defaultProps = {
  padding: 0
};
