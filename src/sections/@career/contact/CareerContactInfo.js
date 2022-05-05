// @mui
import { Typography, Stack, Container, Link } from '@mui/material';
// components
import { SocialsButton } from '../../../components';

// ----------------------------------------------------------------------

export default function CareerContactInfo() {
  return (
    <Container
      sx={{
        px: { xs: 0, md: 0 },
        py: { xs: 0, md: 0 },
        textAlign: { xs: 'center', md: 'left' },
      }}
      disableGutters
    >
      {/* <Typography variant="h2">Get In Touch</Typography> */}
      {/* <Typography
        variant="subtitle1"
        sx={{
          mt: 1,
          mb: { xs: 1, md: 2 },
        }}
      >{`We'd love to talk about how we can help you.`}</Typography> */}

      <Stack spacing={{ xs: 3, md: 5 }} direction={{ xs: 'column', md: 'row' }}>
        <Stack spacing={1}>
          <Typography variant="h6" sx={{ color: 'text.primary' }}>
            Email
          </Typography>
          <Link variant="body2" color="inherit" href="mailto:hello@example.com">
            zhouguyue@air.tsinghua.edu.cn
          </Link>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h6" sx={{ color: 'text.primary' }}>
            Phone
          </Typography>
          <Typography variant="body2">188 8888 8888 </Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h6" sx={{ color: 'text.primary' }}>
            Address
          </Typography>
          <Typography variant="body2">12 / F, block C, Qidi science and technology building,<br /> Tsinghua Science and Technology Park, Beijing</Typography>
        </Stack>

        {/* <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
          <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
            Follow Us
          </Typography>
          <SocialsButton sx={{ color: 'text.primary' }} />
        </Stack> */}
      </Stack>
    </Container>
  );
}
