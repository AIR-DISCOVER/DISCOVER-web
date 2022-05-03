// _data
// layouts
import Layout from '../src/layouts';
// components
import { Page } from '../src/components';
// sections
import {
  Background,
  HomeAdvertisement,
} from '../src/sections/home';
import { useRef, useState } from 'react';
import { TeamMarketingAbout } from '../src/sections/team';
import { MECHANIC_MEMBERS  } from '../_data/config';

// ----------------------------------------------------------------------

export default function HomePage() {

  return (
    <Page title="Home">
      <TeamMarketingAbout members={MECHANIC_MEMBERS} />

      {/* <HomeHero />

      <HomeNewStart />

      <HomeFlexibleComponents />

      <HomeFeatureHighlights />

      <HomeForDesigner />

      <PricingHome plans={_pricingHome} />

      <HomeCombination /> */}

    </Page>
  );
}

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout background='white'>{page}</Layout>;
};
