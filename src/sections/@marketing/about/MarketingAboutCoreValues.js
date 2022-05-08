// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Box, Grid } from '@mui/material';
// components
import { SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Open',
    description: (<p>
      Ideas become stronger when shared<br />
      Better ideas come from dialog and debate<br />
      Learn from different cultures<br />
      Engage deeply in open discussion
    </p>),
    icon: '/value_icons/open.svg',
  },
  {
    title: 'Novel',
    description: (<p>
      Pay attention to the true nature <br />
      Focus on creating new ideas <br />
      Aim at a paradigm shift <br />
      Always try something new
    </p>),
    icon: '/value_icons/novel.svg',
  },
  {
    title: 'Flexible',
    description: (
      <p>
        Care more about results <br />
        Move first for grey areas<br />
        Do if nothing gets worse<br />
        Change is the only constant
      </p>
    ),
    icon: '/value_icons/flexible.svg',
  },
  {
    title: 'Practical',
    description: (<p>
      Sensitive to potential applications<br />
      Find practical problems at front lines<br />
      Start from customer needs<br />
      Improve life rather than degrade it
    </p>),
    icon: '/value_icons/practical.svg',
  },
  {
    title: 'Teamwork',
    description: (<p>
      Play on a team and win as a team<br />
      Behave that reflects well on the team<br />
      Never turn away when problem comes<br />
      Make deliverables friendly to users
    </p>),
    icon: '/value_icons/teamwork.svg',
  },
  {
    title: 'Science',
    description: (<p>
      Integrity is the foundation<br />
      Aim high while move fast<br />
      Engaged in the scientific process<br />
      Earn the science privilege every day</p>),
    icon: '/value_icons/science.svg',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutCoreValues() {
  return (
    <RootStyle>
      <Container>
        <Typography
          variant="h2"
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          Our Core Values
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gap: 8,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(1, 1fr)',
              md: 'repeat(1, 1fr)',
              lg: 'repeat(2, 1fr)',
            },
          }}
        >
          {CORE_VALUES.map((value) => (
            <Grid container spacing={{ xs: 4, md: 2 }} key={value.title}>
              <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <SvgIconStyle
                  src={value.icon}
                  sx={{ width: 64, height: 64, mx: 'auto', color: 'primary.main' }}
                />
                <Typography variant="h5" sx={{ mt: 5, mb: 0 }}>
                  {value.title}
                </Typography>
              </Grid>
              <Grid item xs={12} md={9} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'start' } }}>
                <Typography sx={{ color: 'text.secondary', textAlign: { xs: 'center', md: 'start' } }}> {value.description} </Typography>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
