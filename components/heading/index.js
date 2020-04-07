/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Heading as Element } from 'theme-ui';
import PropTypes from 'prop-types';

const Heading = (props) => {
  return <Element {...props} />;
};

Heading.propTypes = {
  variant: PropTypes.oneOf([
    'heading.1',
    'heading.2',
    'heading.3',
    'heading.4',
    'heading.5',
  ]),
};

Heading.defaultProps = {
  variant: 'heading.1',
};

export default Heading;
