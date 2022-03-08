import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Link, Typography, Box } from '@mui/material';
import { useState } from 'react';

// ----------------------------------------------------------------------

const CATEGORIES = [
  { name: 'Branding' },
  { name: 'Community' },
  { name: 'Tutorials' },
  { name: 'Business' },
  { name: 'Management' },
];

// ----------------------------------------------------------------------

BlogSidebarCategories.propTypes = {
  onSetCate: PropTypes.func
};

export default function BlogSidebarCategories({ onSetCate }) {
  const [activeCate, setActiveCate] = useState('all')

  return (
    <Stack spacing={1}>
      <Typography variant="h4" gutterBottom>
        Categories
      </Typography>
      {CATEGORIES.map((category) => (
        <CategoryItem emphasize={activeCate === category.name} key={category.name} category={category} onClick={(cate) => {
          if (cate === activeCate) {
            setActiveCate('all'); onSetCate('all');
          } else {
            setActiveCate(cate); onSetCate(cate);
          }
        }} />
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

CategoryItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  }),
  onClick: PropTypes.func,
  emphasize: PropTypes.bool
};

function CategoryItem({ category, onClick, emphasize }) {
  const { name, path } = category;

  return (
    <Stack key={name} direction="row" alignItems="center">
      <Box sx={{ width: 6, height: 6, mr: 2, bgcolor: 'primary.main', borderRadius: '50%' }} />
      {/* <NextLink href={path || ''} passHref> */}
      <Link variant={emphasize ? "body1" : "body2"} sx={{ textDecoration: emphasize ? "underline" : "" }} color="inherit" onClick={() => onClick(name)}>
        {name}
      </Link>
      {/* </NextLink> */}
    </Stack>
  );
}
