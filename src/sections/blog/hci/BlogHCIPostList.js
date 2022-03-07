import PropTypes from 'prop-types';
// @mui
import { Pagination, Box } from '@mui/material';
//
import BlogHCIPostItem from './BlogHCIPostItem';
import { useState } from 'react';

// ----------------------------------------------------------------------

BlogHCIPostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function BlogHCIPostList({ posts }) {
  const [page, setPage] = useState(1)
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          columnGap: 4,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {posts.slice((page - 1) * 8, page * 8).map((post) => (
          <BlogHCIPostItem key={post.slug} post={post} />
        ))}
      </Box>

      <Pagination
        count={Math.ceil(posts.length / 8)}
        page={page}
        onChange={(_, value) => { setPage(value) }}
        color="primary"
        size="large"
        sx={{
          py: { xs: 8, md: 10 },
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
