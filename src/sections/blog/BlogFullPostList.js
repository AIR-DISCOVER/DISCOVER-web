// utils
import { Grid, Container } from '@mui/material';
import BlogPostList from './BlogPostList'
import BlogSidebar from './BlogSidebar'
import { useState } from 'react';

export default function BlogFullPostList({ posts, route, group }) {
  const [category, setCategory] = useState('all')
  const [tags, setTags] = useState([])
  return (
    <Container sx={{ mt: { xs: 4, md: 10, minHeight: '50vh' } }}>
      <Grid container spacing={{ md: 8 }}>
        <Grid item xs={12} md={8}>
          <BlogPostList posts={posts} category={category} tags={tags} route={route} />
        </Grid>

        <Grid item xs={12} md={4}>
          <BlogSidebar
            recentPosts={{
              list: posts.slice(-4),
              path: route.posts,
            }}
            tags={tags}
            onSetCate={setCategory}
            onModTag={(tag) => {
              if (tags.includes(tag)) {
                let tmp = new Set(tags);
                tmp.delete(tag)
                setTags([...tmp])
              } else {
                setTags([...new Set([...tags, tag])])
              }
            }}
            group={group}
          />
        </Grid>
      </Grid>
    </Container>
  )
}