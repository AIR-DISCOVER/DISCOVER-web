import PropTypes from 'prop-types';
import { useRef } from 'react';
import Slider from 'react-slick';
import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid, List, Link, Stack, ListItem, ListSubheader, Typography } from '@mui/material';
// config
import { HEADER_DESKTOP_HEIGHT } from '../../config';
//
import { Image, CarouselDots, CarouselArrows } from '../../components';
import { DialogAnimate, MotionContainer, varFade } from '../../components/animate';
import { DISCOVER_RESEARCH_AREA } from '_data/config';

// ----------------------------------------------------------------------

const SubLinkStyle = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
  ...theme.typography.body3,
  padding: 0,
  width: 'auto',
  cursor: 'pointer',
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary,
  },
  ...(active && {
    ...theme.typography.subtitle3,
    color: theme.palette.text.primary,
  }),
}));

const IconBulletStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
  width: 12,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  '&:before': {
    content: '""',
    display: 'block',
    width: 4,
    height: 4,
    borderRadius: '50%',
    backgroundColor: theme.palette.text.disabled,
  },
  ...(active && {
    '&:before': {
      content: '""',
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      transition: theme.transitions.create('all', {
        duration: theme.transitions.duration.shortest,
      }),
    },
  }),
}));

const ListSubheaderStyled = styled((props) => (
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.h5,
  marginBottom: theme.spacing(2.5),
  color: theme.palette.text.primary,
}));

// ----------------------------------------------------------------------

NavDesktopMenu.propTypes = {
  isOpen: PropTypes.bool,
  isScrolling: PropTypes.bool,
  lists: PropTypes.array,
  onClose: PropTypes.func,
  showNum: PropTypes.number,
};

export default function NavDesktopMenu({ lists, isOpen, onClose, isScrolling, showNum = 3}) {
  const router = useRouter();
  const theme = useTheme();

  const carouselRef = useRef(null);

  const carouselList = lists.filter((list) => list.subheader !== 'Common');
  const commonList = lists.filter((list) => list.subheader === 'Common');

  const minList = lists.length > 5;

  const carouselSettings = {
    arrows: true,
    autoplay: true,
    autoplayspeed: 50,
    dots: true,
    infinite: true,
    slidesToShow: showNum,
    slidesToScroll: 3,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      sx: {
        pt: 8
      }
    }),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <DialogAnimate
      hideBackdrop
      maxWidth={false}
      open={isOpen}
      onClose={onClose}
      variants={
        varFade({
          distance: 80,
          durationIn: 0.16,
          durationOut: 0.24,
          easeIn: 'easeIn',
          easeOut: 'easeOut',
        }).inRight
      }
      PaperProps={{
        sx: {
          m: 0,
          position: 'absolute',
          borderRadius: '0 !important',
          top: isScrolling ? HEADER_DESKTOP_HEIGHT - 20 : HEADER_DESKTOP_HEIGHT,
          // Fix scroll on window
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        },
      }}
    >
      <Grid container columns={commonList.length > 0 ? { xl: 16, lg: 18, md: 18 } : 12} spacing={2}>
        {/* Common List */}
        {commonList.length > 0 && <Grid
          item
          xs={6}
          md={18}
          lg={6}
          xl={4}
          sx={{
            lg: {
              borderRight: (_theme) => `dashed 1px ${_theme.palette.divider}`,
            },
            pl: 4,
            pr: 4
          }}
        >
          <List disablePadding sx={{ pt: 4, pb: { md: 2, lg: 4 }, pl: 4 }} component={MotionContainer}>
            {/* <ListSubheaderStyled>{commonList[0].subheaderName}</ListSubheaderStyled> */}
            <m.div variants={varFade({ distance: 80 }).inRight}>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                {commonList[0].description}
              </Typography>
              <Stack spacing={1.5} alignItems="flex-start">
                {commonList[0].items.map((item) => {
                  const { title, path } = item;
                  const active = router.pathname === path;

                  return <LinkItem key={title} title={title} href={path} active={active}/>;
                })}
              </Stack>
            </m.div>
          </List>
        </Grid>}
        <Grid item xs={12} md={18} lg={12}>
          <Box sx={{ position: 'relative', px: 2, py: { md: 2, lg: 4 }, mr: 2 }}>
            <Slider ref={carouselRef} {...carouselSettings}>
              {carouselList.map((list) => {
                const { subheader, items, cover } = list;

                const _path = items.length > 0 ? items[0].path : '';

                return (
                  <List key={subheader} disablePadding sx={{ px: 2 }} component={MotionContainer}>
                    <m.div variants={varFade({ distance: 80 }).inLeft}>
                      <ListSubheaderStyled>{subheader}</ListSubheaderStyled>
                    </m.div>

                    {cover ? (
                      <NextLink href={_path} passHref>
                        <Box
                          component={m.a}
                          variants={varFade({ distance: 80 }).inLeft}
                          sx={{ display: 'block' }}
                        >
                          <Image
                            alt={cover}
                            src={cover}
                            sx={{
                              mb: 2.5,
                              minHeight: 80,
                              height: '15vh',
                              borderRadius: 1.5,
                              cursor: 'pointer',
                              transition: theme.transitions.create('opacity'),
                              border: (theme) => `solid 1px ${theme.palette.divider}`,
                              '&:hover': { opacity: 0.8 },
                            }}
                          />
                        </Box>
                      </NextLink>
                    ) : undefined
                      // (
                      //   <Box
                      //     sx={{
                      //       mb: 2.5,
                      //       height: 132,
                      //       borderRadius: 1.5,
                      //       display: 'flex',
                      //       typography: 'h5',
                      //       alignItems: 'center',
                      //       justifyContent: 'center',
                      //       color: 'text.disabled',
                      //       bgcolor: 'background.neutral',
                      //     }}
                      //   >
                      //     Coming Soon!
                      //   </Box>
                      // )
                    }

                    <Stack spacing={1.5} alignItems="flex-start">
                      {items?.map((item) => {
                        const { title, path } = item;

                        const active = router.pathname === path || router.asPath === path;

                        return <LinkItem key={title} title={title} href={path} active={active} />;
                      })}
                    </Stack>
                  </List>
                );
              })}
            </Slider>

            {minList && (
              <CarouselArrows
                onNext={handleNext}
                onPrevious={handlePrevious}
                sx={{
                  top: -28,
                  position: 'relative',
                  justifyContent: 'flex-end',
                }}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </DialogAnimate>
  );
}

// ----------------------------------------------------------------------

LinkItem.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string,
  title: PropTypes.string,
};

function LinkItem({ title, href, active }) {
  return (
    <NextLink key={title} href={href} passHref>
      <Link
        color="inherit"
        underline="hover"
        component={m.a}
        variants={
          varFade({
            distance: 12,
            durationIn: 0.16,
            durationOut: 0.12,
            easeIn: 'easeIn',
          }).inRight
        }
      >
        <SubLinkStyle active={active}>
          {/* <IconBulletStyle active={active} /> */}
          {title}
        </SubLinkStyle>
      </Link>
    </NextLink>
  );
}
