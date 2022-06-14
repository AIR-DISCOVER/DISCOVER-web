// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
// _data
import _mock from '../../../../_data/mock';
// components
import { Iconify, PlayerWithImage } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0),
  },
}));

const TypographyStyle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    left: 0,
    right: 0,
    zIndex: 9,
    margin: 'auto',
    // position: 'absolute',
    color: theme.palette.common.black,
  },
}));

const IconifyStyled = styled(Iconify)(({ theme }) => ({
  color: theme.palette.primary.light,
}))

// ----------------------------------------------------------------------

export default function MarketingAboutOurVision() {
  return (
    <>
      <RootStyle>
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              mb: { xs: 2, md: 2 },
            }}
          >
            Our Vision
          </Typography>
          {/* <TypographyStyle variant="h2" sx={{ mb: 5, top: 80 }}>
            <IconifyStyled icon="bxs:quote-left" sx={{ width: 120, height: 120 }} />
          </TypographyStyle> */}

          {/* <PlayerWithImage
            imgPath="https://zone-assets-api.vercel.app/assets/images/marketing/marketing_about_vision.jpg"
            videoPath={_mock.video}
          /> */}

          <TypographyStyle
            variant="h4"
            sx={{ pt: 5, maxWidth: 564, bottom: 80, opacity: 0.72, textAlign: 'justify', fontWeight: 'normal' }}
          >
            Modern science and technology have been thriving at unprecedented speed, especially in the field of AI and Robotics. The way people live in the universe shall be significantly changed in our generation. In my imagination, DISCOVER Lab will be a utopia where young talents are encouraged to discover something that may become great in future.
          </TypographyStyle>
          <TypographyStyle
            variant="h4"
            sx={{ pt: 10, pb: 5, width: '100%', maxWidth: 564, bottom: 80, opacity: 0.32, textAlign: 'end' }}
          >
            -- Lab Director, Prof. Zhou, Guyue
          </TypographyStyle>
        </Container>
      </RootStyle>
    </>
  );
}
