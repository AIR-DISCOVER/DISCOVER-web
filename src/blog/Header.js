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


const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // height: '40vh',
    minHeight: '20rem',
    // backgroundImage: 'url(/header.png)',
    background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/header.png') no-repeat 0% 20%/ cover",
    borderBottom: 1,
  },
  logoBox: {
    width: "15rem",
    // maxWidth: "100%",
    maxHeight: "100%",
    alignSelf: 'flex-start',
    display: 'flex'
  },
  titleBox: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "2rem",
    width: "100%",
    display: 'flex'
  }
}))

function Header(props) {
  const { title } = props;
  const classes = useStyles()
  return (
    <>
      <Toolbar
        className={classes.toolbar}
      >
        <Box className={classes.logoBox} component='a' href='/'>
          <img src='/site-logo.png' alt='site-logo' style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </Box>
        <Box className={classes.titleBox}>

          <Typography
            component="h2"
            variant="h3"
            color="white"
            align="left"
            fontFamily="Gill Sans"
            sx={{ textShadow: "2px 2px 2px grey", flex: 1, width: '100%', height: '100%', paddingLeft: 8, paddingRight: 8, wordWrap: 'break-word', overflow: 'visible' }}
            // noWrap
          >
            {title}
          </Typography>
        </Box>
      </Toolbar>
    </>
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
