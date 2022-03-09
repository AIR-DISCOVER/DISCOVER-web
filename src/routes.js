// ----------------------------------------------------------------------

const Routes = {
  hci: {
    landing: '/hci',
    posts: '/hci/blog',
    post: (slug) => `/hci/blog/${slug}`
  },

  // Common
  maintenance: '/maintenance',
  comingsoon: '/coming-soon',
  page404: '/404',
  page500: '/500',
};

export default Routes;
