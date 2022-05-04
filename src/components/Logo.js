import PropTypes from 'prop-types';
import { memo } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Image from './Image';

// ----------------------------------------------------------------------

Logo.propTypes = {
  isSimple: PropTypes.bool,
  onDark: PropTypes.bool,
  sx: PropTypes.object,
};

function Logo({ force, isSimple = false, width = 120, sx, withoutText = false }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const _PRIMARY_MAIN = theme.palette.primary.main;
  const _LIGHT_COLOR = theme.palette.common.white;
  const _DARK_COLOR = theme.palette.grey[800];

  var src = '';
  if (withoutText) {
    src = '/logo/discover-icon-without-text.png'
  }
  else if (force) {
    src = force == 'light' ? "/logo/discover-icon-alpha-black.png" : "/logo/discover-icon-alpha.png"
  } else {
    src = !isLight ? "/logo/discover-icon-alpha.png" : "/logo/discover-icon-alpha-black.png";
  }
  return (
    <NextLink href="/" passHref>
      <Box
        sx={{
          width: isSimple ? 64 : width,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        <Image alt="discover-logo" sx={{ height: '100%', width: '100%' }} src={src} />
      </Box>
    </NextLink>
  );
}

export default memo(Logo);
