// @mui
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../src/config';
// _data
import { _testimonials, _members, _brandsColor } from '../_data/mock';
// layouts
import Layout from '../src/layouts';
// components
import { Page } from '../src/components';
// sections
import { TeamMarketingAbout } from '../src/sections/team';
import { NewsletterMarketing, NewsletterTravel } from '../src/sections/newsletter';
import { OurClientsElearning, OurClientsMarketingAbout } from '../src/sections/our-clients';
import { TestimonialsMarketing } from '../src/sections/testimonials';
import {
  MarketingFaqs,
  MarketingAbout,
  MarketingFreeSEO,
  MarketingAboutStory,
  MarketingAboutOurVision,
  MarketingAboutCoreValues,
} from '../src/sections/@marketing';
import Routes from '../src/routes';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: 0,
  [theme.breakpoints.up('md')]: {
    paddingTop: 0,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutUsPage() {
  return (
    <Page title="About Us">
      <RootStyle>
        <MarketingAbout />

        <MarketingAboutOurVision />
        <a id='core-value'></a>
        <MarketingAboutCoreValues />

        {/* <MarketingAboutStory />

<TeamMarketingAbout members={_members} />

<TestimonialsMarketing testimonials={_testimonials} /> */}

        <a id='partner'></a>
        <OurClientsElearning brands={_brandsColor} />

        {/* <MarketingFaqs /> */}

        {/* <MarketingFreeSEO /> */}

        {/* <NewsletterMarketing /> */}
        <a id='joinus'></a>
        <NewsletterTravel
          title={[
            "Postdoc Fellow",
            "Researcher",
            "Intern",
          ]}
          comment={[
            // "This is a great oppotunity. You will be about to maximize you value.",
            // "This is a great oppotunity. You will be about to maximize you value.",
            // "This is a great oppotunity. You will be about to maximize you value.",
            // "This is a great oppotunity. You will be about to maximize you value.",
          ]}
          link={[
            "Join us",
            "Join us",
            "Join us",
          ]}
          url={[
            Routes.programs.career + '#postdoc',
            Routes.programs.career + '#researcher',
            Routes.programs.visiting + '#program',
          ]}
        />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingAboutUsPage.getLayout = function getLayout(page) {
  return <Layout transparentHeader>{page}</Layout>;
};
