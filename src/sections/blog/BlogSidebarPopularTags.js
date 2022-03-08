// next
import { useRouter } from 'next/router';
// @mui
import { Typography, Chip, Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useCallback, useState } from 'react';
// ----------------------------------------------------------------------

const TAGS = [
  { label: 'Marketing', path: '#' },
  { label: 'Development', path: '#' },
  { label: 'Banking', path: '#' },
  { label: 'HR & Recruting', path: '#' },
  { label: 'Design', path: '#' },
  { label: 'Management', path: '#' },
  { label: 'Business', path: '#' },
  { label: 'Community', path: '#' },
  { label: 'Tutorials', path: '#' },
];

// ----------------------------------------------------------------------

BlogSidebarPopularTags.propTypes = {
  tags: PropTypes.object,
  onModTag: PropTypes.func
};

export default function BlogSidebarPopularTags({ tags, onModTag }) {
  // const router = useRouter();
  const [selected, setSelected] = useState(Array.from(TAGS).map((i) => tags ? tags.includes(i) : false))

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Popular Tags
      </Typography>
      {TAGS.map((tag, idx) => (
        // <RenderChip tag={tag} idx={idx} />
        <Chip key={tag.label} label={tag.label} sx={{ m: 0.5 }} variant={selected[idx] ? "outlined" : "filled"} onClick={() => {
          onModTag(tag.label);
          setSelected(selected.map((i, _idx) => (idx === _idx ? !i : i)))
        }} />
      ))}

    </Box>
  );
}
