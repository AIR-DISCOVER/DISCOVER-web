import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { forwardRef } from 'react';
// @mui
import { Box, IconButton } from '@mui/material';

// ----------------------------------------------------------------------

const IconButtonAnimate = forwardRef(({ children, size = 'medium', sxWrap, ...other }, ref) => (
  <AnimateWrap size={size} sxWrap={sxWrap}>
    <IconButton size={size} ref={ref} {...other}>
      {children}
    </IconButton>
  </AnimateWrap>
));

IconButtonAnimate.propTypes = {
  children: PropTypes.node.isRequired,
  sxWrap: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default IconButtonAnimate;

// ----------------------------------------------------------------------

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
};

AnimateWrap.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  sxWrap: PropTypes.object,
};

function AnimateWrap({ size, children, sxWrap }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <Box
      component={m.div}
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: 'inline-flex',
        ...sxWrap,
      }}
    >
      {children}
    </Box>
  );
}
