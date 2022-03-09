import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/sun/posts';
// _data
// layouts
import Layout from '../../../src/layouts';
// components
import { Page } from '../../../src/components';

import {
  BlogFeaturedPosts,
  BlogFullPostList,
} from '../../../src/sections/blog';
import Routes from '../../../src/routes';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

SUNBlogPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function SUNBlogPage({ posts }) {
  return (
    <Page title="Blog - AIR-SUN">
      <RootStyle>

        <BlogFeaturedPosts posts={posts.slice(-5)} route={Routes.sun} />

        <BlogFullPostList posts={posts} route={Routes.sun} group="sun" />

      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

SUNBlogPage.getLayout = function getLayout(page) {
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
