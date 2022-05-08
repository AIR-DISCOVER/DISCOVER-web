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
      ideas become stronger when shared<br />
      better ideas come from dialog and debate<br />
      learn from different backgrounds and caltures<br />
      engage deeply in open and respectful discussion
    </p>),
    icon: '/value_icons/open.svg',
  },
  {
    title: 'Novel',
    description: (<p>
      pay attention to the true nature instead of the convention<br />
      focus on creating new ideas, not publishing papers<br />
      start a paradigm shift, not just follow<br />
      try everything once if it is not clear
    </p>),
    icon: '/value_icons/novel.svg',
  },
  {
    title: 'Flexible',
    description: (
      <p>
        the only restriction is to make your deliverables perfect<br />
        move first and ask permission later for grey areas<br />
        anything is allowed if you won't hurt others<br />
        any constructive solutions are welcome
      </p>
    ),
    icon: '/value_icons/flexible.svg',
  },
  {
    title: 'Practical',
    description: (<p>
      become self critical about potential uses of our technology<br />
      spend your time at the frontline to figure out a practical problem<br />
      solve problems according to requirements from customers instead of reviewers<br />
      committed to the ethical use of technology that improves life rather than degrades it
    </p>),
    icon: '/value_icons/practical.svg',
  },
  {
    title: 'Teamwork',
    description: (<p>
      play on a team and win as a team<br />
      behave in a way that reflects well on the team<br />
      never say "it's not my job" or turn away when something needs doing<br />
      deliverables are powerful when they are frequently used by others
    </p>),
    icon: '/value_icons/teamwork.svg',
  },
  {
    title: 'Science',
    description: (<p>
      integrity is the foundation of science<br />
      aim high, think big while small step, move fast<br />
      science is a privilege and we have to earn it every day<br />
      engaged in the scientific process, irrespective of academic authority or big title    </p>),
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
