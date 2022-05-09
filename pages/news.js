import { styled } from '@mui/material/styles';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../src/config';
import Layout from '../src/layouts';
import { Page, Markdown } from '../src/components';
import { NEWS_2022_PATH, NEWS_2021_PATH } from '../_data/config';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import {
  MarketingFreeSEO,
  MarketingCaseStudySummary,
  MarketingCaseStudyGallery,
  MarketingCaseStudiesSimilar,
} from '../src/sections/@marketing';
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

export default function MarketingCaseStudyPage({ post }) {
  const { content_2021, content_2022 } = post;
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
          <Typography variant="h2">DISCOVER Lab News</Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            News page comments here blahblahblah
          </Typography> */}
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
            <Grid item xs={12} md={2}>
              {/* <MarketingCaseStudySummary frontmatter={frontmatter} /> */}
              <BoxStyled style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'start', justifyContent: 'end' }}>
                <div style={{ marginTop: 16, textAlign: 'center' }}>
                  2022
                </div>
              </BoxStyled>
            </Grid>
            <Grid item xs={12} md={10}>
              <Markdown content={content_2022} move />
              {/* <MarketingCaseStudyGallery images={galleryImgs} /> */}
            </Grid>
            <Grid item xs={12} md={2}>
              {/* <MarketingCaseStudySummary frontmatter={frontmatter} /> */}
              <BoxStyled style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'start', justifyContent: 'end' }}>
                <div style={{ marginTop: 16, textAlign: 'center' }}>
                  2021
                </div>
              </BoxStyled>
            </Grid>
            <Grid item xs={12} md={10}>
              <Markdown content={content_2021} move />
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
  const fileContents_2022 = fs.readFileSync(NEWS_2022_PATH, 'utf-8');
  const fileContents_2021 = fs.readFileSync(NEWS_2021_PATH, 'utf-8');
  const { data: frontmatter_2022, content: content_2022 } = matter(fileContents_2022);
  const { data: frontmatter_2021, content: content_2021 } = matter(fileContents_2021);
  const post = { frontmatter_2022, content_2022, frontmatter_2021, content_2021 };
  return { props: { post: { ...post, content_2022: await serialize(post.content_2022), content_2021: await serialize(post.content_2021) } } }

}