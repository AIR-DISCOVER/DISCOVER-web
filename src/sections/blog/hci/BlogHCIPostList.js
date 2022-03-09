import PropTypes from 'prop-types';
// @mui
import { Pagination, Box } from '@mui/material';
//
import BlogHCIPostItem from './BlogHCIPostItem';
import { useCallback, useEffect, useState } from 'react';

// ----------------------------------------------------------------------

BlogHCIPostList.propTypes = {
  posts: PropTypes.array.isRequired,
  category: PropTypes.string,
  tags: PropTypes.array
};

export default function BlogHCIPostList({ posts, category, tags }) {
  const [page, setPage] = useState(1)
  let [displayPosts, setDisplayPosts] = useState([]);
  const RenderPosts = useCallback(() => (
    <>
      {displayPosts.slice((page - 1) * 8, page * 8).map((post) => (
        <BlogHCIPostItem key={post.slug} post={post} />
      ))}
    </>
  ), [displayPosts])
  useEffect(() => {
    let p = [];
    posts.forEach(async e => {
      if ((category === 'all' || (e.frontmatter.category === category)) &&
        (tags.length === 0
          || (e.frontmatter.tags
            && e.frontmatter.tags.filter(value => new Set(tags).has(value)).length > 0
          )
        )
      ) {
        p.push(e);
      }
      setDisplayPosts(p)
    })

    // return () => { setDisplayPosts([]) }
  }, [posts, category, tags])
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
        <RenderPosts />
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
