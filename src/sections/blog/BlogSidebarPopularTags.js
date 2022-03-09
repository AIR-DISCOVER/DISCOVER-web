// next
// @mui
import { Typography, Chip, Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
// ----------------------------------------------------------------------

import { TAGS } from '../../../_data/config';
// ----------------------------------------------------------------------

BlogSidebarPopularTags.propTypes = {
  tags: PropTypes.array,
  onModTag: PropTypes.func,
  group: PropTypes.string,
};

export default function BlogSidebarPopularTags({ tags, onModTag, group }) {
  const [selected, setSelected] = useState(TAGS[group] ? (Array.from(TAGS[group]).map((i) => tags ? tags.includes(i) : false)) : [])

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Popular Tags
      </Typography>
      {TAGS[group]?.map((tag, idx) => (
        <Chip key={tag} label={tag} sx={{ m: 0.5 }} variant={selected[idx] ? "outlined" : "filled"} onClick={() => {
          onModTag(tag);
          setSelected(selected.map((i, _idx) => (idx === _idx ? !i : i)))
        }} />
      ))}
    </Box>
  );
}
