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
  //   {
  //     order: '4',
  //     subheader: 'Common',
  //     items: [
  //       { title: 'Item1', path: '' },
  //       { title: 'Item2', path: '' },
  //     ],
  //   },
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
    path: Routes.sun.landing,
    // children: [...PageLinks],
  },
  {
    title: 'About Us',
    path: Routes.pages,
    children: [...PageLinks],
  },
  // { title: 'Documentation', path: '/' },
];
