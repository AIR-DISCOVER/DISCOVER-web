import PropTypes from 'prop-types';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/mechanic/posts';
// _data
import { _members } from '../../_data/members/mechanic';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import { TeamMarketingLangding } from '../../src/sections/team';
import {
  MarketingLandingHero,
} from '../../src/sections/@marketing';
import { BlogFeaturedPosts, BlogFullPostList, BlogMarketingLatestPosts } from '../../src/sections/blog'
import Routes from '../../src/routes';
import { GROUP_INTRO } from '../../_data/config';


// ----------------------------------------------------------------------

MarketingLandingPage.propTypes = {
  // caseStudies: PropTypes.array,
  posts: PropTypes.array,
};

export default function MarketingLandingPage({ posts }) {
  return (
    <Page title="Mechanic">
      <MarketingLandingHero pack={GROUP_INTRO.mechanic} />

      {/* <OurClientsMarketingLanding brands={_brands} /> */}

      {/* <MarketingLandingAbout /> */}
      <TeamMarketingLangding members={_members} group="mechanic" />

      {/* <BlogMarketingLatestPosts posts={posts.slice(0, 4)} name='Research' /> */}

      <BlogFeaturedPosts posts={posts.slice(-5)} route={Routes.mechanic} />

      <BlogFullPostList posts={posts} route={Routes.mechanic} group="mechanic" />

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
