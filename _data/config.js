import NextLink from 'next/link';
import Routes from 'src/routes';
import { styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { ListSubheader } from '@mui/material';
import locationIcon from '@iconify/icons-carbon/location';
import mobileIcon from '@iconify/icons-carbon/mobile';
import emailIcon from '@iconify/icons-carbon/email';
import timeIcon from '@iconify/icons-carbon/time';
import launchIcon from '@iconify/icons-carbon/launch';
import { Iconify } from 'src/components';
import * as DISCOVER from './discover-config';
import * as HCI from './hci-config';
import * as SUN from './sun-config';
import * as ROBOTICS from './robotics-config';

const StyledDiv = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
  ...theme.typography.body3,
  padding: 0,
  width: 'auto',
  cursor: 'pointer',
  fontWeight: 'bold',
  textDecoration: 'underline',
  textDecorationThickness: '0.1rem',
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary,
  },
  ...(active && {
    ...theme.typography.subtitle3,
    color: theme.palette.text.primary,
  }),
}));

const BoxStyled = styled((props) => (
  // <span {...props}/>
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.h5,
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
}));


export const NEWS_MARKDOWN_PATH = '_data/news.md'
export const PROGRAMS_POSTDOC_PATH = '_data/programs/postdoc.md'
export const PROGRAMS_POSTGRADUATE_PATH = '_data/programs/postgraduate.md'
export const AREA_MANUFACTURING_PATH = '_data/area/manufacturing.md'
export const AREA_TRANSPORTATION_PATH = '_data/area/transportation.md'

export const DISCOVER_INTRO = (
  <p>
    <strong>DISCOVER</strong> (<strong>DIS</strong>tributed <strong>CO</strong>llaborative <strong>V</strong>ision and <strong>E</strong>xponential <strong>R</strong>obotics) Lab is a key technical team at Institute for AI Industry Research (AIR), Tsinghua University, aiming to establish an exponential robotic platform which enables robots to reproduce themselves. To achieve the goal, scientists and technologists from DISCOVER Lab are developing top-tier computer vision, computer graphics, and robotics expertise and are working on the cutting-edge technological breakthroughs to address significant practical challenges.
  </p>
);

export const DISCOVER_RESEARCH_AREA = (
  <p>
    <BoxStyled variant='span' style={{ fontWeight: 'bolder', fontSize: 25 }}>Research</BoxStyled> DISCOVER Lab conducts advanced research in a wide range of areas, including cyber physical system modeling, human-in-the-loop intelligent systems, collaborative multi-modal perception, and multi-agent intelligence, to accelerate the fourth industrial revolution in <NextLink href={Routes.area.transportation} passHref><StyledDiv component={'span'}>transportation</StyledDiv></NextLink> and <NextLink href={Routes.area.manufacturing} passHref><StyledDiv component={'span'}>manufacturing</StyledDiv></NextLink> industries. In DISCOVER Lab, several research groups are established to develop related expertise.
  </p>
);

export const DISCOVER_PROGRAMS_OVERVIEW = (
  <p>
    <BoxStyled variant='span' style={{ fontWeight: 'bolder', fontSize: 25 }}>Programs</BoxStyled>
    <span>
      DISCOVER Lab offers diverse academic programs for different applicants. Professor, scientist, post-doctoral, researcher, and engineer positions are open to develop your academic career.
      Meanwhile, students (and perspective students) from Tsinghua University are welcome to follow our postgraduate and undergraduate programs. Moreover, non-Tsinghua students can also join our Lab via visiting programs.
    </span>
  </p>
);

export const DISCOVER_PAGELINKS = [
  {
    order: '1',
    subheader: 'About Us',
    items: [
      { title: 'To understand our core value', path: Routes.aboutus_core_value },
      { title: 'To meet our industrial partners', path: Routes.aboutus_partner },
      { title: 'To find our RA/PostDoc/PhD openings', path: Routes.aboutus_join_us },
      { title: 'To find our internship opportunities', path: Routes.aboutus_join_us },
    ],
  },
  {
    order: '2',
    subheader: 'Contact Us',
    items: [
      {
        title: (
          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
            <Iconify icon={mobileIcon} sx={{ mr: 1, minWidth: '1rem' }} />
            <span>
              {DISCOVER.PHONE_NUMBER}
            </span>
          </div>), path: undefined
      },
      {
        title: (
          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
            <Iconify icon={emailIcon} sx={{ mr: 1, minWidth: '1rem' }} />
            <span>
              {DISCOVER.EMAIL}
            </span>
          </div>), path: undefined
      },
      {
        title: (
          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
            <Iconify icon={locationIcon} sx={{ mr: 1, mt: '0.35rem', minWidth: '1rem' }} />
            <span>
              {DISCOVER.ADDRESS}
            </span>
          </div>), path: undefined
      },
    ],
  },
]

