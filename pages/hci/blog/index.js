import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/hci/posts';
// _data
import _mock from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page } from '../../../src/components';
import { SearchInput } from '../../../src/components';
// sections
// import { MarketingFreeSEO } from '../../../src/sections/@marketing';
// import { NewsletterMarketing } from '../../../src/sections/newsletter';
import {
  BlogHCIPostList,
  BlogHCIFeaturedPosts,
  BlogSidebar,
} from '../../../src/sections/blog';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

HCIBlogPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function HCIBlogPage({ posts }) {
  return (
    <Page title="Blog - HCI">
      <RootStyle>
        <SearchInput
          sx={{
            mx: 2.5,
            display: { xs: 'flex', md: 'none' },
            my: { xs: 4, md: 0 },
          }}
        />

        <BlogHCIFeaturedPosts posts={posts.slice(-5)} />

        <Container sx={{ mt: { xs: 4, md: 10 } }}>
          <Grid container spacing={{ md: 8 }}>
            <Grid item xs={12} md={8}>
              <BlogHCIPostList posts={posts} />
            </Grid>

            <Grid item xs={12} md={4}>
              <BlogSidebar
                recentPosts={{
                  list: posts.slice(-4),
                  path: '/hci/blog',
                }}
                advertisement={{
                  title: 'Advertisement',
                  description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                  imageUrl: _mock.image.marketing(9),
                  path: '#',
                }}
              />
            </Grid>
          </Grid>
        </Container>
        {/* <MarketingFreeSEO /> */}
        {/* <NewsletterMarketing /> */}
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

HCIBlogPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
