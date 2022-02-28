import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
function Image(props) {
  return <img {...props} style={{ maxWidth: '100%' }} />
}

function Main(props) {
  const { post, meta } = props;

  return (
    <Grid
      item
      xs={12}
      md={9.5}
      sx={{
        '& .markdown': {
          py: 0,
          width: '100%'
        },
      }}
    >
      {/* <Typography variant="h6" gutterBottom>
        {meta.title}
      </Typography>
      <Divider /> */}
      <Markdown content={post} className="markdown" key={post.substring(0, 40)}>
        {post}
      </Markdown>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