export const GROUP_INTRO = {
  hci: HCI.INTRO,
  mechanic: ROBOTICS.INTRO,
  sun: SUN.INTRO,
}

// ==============================================================================

export const SUMMER_CAMP = {
  title: "Summer camp title",
  intro: "Summer camp intro",
  imageURL: "https://zone-assets-api.vercel.app/assets/illustrations/illustration_teams.svg",
  beforeEntry: "Sign up: ",
  entry: [
    {
      id: 1,
      description: 'summer 2021',
      href: Routes.comingsoon,
    },
    {
      id: 2,
      description: 'summer 2022',
      href: Routes.comingsoon,
    },
    {
      id: 3,
      description: 'summer 2023',
      href: Routes.comingsoon,
    },
  ],
}

export const WINTER_CAMP = {
  reverse: true,
  title: "Winter camp title",
  intro: "Winter camp intro",
  imageURL: "https://zone-assets-api.vercel.app/assets/illustrations/illustration_teams.svg",
  beforeEntry: "Sign up: ",
  entry: [
    {
      id: 1,
      description: 'winter 2021',
      href: Routes.comingsoon,
    },
    {
      id: 2,
      description: 'winter 2022',
      href: Routes.comingsoon,
    },
    {
      id: 3,
      description: 'winter 2023',
      href: Routes.comingsoon,
    },
  ],
}

export const VISITING_PROGRAM = {
  title: "Visiting program title",
  intro: "Visiting program intro",
  imageURL: "https://zone-assets-api.vercel.app/assets/illustrations/illustration_teams.svg",
  beforeEntry: "Sign up: ",
  entry: [
    {
      id: 1,
      description: 'visiting program',
      href: Routes.comingsoon,
    },
  ],
}

export const ROBOMASTER_PROGRAM = {
  title: "Make your own robots to win the competition!",
  intro: "\"Introduction to Intelligent Systems: Design and Practice\" is an undergraduate course set up by DISCOVER Lab and iCenter. In this course, robotic concepts and toolchains are introduced for a robot competition. Meanwhile, we encourage experienced robotic enthusiasts to participate in RoboMaster University Sim2Real Challenge (RMUS), which is an international robotic competition hold at ICRA organized by DISCOVER Lab and DJI.",
  imageURL: "/images/lesson.jpg",
  beforeEntry: "Learn more: ",
  entry: [
    {
      id: 1,
      description: 'Course Homepage',
      href: Routes.comingsoon,
    },
    {
      id: 2,
      description: 'RMUS 2022',
      href: Routes.comingsoon,
    },
  ],
}

export const INTELLIGENT_SYSTEM_PROGRAM = {
  title: "robomaster program title",
  intro: "robomaster program intro",
  imageURL: "https://zone-assets-api.vercel.app/assets/illustrations/illustration_teams.svg",
  beforeEntry: "Sign up: ",
  entry: [
    {
      id: 1,
      description: 'robomaster program',
      href: Routes.comingsoon,
    },
  ],
  reverse: true
}

export const SRT_PROGRAM = {
  reverse: true,
  title: "Enrich your project experience",
  intro: "DISCOVER Club is a student community to fight for hardcore robotic competitions, burnishing solid skills of computer vision, automatic control, mechnical design and others. Specific multi-robot systems are built to accomplish the pre-defined mission. Some technical problems for competitions can be defined in form of Student Research Training (SRT) and Final Year Project (FYP).",
  imageURL: "/images/club.jpg",
  beforeEntry: "Learn more: ",
  entry: [
    {
      id: 1,
      description: 'DISCOVER Club',
      href: Routes.comingsoon,
    },
  ],
}

export const FINAL_YEAR_PROGRAM = {
  title: "final year program title",
  intro: "final year program intro",
  imageURL: "https://zone-assets-api.vercel.app/assets/illustrations/illustration_teams.svg",
  beforeEntry: "Sign up: ",
  entry: [
    {
      id: 1,
      description: 'final year program',
      href: Routes.comingsoon,
    },
  ],
  reverse: true
}