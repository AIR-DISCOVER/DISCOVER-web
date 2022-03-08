import PropTypes from 'prop-types';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/hci/posts';
import { Grid, Container } from '@mui/material';
// _data
import { _testimonials, _brands, _members, _pricingMarketing } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import { PricingMarketing } from '../../src/sections/pricing';
import { TeamMarketingLangding } from '../../src/sections/team';
import { NewsletterMarketing } from '../../src/sections/newsletter';
import { TestimonialsMarketing } from '../../src/sections/testimonials';
import { OurClientsMarketingLanding } from '../../src/sections/our-clients';
import {
  MarketingFaqs,
  MarketingFreeSEO,
  MarketingLandingHero,
  MarketingLandingAbout,
  MarketingLandingProcess,
  MarketingLandingServices,
  MarketingLandingCaseStudies,
} from '../../src/sections/@marketing';
import { BlogHCIFeaturedPosts, BlogHCIPostList, BlogSidebar, BlogMarketingLatestPosts } from '../../src/sections/blog'
import { useState } from 'react';


// ----------------------------------------------------------------------

MarketingLandingPage.propTypes = {
  // caseStudies: PropTypes.array,
  posts: PropTypes.array,
};

export default function MarketingLandingPage({ posts }) {
  const [category, setCategory] = useState('all')
  const [tags, setTags] = useState([])
  return (
    <Page title="Landing - HCI">
      <MarketingLandingHero />

      {/* <OurClientsMarketingLanding brands={_brands} /> */}

      {/* <MarketingLandingAbout /> */}
      <TeamMarketingLangding members={_members} />

      <BlogMarketingLatestPosts posts={posts.slice(0, 4)} name='Research' />

      <BlogHCIFeaturedPosts posts={posts.slice(-5)} />

      <Container sx={{ mt: { xs: 4, md: 10 } }}>
        <Grid container spacing={{ md: 8 }}>
          <Grid item xs={12} md={8}>
            <BlogHCIPostList posts={posts} category={category} tags={tags} />
          </Grid>

          <Grid item xs={12} md={4}>
            <BlogSidebar
              recentPosts={{
                list: posts.slice(-4),
                path: '/hci/blog',
              }}
              onSetCate={setCategory}
            />
          </Grid>
        </Grid>
      </Container>

      {/* <MarketingLandingServices /> */}

      {/* <MarketingLandingProcess /> */}

      {/* <MarketingLandingCaseStudies caseStudies={caseStudies.slice(-6)} /> */}


      {/* <PricingMarketing plans={_pricingMarketing} /> */}

      {/* <MarketingFaqs /> */}

      {/* <TestimonialsMarketing testimonials={_testimonials} /> */}

      {/* <MarketingFreeSEO /> */}

      {/* <NewsletterMarketing /> */}
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingLandingPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
      // caseStudies: getAllCaseStudies(),
    },
  };
}
