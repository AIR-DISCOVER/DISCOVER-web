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

export default function HomePage() {
  const controlRef = useRef();
  // const [tab, setTab] = useState("Home")

  const dict = {
    'Home': 'News',
    'News': 'Research',
    'Research': 'People',
    'People': 'Join Us',
    'Join Us': 'About',
    'About': 'Home'

  }
  const onClick = () => {
    // console.log(tab)
    // let next = dict[tab]
    // setTab(next)
    // controlRef.current && controlRef.current.setTrig(tab, next)
    console.log('test')
    console.log(controlRef)
    controlRef.current && controlRef.current.reset()
  }
  return (
    <Page title="Home">
      {/* <Background cref={controlRef} /> */}

      <HomeAdvertisement onClick={() => { }} pack={{ overline: 'A simple overline description', main: 'DISCOVER.', button: 'Explore' }} />

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
  return <Layout transparentHeader background='white'>{page}</Layout>;
};
