import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Box, Container, Stack } from '@mui/material';
//
import TeamMarketingMember from './TeamMarketingMember';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

TeamMarketingAbout.propTypes = {
  members: PropTypes.array.isRequired,
};

export default function TeamMarketingAbout({ members }) {
  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 480,
            textAlign: 'center',
            mt: { xs: 8, md: 10 },
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h2">Our Team</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {/* Since wire-frame renderings are relatively simple and fast to calculate, they are often
            used in cases */}
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            rowGap: { xs: 4, md: 8 },
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(4, 1fr)',
              md: 'repeat(6, 1fr)',
            },
          }}
        >
          {members.map((member) => (
            <TeamMarketingMember key={member.id} member={member} />
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
