// routes
import Routes from '../../routes';
// _data

import { HCI_COVER_PIC, SUN_COVER_PIC, MECHANIC_COVER_PIC } from '_data/config';

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '1',
    subheader: 'AIR-SUN',
    cover: SUN_COVER_PIC,
    items: [
      { title: 'Introduction', path: Routes.sun.landing },
      { title: 'Research Projects', path: Routes.sun.posts },
    ],
  },
  {
    order: '2',
    subheader: 'HCI',
    cover: HCI_COVER_PIC,
    items: [
      { title: 'Introduction', path: Routes.hci.landing },
      { title: 'Research Projects', path: Routes.hci.posts },
    ],
  },
  {
    order: '3',
    subheader: 'Robotics',
    cover: MECHANIC_COVER_PIC,
    items: [
      { title: 'Introduction', path: Routes.mechanic.landing },
      { title: 'Research Projects', path: Routes.mechanic.posts },
    ],
  },
  {
    order: '4',
    subheader: 'Common',
    subheaderName: 'Research Area',
    items: [
      { title: 'Project 1', path: Routes.page404 },
      { title: 'Project 2', path: Routes.page404 },
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
    path: Routes.page404,
  },
  {
    title: 'News',
    path: Routes.page404,
  },
  {
    title: 'About Us',
    path: Routes.page404,
  },
];
