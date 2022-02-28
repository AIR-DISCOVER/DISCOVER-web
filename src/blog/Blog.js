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
import { Box, Typography } from '@mui/material';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: '/images/guide_dog_1.json',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: '/images/guide_dog_1.json',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: '/images/guide_dog_1.json',
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
  const [related, setRelated] = useState([])
  useEffect(() => {
    fetch('/resources/research/posts.json')
      .then((res) => {
        res.text()
          .then((json) => {
            Promise.resolve(json).then(JSON.parse).then((re) => { setPosts(re) }).catch((err) => { console.log(err); console.log(props) })
          })
      })
      .catch((err) => { console.log(err) });
    fetch('/resources/research/' + props.group + '/' + props.name + '.md')
      .then((res) => {
        res.text()
          .then((text) => {
            setPost(text)
          })
      })
      .catch((err) => { console.log(err) });

    fetch('/resources/research/' + props.group + '/' + props.name + '.json')
      .then((res) => res.text()
        .then((json) => {
          Promise.resolve(json).then(JSON.parse).then((re) => {
            setMeta(re)
          })
        }).catch((err) => { console.log(err); console.log(props) })
      )
      .catch((err) => { console.log(err) });

  }, [props])

  async function fetch_sequence(related, setfn) {
    let posts = []
    if (related.hci) {
      for (const post of related.hci) {
        let response = await fetch('/resources/research/hci/' + post + '.json')
        let text = await response.text()
        let json = JSON.parse(text)
        json['_which'] = 'hci'
        json['_post'] = post
        posts.push(json)
      }
    }
    if (related.sun) {
      for (const post of related.sun) {
        let response = await fetch('/resources/research/sun/' + post + '.json')
        let text = await response.text()
        let json = JSON.parse(text)
        json['_which'] = 'sun'
        json['_post'] = post
        posts.push(json)
      }
    }

    setfn(posts)
  }

  useEffect(() => {
    meta.related && fetch_sequence(meta.related, setRelated)
    return ()=>{setRelated([])}
  }, [props, meta])



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Header group={props.group} title={meta.title} />
        <Grid container sx={{ padding: 4 }}>
          <Grid item xs={0} md={0} xl={1.2} />
          <Sidebar
            posts={posts}
            title={sidebar.social}
            social={sidebar.social}
          />
          <Main meta={meta} post={post} />
          <Grid item xs={0} md={0} xl={3} />
        </Grid>
        {related.length > 0 &&
          <Grid container sx={{ padding: 4 }}>
            <Grid item xs={0} md={0} xl={1.5} />
            <Grid item xs={0} md={2.5} xl={1.5} />
            <Grid item xs={12} md={9.5} xl={6}>
              <hr
                style={{
                  color: 'rgba(229,229,229,0)',
                  backgroundColor: 'rgba(0,0,0,0)',
                  height: 2
                }}
              />
            </Grid>
            <Grid item xs={0} md={0} xl={3} />

            <Grid item xs={0} md={0} xl={1.5} />
            <Grid item xs={0} md={2.5} xl={1.5} />
            <Grid item xs={12} md={9.5} xl={6}>
              <Typography
                component="h2"
                variant="h3"
                align="left"
                fontFamily="Gill Sans"
                fontSize="1.6rem"
                color="#757575"
                paddingBottom="2rem">
                Related Contents
              </Typography>
            </Grid>
            <Grid item xs={0} md={0} xl={3} />

            <Grid item xs={0} md={0} xl={1.5} />
            <Grid item xs={0} md={2.5} xl={1.5} />
            <Grid item xs={12} md={9.5} xl={6}>
              <Box sx={{ padding: 1 }}>
                {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
                <Grid container spacing={4}>
                  {related.map((p) => (
                    <FeaturedPost key={p.title} post={p} />
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={0} md={0} xl={3} />
          </Grid>
        }
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
