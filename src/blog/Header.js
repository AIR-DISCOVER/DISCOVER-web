import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import { Container, Grid } from '@mui/material';


const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // height: '40vh',
    height: '20rem',
    // backgroundImage: 'url(/header.png)',
    background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/header.png') no-repeat 0% 20%/ cover",
    borderBottom: 1,
  },
  logoBox: {
    width: "100%",
    maxWidth: '15rem',
    maxHeight: "100%",
    alignSelf: 'flex-start',
    display: 'flex'
  },
  titleBox: {
    marginBottom: "-1rem",
    width: "100%",
    display: 'flex',
    flexDirection: 'column'
  }
}))

function Header(props) {
  const { group, title } = props;
  const classes = useStyles()
  return (
    <Toolbar
      disableGutters
      className={classes.toolbar}
    >
      <Container maxWidth={false} disableGutters>
        <Grid container spacing={4} sx={{ padding: 2 }}>
          <Grid item xs={12} md={2.5}>
            <Box className={classes.logoBox} component='a' href='/'>
              <img src='/site-logo.png' alt='site-logo' style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
          </Grid>
          {/* <Grid item xs={12} md={9.5} /> */}
        </Grid>
      </Container>
      <Container maxWidth={false} disableGutters>
        <Grid container spacing={4} sx={{ padding: 4 }}>
          <Grid item xs={0} md={2.5}></Grid>
          <Grid item xs={12} md={9.5}>
            <Box className={classes.titleBox}>

              <Typography
                component="h2"
                variant="h3"
                color="white"
                align="left"
                fontFamily="Gill Sans"
                fontSize="2rem"
                sx={{ textShadow: "2px 2px 2px grey", flex: 1, width: '100%', height: '100%', wordWrap: 'break-word', overflow: 'visible' }}
              // noWrap
              >
                {group && group === 'hci' ? "RESEARCH_HCI" : "RESEARCH_3DVISION"
                }
              </Typography>
              <Typography
                component="h2"
                variant="h3"
                color="#AFAFAF"
                align="left"
                fontFamily="Gill Sans"
                fontSize="2rem"
                sx={{ textShadow: "1px 1px 1px white", flex: 1, width: '100%', height: '100%', wordWrap: 'break-word', overflow: 'visible' }}
              // noWrap
              >
                {title}
              </Typography>
            </Box>

          </Grid>

        </Grid>
      </Container>
    </Toolbar>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
