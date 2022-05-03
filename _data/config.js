import NextLink from 'next/link';
import Routes from 'src/routes';
import { styled, useTheme } from '@mui/material/styles';
import { Box } from '@react-three/drei';
import { ListSubheader } from '@mui/material';
import locationIcon from '@iconify/icons-carbon/location';
import mobileIcon from '@iconify/icons-carbon/mobile';
import emailIcon from '@iconify/icons-carbon/email';
import timeIcon from '@iconify/icons-carbon/time';
import launchIcon from '@iconify/icons-carbon/launch';
import { Iconify } from 'src/components';

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

export const HCI_MEMBERS = [
  { id: 1, name: "Gong, Jiangtao", role: "Researcher", photo: "" },
  { id: 2, name: "Gao, Jiasi", role: "Post Doc", photo: "" },
  { id: 3, name: "Chu, Mengdi", role: "Researcher", photo: "" },
  { id: 4, name: "Guo, Haole", role: "Researcher", photo: "" },
  { id: 5, name: "Zhang, Yan", role: "Researcher", photo: "" },
]
export const SUN_MEMBERS = [
  { id: 1, name: "Shi, Yongliang", role: "Post Doc", photo: "/member_photos/people_Shi_Yongliang.jpeg" },
  { id: 2, name: "Chen, Xiaoxue", role: "Phd Student", photo: "/member_photos/people_Chen_Xiaoxue.jpeg" },
  { id: 3, name: "Li, Pengfei", role: "Phd Student", photo: "/member_photos/people_Li_Pengfei.jpeg" },
  { id: 4, name: "Tian, Beiwen", role: "Researcher", photo: "/member_photos/people_Tian_Beiwen.jpg" },
]
export const MECHANIC_MEMBERS = [
  { id: 1, name: "Zhou, Guyue", role: "Group Leader", photo: "/member_photos/people_Zhou_Guyue.jpeg" },
  { id: 2, name: "Huang, Pengfei", role: "Researcher", photo: "/member_photos/people_Huang_Pengfei.jpg" },
  { id: 3, name: "Jiang, Chengyu", role: "Researcher", photo: "/member_photos/people_Jiang_Chengyu.jpg" },
  { id: 4, name: "Li, Chuxuan", role: "Researcher", photo: "/member_photos/people_Li_Chuxuan.jpg" },
  { id: 5, name: "Li, Jin", role: "Researcher", photo: "/member_photos/people_Li_Jin.jpg" },
  { id: 6, name: "Zhang, Xinliang", role: "Engineer", photo: "/member_photos/people_Zhang_Xinliang.png" },
]
export const CATEGORIES = {
  hci: [
    "Human-centred AI System",
    "Human-AI Collaboration Methodology",
    "Understanding/Modelling People"
  ],
  sun: ['Research'],
  mechanic: [],
}
export const TAGS = {
  hci: [
    "Accessibility Technology",
    "Affective Computing",
    "AI Generated Music",
    "AI-aided Design",
    "Autonomous Driving",
    "Augmented Reality",
    "Behavior Prediction",
    "Children",
    "Creativity",
    "Digital Twin",
    "Explainable AI",
    "Emotion Regulation",
    "E-Textiles",
    "Education",
    "Human-Robot Interaction",
    "Human-AI Collaboration",
    "Human-Environment Interaction",
    "Health",
    "Implicit Interaction",
    "IoT",
    "Music Therapy",
    "Manufacture",
    "Physiological Perception",
    "Proactive Interaction",
    "Robotics",
    "Safety AI",
    "Trustworthy AI",
    "Transportation",
    "Traffic Simulation",
    "Tangible User Interface",
    "Visually Impaired People",
    "Wearable sensor"
  ],
  sun: ["Transformer", "Semantic Segmentation", "Affordance", "Attribute", "3D Object Detection", "Layout Estimation"],
  mechanic: ['Manufacturing', 'Robotics', 'C2M', 'CAD', 'Collabrative Robot', 'Transportation', 'Autonomy', 'Locomotion', 'Sim2Real'],
}

