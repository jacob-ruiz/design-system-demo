/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box } from 'theme-ui';
import PropTypes from 'prop-types';

export default Box;

Box.propTypes = {
  padding: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
};

Box.defaultProps = {
  padding: 0,
};
