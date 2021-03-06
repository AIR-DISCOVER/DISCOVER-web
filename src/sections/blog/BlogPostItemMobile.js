import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
// utils
import { fDate } from '../../utils/formatTime';
// components
import { Image, TextMaxLine } from '../../components';

// ----------------------------------------------------------------------

const DotStyle = styled('span')(({ theme }) => ({
  width: 4,
  height: 4,
  borderRadius: '50%',
  backgroundColor: 'currentColor',
  margin: theme.spacing(0, 1),
}));

// ----------------------------------------------------------------------

BlogPostItemMobile.propTypes = {
  onSiderbar: PropTypes.bool,
  path: PropTypes.string,
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      coverImg: PropTypes.string,
      createdAt: PropTypes.string,
      duration: PropTypes.string,
      title: PropTypes.string,
    }),
    slug: PropTypes.string,
  }),
};

export default function BlogPostItemMobile({ post, path, onSiderbar }) {
  const { slug, frontmatter } = post;
  const { title, duration, coverImg, createdAt } = frontmatter;

  const as = `${path}/${slug}`;
  const href = `${path}/[slug]`;

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={{ xs: 'flex-start', md: 'unset' }}
      sx={{ width: 1 }}
    >
      <Image
        alt={title}
        src={coverImg}
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
        }}
      />

      <Stack spacing={onSiderbar ? 0.5 : 1}>
        <NextLink passHref as={as} href={href}>
          <TextMaxLine variant={onSiderbar ? 'subtitle2' : 'h6'} asLink>
            {title}
          </TextMaxLine>
        </NextLink>

        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          sx={{ typography: 'caption', color: 'text.disabled' }}
        >
          {fDate(createdAt)}
          <DotStyle />
          {duration}
        </Stack>
      </Stack>
    </Stack>
  );
}
