import { styled } from '@mui/material/styles';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
import Layout from '../../src/layouts';
import { Page, Markdown } from '../../src/components';
import { NEWS_MARKDOWN_PATH } from '../../_data/config';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import {
  MarketingFreeSEO,
  MarketingCaseStudySummary,
  MarketingCaseStudyGallery,
  MarketingCaseStudiesSimilar,
} from '../../src/sections/@marketing';
import { useEffect, useState } from 'react';
// import fileContents from '../_data/news.md'
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

const BoxStyled = styled((props) => (
  <div {...props} />
  // <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.h2,
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
}));


export async function Process() {
  const { data: _frontmatter, _content } = matter(NEWS);
  return { content: await serialize(_content), frontmatter: _frontmatter }
}

export default function MarketingCaseStudyPage({ post }) {
  const { frontmatter, content } = post;
  return (
    <Page title="News">
      <RootStyle>
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 480,
            textAlign: 'center',
            mt: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h2">News Page Title</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            News page comments here blahblahblah
          </Typography>
        </Stack>
        <Container>
          <Grid
            container
            spacing={{ md: 8 }}
            // direction={{ md: '' }}
            sx={{
              pt: { xs: 8, md: 8 },
              pb: { xs: 10, md: 15 },
              px: 15
            }}
          >

            <Grid item xs={12} md={10}>
              <Markdown content={content} move />
              {/* <MarketingCaseStudyGallery images={galleryImgs} /> */}
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingCaseStudyPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const fs = require('fs')
  const fileContents = fs.readFileSync(NEWS_MARKDOWN_PATH, 'utf-8');
  const { data: frontmatter, content } = matter(fileContents);
  const post = { frontmatter, content, };
  return { props: { post: { ...post, content: await serialize(post.content) } } }

}