// routes
import Routes from '../../routes';
// _data

import {
  DISCOVER_RESEARCH_AREA, DISCOVER_PROGRAMS_OVERVIEW,
} from '_data/config';

import * as HCI from '../../../_data/hci-config'
import * as SUN from '../../../_data/sun-config'
import * as ROBOTICS from '../../../_data/robotics-config'
// ----------------------------------------------------------------------

export const ProgramsPageLinks = [
  {
    order: '1',
    subheader: 'Common',
    description: DISCOVER_PROGRAMS_OVERVIEW,
    items: [],
  },
  {
    order: '2',
    subheader: 'Undergraduate',
    cover: "/cover_imgs/undergraduate.jpg",
    items: [
      { title: 'Learn more ..', path: Routes.programs.undergraduate },
    ],
  },
  {
    order: '3',
    subheader: 'Postgraduate',
    cover: "/cover_imgs/postgraduate.jpg",
    items: [
      { title: 'Learn more ..', path: Routes.programs.postgraduate },
    ],
  },
  {
    order: '4',
    subheader: 'Career',
    cover: "/cover_imgs/career.jpg",
    items: [
      { title: 'Learn more ..', path: Routes.programs.career },
    ],
  },
  {
    order: '5',
    subheader: 'Visiting',
    cover: "/cover_imgs/visiting.jpg",
    items: [
      { title: 'Learn more ..', path: Routes.programs.visiting},
    ],
  },
]
export const ResearchPageLinks = [
  {
    order: '1',
    subheader: 'Robotics Group',
    cover: ROBOTICS.COVER_PIC,
    items: [
      { title: 'Learn more ..', path: Routes.mechanic.landing },
    ],
  },
  {
    order: '2',
    subheader: 'Vision Group',
    cover: SUN.COVER_PIC,
    items: [
      { title: 'Learn more ..', path: Routes.sun.landing },
      // { title: 'Research Projects', path: Routes.sun.posts },
    ],
  },
  {
    order: '3',
    subheader: 'HCI Group',
    cover: HCI.COVER_PIC,
    items: [
      { title: 'Learn more ..', path: Routes.hci.landing },
      // { title: 'Research Projects', path: Routes.hci.posts },
    ],
  },
  {
    order: '4',
    subheader: 'Common',
    description: DISCOVER_RESEARCH_AREA,
    items: [
    ],
  },
];

export const navConfig = [
  { title: 'Home', path: '/' },
  {
    title: 'Research',
    path: Routes.pages,
    children: [...ResearchPageLinks],
  },
  {
    title: 'Programs',
    path: Routes.comingsoon,
    children: [...ProgramsPageLinks],
    showNum: 4,
  },
  {
    title: 'People',
    path: Routes.people,
  },
  {
    title: 'News',
    path: Routes.news,
  },
  {
    title: 'About Us',
    path: Routes.aboutus,
  },
];
