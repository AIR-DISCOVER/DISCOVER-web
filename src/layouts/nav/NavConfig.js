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
    subheader: 'PostDoctoral Program',
    // cover: SUN_COVER_PIC,
    items: [
      { title: 'PostDoctoral Program', path: Routes.comingsoon },
    ],
  },
  {
    order: '3',
    subheader: 'PostGraduate Program',
    // cover: HCI_COVER_PIC,
    items: [
      { title: 'PostGraduate Program', path: Routes.comingsoon },
    ],
  },
  {
    order: '4',
    subheader: 'UnderGraduate Enrichment',
    // cover: MECHANIC_COVER_PIC,
    items: [
      { title: 'Introduction to Intelligent Systems', path: Routes.programs.undergraduate_is },
      { title: 'RoboMater University AI Challenge', path: Routes.programs.undergraduate_robomaster },
      { title: 'Student Research Training', path: Routes.programs.undergraduate_srt },
      { title: 'Final Year Project', path: Routes.programs.undergraduate_fyp },
    ],
  },
  {
    order: '5',
    subheader: 'Visiting Program',
    // cover: MECHANIC_COVER_PIC,
    items: [
      { title: 'Winter Camp Program', path: Routes.programs.visiting_winter_camp },
      { title: 'Summer Camp Program', path: Routes.programs.visiting_summer_camp },
      { title: 'Internship Program', path: Routes.programs.visiting_program },
    ],
  },
]
export const ResearchPageLinks = [
  {
    order: '1',
    subheader: 'Robotics Group',
    cover: ROBOTICS.COVER_PIC,
    items: [
      { title: 'A brief sentence about robotics group.', path: Routes.mechanic.landing },
    ],
  },
  {
    order: '2',
    subheader: 'Vision Group',
    cover: SUN.COVER_PIC,
    items: [
      { title: 'A brief sentence about the computer vision group.', path: Routes.sun.landing },
      // { title: 'Research Projects', path: Routes.sun.posts },
    ],
  },
  {
    order: '3',
    subheader: 'HCI Group',
    cover: HCI.COVER_PIC,
    items: [
      { title: 'A brief sentence about HCI group.', path: Routes.hci.landing },
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
