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
import { BlogMarketingLatestPosts } from '../../src/sections/blog';
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
import { BlogHCIFeaturedPosts, BlogHCIPostList } from '../../src/sections/blog/hci'

// ----------------------------------------------------------------------

MarketingLandingPage.propTypes = {
  // caseStudies: PropTypes.array,
  posts: PropTypes.array,
};

export default function MarketingLandingPage({ posts }) {
  return (
    <Page title="Landing - HCI">
      <MarketingLandingHero />

      {/* <OurClientsMarketingLanding brands={_brands} /> */}

      {/* <MarketingLandingAbout /> */}
      <TeamMarketingLangding members={_members} />

      <BlogMarketingLatestPosts posts={posts.slice(0, 4)} name='Research' />

      <BlogHCIFeaturedPosts posts={posts.slice(-5)} />

      <MarketingLandingServices />

      <MarketingLandingProcess />

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
