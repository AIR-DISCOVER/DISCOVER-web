import Layout from '../src/layouts';
import { Page } from '../src/components';
import { TeamMarketingAbout } from '../src/sections/team';
// import { HCI_MEMBERS, MECHANIC_MEMBERS, SUN_MEMBERS } from '../_data/config';
import * as SUN from '../_data/sun-config';
import * as HCI from '../_data/hci-config';
import * as ROBOTICS from '../_data/robotics-config';

// ----------------------------------------------------------------------

export default function HomePage() {

  return (
    <Page title="Home">
      <TeamMarketingAbout members={ROBOTICS.MEMBERS.concat(HCI.MEMBERS.concat(SUN.MEMBERS)).sort((a, b) => { return a.name > b.name })} />

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
