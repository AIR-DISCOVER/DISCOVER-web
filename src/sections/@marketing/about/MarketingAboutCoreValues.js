// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Box, Grid } from '@mui/material';
// components
import { SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Openess',
    description: (<p>
      Ideas Become Stronger When Shared<br />
      Better Ideas Come from Debates<br />
      Learn from Different Cultures<br />
      Engage Deeply in Open Discussions
    </p>),
    icon: '/value_icons/open.svg',
  },
  {
    title: 'Novelty',
    description: (<p>
      Pay Attention to the Real Nature<br />
      Focus on New Ideas not Papers<br />
      Aim at a Paradigm Shift<br />
      Always Try Something New
    </p>),
    icon: '/value_icons/novel.svg',
  },
  {
    title: 'Flexibility',
    description: (
      <p>
        Care More about Results<br />
        Move First When Encountering Grey Areas<br />
        Do It if Nothing Gets Worse<br />
        Change is the Only Constant
      </p>
    ),
    icon: '/value_icons/flexible.svg',
  },
  {
    title: 'Practicality',
    description: (<p>
      Be Sensitive to Potential Applications<br />
      Find Problems from Firsthand Experiences<br />
      Start from Customer Needs<br />
      Improve Life Rather than Degrade It
    </p>),
    icon: '/value_icons/practical.svg',
  },
  {
    title: 'Teamwork',
    description: (<p>
      Play in a Team and Win as a Team<br />
      Do Things that Benefit the Team <br />
      Never Turn Away When Problem Occurs<br />
      Make Deliverables User-friendly
    </p>),
    icon: '/value_icons/teamwork.svg',
  },
  {
    title: 'Science',
    description: (<p>
      Integrity is the Foundation<br />
      Aim High and Move Fast<br />
      Engage in the Scientific Process<br />
      Earn Esteem as Scientist through Daily Hardwork</p>),
    icon: '/value_icons/science.svg',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0, 0),
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
                  sx={{ width: 64, height: 64, mt: 1, mx: 'auto', color: 'primary.main' }}
                />
                <Typography variant="h5" sx={{ mt: 1, mb: 0 }}>
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
