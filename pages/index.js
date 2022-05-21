// _data
// layouts
import Layout from '../src/layouts/specialLayout';
// components
import { Page } from '../src/components';
// sections
import {
  Background,
  HomeAdvertisement,
} from '../src/sections/home';
import { useRef, useState } from 'react';

// ----------------------------------------------------------------------

const HomePage = () => {
  const controlRef = useRef();
  const onClick = () => {
    controlRef.current && controlRef.current.reset()
  }
  return (
    <Page title="Home">
      {/* <Background cref={controlRef} /> */}

      <HomeAdvertisement onClick={onClick} pack={{ overline: 'Towards the unknown. Towards the future. ', main: 'DISCOVER', button: 'Explore' }} />

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

export default HomePage;

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout transparentHeader background='white'>{page}</Layout>;
};
