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
    height: '40vh',
    minHeight: '20rem',
    backgroundImage: 'url("./header.png")',
    borderBottom: 1,
  },
  logoBox: {
    width: "25rem",
    // maxWidth: "100%",
    maxHeight: "100%",
    alignSelf: 'flex-start'
  },
  titleBox: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "2rem",
    width: "100%"
  }
}))

function Header(props) {
  const { sections, title } = props;
  const classes = useStyles()
  return (
    <>
      <Toolbar
        className={classes.toolbar}
      // style={{
      //   minHeight: '49vh',
      //   backgroundImage: 'url("./header.png")',
      //   display: 'flex'
      // }}
      // className={classes.toolbar}
      >
        {/* <Button size="small">Subscribe</Button> */}
        <Box className={classes.logoBox}>
          <img src='./site-logo.png' alt='site-logo' style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </Box>
        <Box className={classes.titleBox}>

          <Typography
            component="h2"
            variant="h5"
            color="white"
            align="center"
            sx={{ textShadow: "2px 2px 2px grey", flex: 1 }}
            noWrap
          >
            {title}
          </Typography>
        </Box>
        {/* <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button> */}
      </Toolbar>
      {/* <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar> */}
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
