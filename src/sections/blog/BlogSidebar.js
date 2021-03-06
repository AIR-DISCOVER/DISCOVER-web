import PropTypes from 'prop-types';
// @mui
import { Stack } from '@mui/material';
// hooks
import { useResponsive } from '../../hooks';
// components
//
import BlogSidebarAuthor from './BlogSidebarAuthor';
import BlogSidebarCategories from './BlogSidebarCategories';
import BlogSidebarPopularTags from './BlogSidebarPopularTags';

// ----------------------------------------------------------------------

BlogSidebar.propTypes = {
  advertisement: PropTypes.object,
  author: PropTypes.object,
  recentPosts: PropTypes.object,
  sx: PropTypes.object,
  onSetCate: PropTypes.func,
  onModTag: PropTypes.func,
  tags: PropTypes.array,
  group: PropTypes.string,
};

export default function BlogSidebar({ author, recentPosts, advertisement, sx, tags, onSetCate, onModTag, group, ...other }) {
  const isDesktop = useResponsive('up', 'md');

  return (
    <>
      {author && isDesktop && <BlogSidebarAuthor author={author} />}

      {/* {isDesktop && <SearchInput />} */}

      <Stack
        spacing={5}
        sx={{
          pt: { md: 5 },
          pb: { xs: 8, md: 0 },
          ...sx,
        }}
        {...other}
      >
        <BlogSidebarCategories onSetCate={onSetCate} group={group} />
        {/* <BlogSidebarRecentPosts recentPosts={recentPosts} /> */}
        <BlogSidebarPopularTags tags={tags} onModTag={(tag) => onModTag(tag)} group={group} />
        {/* <Advertisement01 advertisement={advertisement} /> */}
      </Stack>
    </>
  );
}
