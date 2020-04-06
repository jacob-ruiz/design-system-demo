/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Divider as Element } from 'theme-ui';
import styles from './styles';

const Divider = (props) => {
  return <Element sx={styles} {...props} />;
};

export default Divider;
