// @mui
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// _data
import { _testimonials, _members, _brandsColor } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import { TeamMarketingAbout } from '../../src/sections/team';
import { NewsletterMarketing, NewsletterTravel } from '../../src/sections/newsletter';
import { OurClientsElearning, OurClientsMarketingAbout } from '../../src/sections/our-clients';
import {
  ProgramCard, ProgramCard2
} from '../../src/sections/@marketing';
import {
  STAR_PROGRAM,
  SUMMER_CAMP,
  SUMMER_CAMP_ENTRY, SUMMER_CAMP_INTRO, SUMMER_CAMP_PIC_URL, VISITING_PROGRAM, VISITING_PROGRAM_ENTRY, VISITING_PROGRAM_INTRO, VISITING_PROGRAM_PIC_URL, WINTER_CAMP, WINTER_CAMP_ENTRY, WINTER_CAMP_INTRO, WINTER_CAMP_PIC_URL
} from '../../_data/config';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutUsPage() {
  return (
    <Page title="Visiting Program">
      <RootStyle>
        <a id='summer-camp' />
        <ProgramCard2 program={SUMMER_CAMP} />
        <a id='winter-camp' />
        <ProgramCard2 program={WINTER_CAMP} />
        <a id='star' />
        <ProgramCard2 program={STAR_PROGRAM} />
        <a id='program' />
        <ProgramCard2 program={VISITING_PROGRAM} />
        
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingAboutUsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
