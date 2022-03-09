import PropTypes from 'prop-types';
// next
// @mui
import { Stack, Link, Typography, Box } from '@mui/material';
import { useState } from 'react';

// ----------------------------------------------------------------------

import { CATEGORIES } from '../../../_data/config';
// ----------------------------------------------------------------------

BlogSidebarCategories.propTypes = {
  onSetCate: PropTypes.func,
  group: PropTypes.string,
};

export default function BlogSidebarCategories({ onSetCate, group }) {
  const [activeCate, setActiveCate] = useState('all')

  return (
    <Stack spacing={1}>
      <Typography variant="h4" gutterBottom>
        Categories
      </Typography>
      {CATEGORIES[group]?.map((category) => (
        <CategoryItem emphasize={activeCate === category} key={category} category={category} onClick={(cate) => {
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
  category: PropTypes.string,
  onClick: PropTypes.func,
  emphasize: PropTypes.bool
};

function CategoryItem({ category, onClick, emphasize }) {
  const name = category;

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
