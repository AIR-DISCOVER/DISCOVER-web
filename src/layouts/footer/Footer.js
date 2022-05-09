import PropTypes from 'prop-types';
import { useState } from 'react';
// icons
import chevronDown from '@iconify/icons-carbon/chevron-down';
import chevronRight from '@iconify/icons-carbon/chevron-right';
// next
import NextLink from 'next/link';
// @mui
import Masonry from '@mui/lab/Masonry';
import {
  Box,
  Grid,
  Link,
  Stack,
  Divider,
  Collapse,
  Container,
  Typography,
  ListSubheader,
} from '@mui/material';
// hooks
import { useResponsive } from '../../hooks';
// components
import { Logo, Iconify } from '../../components';
//
// import { PageLinks } from '../nav/NavConfig';
import { DISCOVER_ABOUT_US_SIMPLE, DISCOVER_CONTACT, DISCOVER_INTRO, DISCOVER_INTRO_EXTRA, DISCOVER_PAGELINKS } from '_data/config';
import { styled, useTheme } from '@mui/material/styles';
import { MarketingContactInfo } from 'src/sections/@marketing';
import { CareerContactInfo } from 'src/sections/@career';

const BoxStyled = styled((props) => (
  // <span {...props}/>
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.h5,
  // marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
}));

// ----------------------------------------------------------------------

export default function Footer({ fill }) {
  const isDesktop = useResponsive('up', 'md');
  const isLarge = useResponsive('up', 'lg');
  const theme = useTheme();

  // const lists = PageLinks.filter((list) => list.subheader !== 'Coming Soon');

  // const renderLists = isDesktop
  //   ? lists
  //   : lists.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  return (
    <div style={{ width: '100%', background: fill ? (theme.palette.background.default) : null }}>
      <Divider />
      <Container sx={{ py: { xs: 6, md: 8, } }}>
        <Grid container columnSpacing={4} rowSpacing={isDesktop ? 0 : 4} justifyContent={{ md: 'space-between' }}>
          <Grid item xs={12} md={6}>
            <Logo withoutText width={'15rem'} />
          </Grid>
          {isDesktop ?
            <Grid item xs={12} md={isLarge ? 3 : 6}>
              <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'start' }}>
                <BoxStyled sx={{ m: 0.8 }}>About Us</BoxStyled>
              </div>
            </Grid> : null}
          {isLarge ?
            <Grid item xs={12} md={3}>
              <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'start' }}>
                <BoxStyled sx={{ m: 0.8, ml: 1.3 }}>Contact Us</BoxStyled>
              </div>
            </Grid> : null}
          <Grid item xs={12} md={6}>
            <Stack spacing={{ xs: 3, md: 5 }}>
              <Stack alignItems="flex-start" spacing={3}>
                <Typography variant="body3" sx={{ color: 'text.secondary', lineHeight: '2rem', mt: 0.4 }}>
                  {DISCOVER_INTRO}
                  {/* The starting point for your next project based on easy-to-customize Material-UI ©
                  helps you build apps faster and better. */}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          {/* <Grid item xs={12} md={1} /> */}
          <Grid item xs={12} md={6}>
            {isDesktop ? (
              <Masonry columns={isLarge ? 2 : 1} spacing={1} sx={{ margin: 0 }}>
                {DISCOVER_PAGELINKS.map((list) => (
                  <ListDesktop key={list.subheader} list={list} />
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {DISCOVER_PAGELINKS.map((list) => (
                  <ListMobile key={list.subheader} list={list} />
                ))}
              </Stack>
            )}
          </Grid>
          {/* <Grid item xs={12} md={12}>
            {isDesktop ? (null
            ) : (
              <Stack spacing={1.5}>
                {DISCOVER_ABOUT_US_SIMPLE.map((list) => (
                  <ListMobile key={list.subheader} list={list} />
                ))}
              </Stack>
            )} 
          </Grid> */}
        </Grid>
        {/* <CareerContactInfo /> */}
      </Container>

      <Divider />

      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2.5}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: 'center' }}
        >
          <Typography variant="body3" sx={{ color: 'text.secondary' }}>
            © 2022. All rights reserved
          </Typography>
          {/* <Stack direction="row" spacing={3} justifyContent="center">
            <Link variant="body3" sx={{ color: 'text.secondary' }}>
              Help Center
            </Link>
            <Link variant="body3" sx={{ color: 'text.secondary' }}>
              Terms of Service
            </Link>
          </Stack> */}
        </Stack>
      </Container>
    </div >
  );
}

// ----------------------------------------------------------------------

NextLinkItem.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

function NextLinkItem({ children, sx, href = undefined, ...other }) {
  return href ? (
    <NextLink passHref href={href} {...other}>
      <Link
        variant="body3"
        sx={{
          mt: 1,
          color: 'text.secondary',
          '&:hover': {
            color: 'text.primary',
          },
          ...sx,
        }}
      >
        {children}
      </Link>
    </NextLink>
  ) : (
    <Link
    variant="body3"
    sx={{
      mt: 1,
      color: 'text.secondary',
      cursor: 'inherit',
      '&:hover': {
        // color: 'text.primary',
        textDecoration: 'none'
      },
      ...sx,
    }}
  >
    {children}
  </Link>
  );
}

// ----------------------------------------------------------------------

ListDesktop.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

function ListDesktop({ list }) {
  const { subheader, items } = list;

  return (
    <Stack alignItems="flex-start" sx={{ pb: { md: 1 } }}>
      {/* <Typography variant="h6">{subheader}</Typography> */}
      {items?.map((link) => (
        <NextLinkItem key={link.title} href={link.path} sx={{ lineHeight: '2rem', mt: 0 }}>
          {link.title}
        </NextLinkItem>
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

ListMobile.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

function ListMobile({ list }) {
  const { subheader, items } = list;
  const [expand, setExpand] = useState(false);

  const onExpand = () => {
    setExpand(!expand);
  };

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="h6"
        onClick={onExpand}
        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        {subheader}
        <Iconify
          icon={expand ? chevronDown : chevronRight}
          sx={{ width: 20, height: 20, ml: 0.5 }}
        />
      </Typography>

      <Collapse in={expand} sx={{ width: 1 }}>
        <Box
          sx={{
            display: 'grid',
            rowGap: 1,
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          {items?.map((link) => (
            <NextLinkItem key={link.title} href={link.path}>
              {link.title}
            </NextLinkItem>
          ))}
        </Box>
      </Collapse>
    </Stack>
  );
}
