import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={4}>
      <CardActionArea component="a" href={'/#/research/' + props.post._which + '/' + props.post._post.replace(/\s+/g, '-')}>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          <CardMedia
            component="img"
            sx={{ width: '100%', maxHeight: '10rem', display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
          <CardContent sx={{ flex: 1, padding: 0}}>
            <Typography
              fontSize='1rem'
              fontWeight='bold'
              lineHeight='1rem'
              color='#BFBFBF'
            >
              Research
            </Typography>
            <Typography
              paddingTop='0.3rem'
              lineHeight='1.2rem'
              fontSize='1.2rem'
              >
              {post.title}
            </Typography>
            <Typography
              color='#7F7F7F'
              paddingTop='0.5rem'
              fontSize='0.8rem'
            >
              {post.date}
            </Typography>
            {/* <Typography variant="subtitle1" >
              {post.description}
            </Typography> */}
            {/* <Typography variant="subtitle1" color="primary"
            >
              Continue reading...
            </Typography> */}
          </CardContent>
        </Box>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
