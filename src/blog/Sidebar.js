import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useState } from 'react';
import {
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  ListSubheader, Collapse
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


function Sidebar(props) {
  const { posts, social } = props;

  const [hciOpen, setHciOpen] = useState(true);

  return (
    <Grid item xs={12} md={2.5}>
      {/* <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper> */}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Research Projects
      </Typography>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
      >
        <ListItemButton onClick={() => { setHciOpen(!hciOpen) }}>
          {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
          <ListItemText primary="HCI" />
          {hciOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={hciOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {posts.hci && posts.hci.map((post) =>
              <ListItem sx={{ pl: 4 }}>
                <a component="a" href={"/#/research/hci/" + post.replace(/\s+/g, '-')}>

                  <ListItemText primary={post}>
                    <Link>d</Link>
                  </ListItemText>
                </a>
              </ListItem>)}
          </List>
        </Collapse>
      </List>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;