export const HCI_COVER_PIC = "/cover_imgs/hci.png";
export const SUN_COVER_PIC = "/cover_imgs/air-sun.jpeg";
export const MECHANIC_COVER_PIC = "/cover_imgs/mechanic.jpg";

export const NEWS_MARKDOWN_PATH = '_data/news.md'

export const DISCOVER_INTRO = (
  <p>
    <strong>DISCOVER</strong> (<strong>DIS</strong>tributed <strong>CO</strong>llaborative <strong>V</strong>ision and <strong>E</strong>xponential <strong>R</strong>obotics) Lab is a key technical team at Institute for AI Industry Research (AIR), Tsinghua University, aiming to establish an exponential robotic platform which enables robots to reproduce themselves. To achieve the goal, scientists and technologists from DISCOVER Lab are developing top-tier computer vision, computer graphics, and robotics expertise and are working on the cutting-edge technological breakthroughs to address significant practical challenges.
  </p>
);

export const DISCOVER_RESEARCH_AREA = (
  <p>
    <BoxStyled variant='span' style={{ fontWeight: 'bolder', fontSize: 25 }}>DISCOVER Lab</BoxStyled> conducts advanced research in a wide range of areas, including cyber physical system modeling, human-in-the-loop intelligent systems, collaborative multi-modal perception, and multi-agent intelligence, to accelerate the fourth industrial revolution in <NextLink href={Routes.page404} passHref><StyledDiv>transportation</StyledDiv></NextLink> and <NextLink href={Routes.page404} passHref><StyledDiv>manufacturing</StyledDiv></NextLink> industries. In DISCOVER Lab, several research groups are established to develop related expertise.
  </p>
);

export const DISCOVER_PAGELINKS = [
  {
    order: '1',
    subheader: 'About Us',
    cover: SUN_COVER_PIC,
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
    cover: SUN_COVER_PIC,
    items: [
      {
        title: (
          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
            <Iconify icon={mobileIcon} sx={{ mr: 1, minWidth: '1rem' }} />
            <span>
              188 8888 8888
            </span>
          </div>), path: ''
      },
      {
        title: (
          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
            <Iconify icon={emailIcon} sx={{ mr: 1, minWidth: '1rem' }} />
            <span>
              zhouguyue@air.tsinghua.edu.cn
            </span>
          </div>), path: ''
      },
      {
        title: (
          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
            <Iconify icon={locationIcon} sx={{ mr: 1, mt: '0.35rem', minWidth: '1rem' }} />
            <span>
              Addr: 12 / F, block C, Qidi science and technology building, Tsinghua Science and Technology Park, Beijing
            </span>
          </div>), path: ''
      },
    ],
  },
]
export const DISCOVER_ABOUT_US_SIMPLE = [
  {
    order: '1',
    subheader: 'Contact Us',
    cover: SUN_COVER_PIC,
    items: [
      { title: 'TEL: 12345678', path: '' },
      { title: 'Mail: zhouguyue@air.tsinghua.edu.cn', path: '' },
      { title: 'Addr: Beijing', path: '' },
    ],
  },
];

export const ROBOTICS_INTRO = "The Robotics group has focused on research in autonomous systems that can move, manipulate, perceive, decide, and interact with human. We are interested in discovering how robot locomotion and execution can improve the system performance in embodied tasks for transportation, manufacturing, and consumer applications. Another domain of our research lies in investigating simulation-to-reality gaps and performing explainable domain transfer learning to shorten deployment duration. Looking forward to a human-robot symbiosis in the future, we therefore aim at developing hardware-aware, scalable algorithms for multi-robot and multi-human collaboration."

export const GROUP_INTRO = {
  hci: { overline: "overline", title: "Title", description: "Description", inverse: true },
  mechanic: { overline: "RESEARCH GROUP", title: "Robotics", description: ROBOTICS_INTRO, landing_img: "/member_photos/discover-icon.png" },
  sun: { overline: "AIR DISCOVER", title: "SUN Team", description: DISCOVER_INTRO },
}