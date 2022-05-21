import PropTypes from 'prop-types';
import { serialize } from 'next-mdx-remote/serialize';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Grid, Box } from '@mui/material';
// routes
import Routes from '../../src/routes';
import matter from 'gray-matter';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// _data
import { _testimonials } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, Image, Markdown, Breadcrumbs } from '../../src/components';
// sections
import { NewsletterMarketing } from '../../src/sections/newsletter';
import { TestimonialsMarketing } from '../../src/sections/testimonials';
import {
  MarketingFreeSEO,
  MarketingCaseStudySummary,
  MarketingCaseStudyGallery,
  MarketingCaseStudiesSimilar,
} from '../../src/sections/@marketing';
import { AREA_TRANSPORTATION_PATH } from '../../_data/config';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

MarketingCaseStudyPage.propTypes = {
  caseStudies: PropTypes.array,
  caseStudy: PropTypes.shape({
    content: PropTypes.object,
    frontmatter: PropTypes.shape({
      coverImg: PropTypes.string,
      galleryImgs: PropTypes.array,
      heroImg: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
};

export default function MarketingCaseStudyPage({ post }) {
  const { frontmatter, content } = post;
  const { title, coverImg, heroImg, galleryImgs } = frontmatter;

  return (
    <Page
      title={`${title} - Case Study`}
      meta={
        <>
          <meta property="og:image" content={coverImg} />
        </>
      }
    >
      <RootStyle>
        <Container>
          <Box
            sx={{
              pt: { xs: 5, md: 10 },
            }}
          >
            <Image alt="hero" src={heroImg} ratio="16/9" sx={{ borderRadius: 2 }} />
          </Box>

          <Breadcrumbs
            sx={{ my: { xs: 5, md: 10 } }}
            links={[
              { name: 'Home', href: '/' },
              { name: title },
            ]}
          />

          <Grid
            container
            spacing={{ md: 8 }}
            direction={{ md: 'row-reverse' }}
            sx={{
              pb: { xs: 10, md: 15 },
            }}
          >
            <Grid item xs={12} md={4}>
              <MarketingCaseStudySummary frontmatter={frontmatter} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Markdown content={content} />
              {/* <MarketingCaseStudyGallery images={galleryImgs} /> */}
            </Grid>
          </Grid>
        </Container>

        <TestimonialsMarketing testimonials={_testimonials} />

        {/* <MarketingCaseStudiesSimilar caseStudies={caseStudies.slice(0, 3)} /> */}
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
  const fileContents = fs.readFileSync(AREA_TRANSPORTATION_PATH, 'utf-8');
  const { data: frontmatter, content } = matter(fileContents);
  const post = { frontmatter, content, };
  return { props: { post: { ...post, content: await serialize(post.content) } } }

}