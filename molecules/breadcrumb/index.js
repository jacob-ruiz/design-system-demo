/** @jsx jsx */
import React, { Children } from 'react';
import { jsx, useThemeUI } from 'theme-ui';
import PropTypes from 'prop-types';
import Box from '../../components/box';
import Inline from '../../components/inline';
import Text from '../../components/text';

const Separator = (props) => {
  const { theme } = useThemeUI();

  return (
    <Text aria-hidden="true" sx={{ ...theme.components.BreadcrumbSeparator }}>
      {props.separator}
    </Text>
  );
};

const Breadcrumb = (props) => {
  const { theme } = useThemeUI();
  const children = Children.map(props.children, (child, index) => {
    const isLast = index === props.children.length - 1;

    const el = React.cloneElement(child, {
      sx: { ...theme.components.BreadcrumbItem },
    });

    return (
      <Inline alignY="center" space="3">
        <Box as="span" sx={theme.components.BreadcrumbItem}>
          {el}
        </Box>
        {isLast ? null : <Separator separator={props.separator} />}
      </Inline>
    );
  });

  return (
    <Inline space="3" alignY="center">
      {children}
    </Inline>
  );
};

Breadcrumb.propTypes = {
  separator: PropTypes.node,
};

Breadcrumb.defaultProps = {
  separator: '/',
};

export default Breadcrumb;
