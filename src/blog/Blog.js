import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useState, useEffect } from 'react'

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];



const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog(props) {
  // ! fixme: when props is not valid
  const [post, setPost] = useState('');
  const [meta, setMeta] = useState({});
  const [posts, setPosts] = useState({})
  useEffect(() => {
    fetch('/resources/posts.json')
    .then((res) => {
      res.text()
        .then((json) => {
          setPosts(JSON.parse(json));
          console.log(json)
        })
    })
    .catch((err) => { console.log(err) });
    fetch('/resources/' + props.group + '/' +props.name + '/index.md')
      .then((res) => {
        res.text()
          .then((text) => {
            setPost(text)
          })
      })
      .catch((err) => { console.log(err) });

    fetch('/resources/' + props.group + '/' + props.name + '/meta.json')
      .then((res) => {
        res.text()
          .then((json) => {
            setMeta(JSON.parse(json));
          })
      })
      .catch((err) => { console.log(err) });
    
  }, [props.name, props.group])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Header title={meta.title} />
        <main>
          <Grid container spacing={4} sx={{ padding: 4 }}>
            <Sidebar
              posts={posts}
              title={sidebar.social}
              social={sidebar.social}
            />
            <Main meta={meta} post={post} />
          </Grid>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((_post) => (
              <FeaturedPost key={_post.title} post={_post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
