import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Avatar } from '@mui/material';
// routes
import Routes from '../../routes';
// utils
import { fDate } from '../../utils/formatTime';
// components
import { Image, BgOverlay, TextMaxLine } from '../../components';
import { varHover, varTranHover } from '../../components/animate';

// ----------------------------------------------------------------------

const DotStyle = styled('span')(({ theme }) => ({
  width: 4,
  height: 4,
  borderRadius: '50%',
  backgroundColor: 'currentColor',
  margin: theme.spacing(0, 1),
}));

// ----------------------------------------------------------------------

BlogPostItem.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      author: PropTypes.shape({
        name: PropTypes.string,
        picture: PropTypes.string,
      }),
      coverImg: PropTypes.string,
      createdAt: PropTypes.string,
      duration: PropTypes.string,
      title: PropTypes.string,
    }),
    slug: PropTypes.string,
  }),
  route: PropTypes.object,
};

export default function BlogPostItem({ post, route }) {
  const { slug, frontmatter } = post;
  const { title, duration, coverImg, author, createdAt } = frontmatter;

  return (
    <Stack
      component={m.div}
      whileHover="hover"
      variants={varHover(1)}
      transition={varTranHover()}
      sx={{
        borderRadius: 0,
        overflow: 'hidden', position: 'relative',
        boxShadow: (theme) => theme.customShadows.z12,
      }}
    >
      <m.div variants={varHover(1.25)} transition={varTranHover()}>
        <Image src={coverImg} alt={title} ratio="4/3" />
      </m.div>

      <Stack
        justifyContent="space-between"
        sx={{
          p: 5,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" sx={{ opacity: 0.72, typography: 'caption' }}>
            {fDate(createdAt)}
            <DotStyle />
            {duration}
          </Stack>

          <NextLink
            passHref
            as={route.post(slug)}
            href={route.post('[slug]')}
          >
            <TextMaxLine variant="h4" asLink>
              {title}
            </TextMaxLine>
          </NextLink>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          <Avatar src={author.picture} sx={{ mr: 1 }} />
          {author.name}
        </Stack>
      </Stack>

      <BgOverlay direction="top" />
    </Stack>
  );
}
