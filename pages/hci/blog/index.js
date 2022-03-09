import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
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

HCIBlogPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function HCIBlogPage({ posts }) {
  return (
    <Page title="Blog - HCI">
      <RootStyle>

        <BlogFeaturedPosts posts={posts.slice(-5)} route={Routes.hci} />

        <BlogFullPostList posts={posts} route={Routes.hci} />

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
