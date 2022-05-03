// routes
import Routes from '../../routes';
// _data

import { HCI_COVER_PIC, SUN_COVER_PIC, MECHANIC_COVER_PIC } from '_data/config';

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '1',
    subheader: 'Robotics Group',
    cover: MECHANIC_COVER_PIC,
    items: [
      { title: 'Introduction', path: Routes.mechanic.landing },
      { title: 'Research Projects', path: Routes.mechanic.posts },
    ],
  },
  {
    order: '2',
    subheader: 'Vision Group',
    cover: SUN_COVER_PIC,
    items: [
      { title: 'Introduction', path: Routes.sun.landing },
      { title: 'Research Projects', path: Routes.sun.posts },
    ],
  },
  {
    order: '3',
    subheader: 'HCI Group',
    cover: HCI_COVER_PIC,
    items: [
      { title: 'Introduction', path: Routes.hci.landing },
      { title: 'Research Projects', path: Routes.hci.posts },
    ],
  },
  {
    order: '4',
    subheader: 'Common',
    subheaderName: 'Research Area',
    items: [
    ],
  },
];

export const navConfig = [
  { title: 'Home', path: '/' },
  {
    title: 'Research',
    path: Routes.pages,
    children: [...PageLinks],
  },
  {
    title: 'People',
    path: Routes.people,
  },
  {
    title: 'News',
    path: Routes.comingsoon,
  },
  {
    title: 'Teaching',
    path: Routes.comingsoon,
  },
  {
    title: 'About Us',
    path: Routes.comingsoon,
  },
];
