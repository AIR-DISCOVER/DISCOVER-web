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
import { Iconify, Image } from 'src/components';
import * as DISCOVER from './discover-config';
import * as HCI from './hci-config';
import * as SUN from './sun-config';
import * as ROBOTICS from './robotics-config';
import { Typography } from '@mui/material';

const Block = ({ title, content }) =>
  <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
    <Typography variant="h5" sx={{ mt: 3, mb: 1, color: 'black' }}>
      {title}
    </Typography>
    {content}
  </div>

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


export const NEWS_2022_PATH = '_data/news_2022.md'
export const NEWS_2021_PATH = '_data/news_2021.md'
export const PROGRAMS_POSTDOC_PATH = '_data/programs/postdoc.md'
export const PROGRAMS_POSTGRADUATE_PATH = '_data/programs/postgraduate.md'
export const AREA_MANUFACTURING_PATH = '_data/area/manufacturing.md'
export const AREA_TRANSPORTATION_PATH = '_data/area/transportation.md'

export const DISCOVER_INTRO = (
  <p>
    <strong>DISCOVER</strong> (<strong>DIS</strong>tributed <strong>CO</strong>llaborative <strong>V</strong>ision and <strong>E</strong>xponential <strong>R</strong>obotics) Lab is a key technical team at Institute for AI Industry Research (AIR), Tsinghua University, aiming to establish an exponential robotic platform which enables robots to reproduce themselves. To achieve the goal, scientists and technologists from DISCOVER Lab are developing top-tier computer vision, computer graphics, and robotics expertise and are working on cutting-edge technological breakthroughs to address significant practical challenges.
  </p>
);

export const DISCOVER_RESEARCH_AREA = (
  <p>
    <BoxStyled variant='span' style={{ fontWeight: 'bolder', fontSize: 25 }}>Research</BoxStyled> DISCOVER Lab conducts advanced research in a wide range of areas, including cyber-physical system modeling, human-in-the-loop intelligent systems, collaborative multi-modal perception, and multi-agent intelligence, to accelerate the fourth industrial revolution in <NextLink href={Routes.area.transportation} passHref><StyledDiv component={'span'}>transportation</StyledDiv></NextLink> and <NextLink href={Routes.area.manufacturing} passHref><StyledDiv component={'span'}>manufacturing</StyledDiv></NextLink> industries. In DISCOVER Lab, several research groups are established to develop related expertise.
  </p>
);

export const DISCOVER_PROGRAMS_OVERVIEW = (
  <p>
    <BoxStyled variant='span' style={{ fontWeight: 'bolder', fontSize: 25 }}>Programs</BoxStyled>
    <span>
      DISCOVER Lab offers diverse academic programs for different applicants. Professor, scientist, postdoc fellow, researcher, and engineer positions are open to develop your academic career.
      Meanwhile, students (and perspective students) from Tsinghua University are welcome to follow our postgraduate and undergraduate programs. Moreover, non-Tsinghua students can also join our Lab via visiting programs.
    </span>
  </p>
);

export const DISCOVER_PAGELINKS = [
  {
    order: '1',
    subheader: 'About Us',
    items: [
      { title: 'To Understand Our Core Values', path: Routes.aboutus_core_value },
      { title: 'To Meet Our Industrial Partners', path: Routes.aboutus_partner },
      { title: 'To Find Our Postdoc Fellow Openings', path: Routes.programs.career + '#postdoc' },
      { title: 'To Find Our Researcher Openings', path: Routes.programs.career + '#researcher' },
      { title: 'To Find Our Internship Opportunities', path: Routes.programs.visiting + '#program' },
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
  bgURL: "",
  title: "Summer Camp Program",
  intro: <span>
    This event will be held annually with different research projects.<br />
    <br />
    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      At May 1st, 2022, DISCOVER Lab held the 2nd summer camp. Students participating in this camp were provided with the following 3 research fields and 13 projects, of which they could pick out one field and one project based on their own direction of interests and skills：
      <Block title="Robotics" content={<>
        <li>Multi-robot collaborative automated testing system</li>
        <li>UAV SLAM based on high precision map</li>
        <li>Object throwing-catch system for mobile robots</li>
        <li>Motion control system for footed robots</li></>}
      />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Computer Vision" content={
        <>
          <li>Adversarial trajectory generation based on pedestrian intention</li>
          <li>Online structured indoor 3D reconstruction and understanding</li>
          <li>Weakly supervised object affordance learning</li>
          <li>Self-supervised superpixel and edge extraction based on attention</li>
        </>}
      />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Human-Computer Interaction" content={<>
        <li>Intelligent navigation robots for blind people</li>
        <li>AI music therapy system and intelligent musical instruments</li>
        <li>Intelligent clothing and proactive health management system</li>
        <li>Intelligent building block kit for children's emotional education</li>
        <li>Human-AI collaboration system for autonomous driving</li>
      </>}
      />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Location" content={<>
        Tsinghua Tuspark, Beijing, China
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Duration" content={<>
        May - Sept, annually
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Application" content={<>
        April 1st  - May 1st, annually
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Requirements" content={<>
        <li>Graduate/undergraduate/ PhD students enrolled in well known institutions;</li>
        <li>Passion for research, excellent basic skills, outstanding innovation and practical ability;</li>
        <li>At least 2 months of on site work time guaranteed during the summer camp;</li>
        <li>Research experience in robotics, computer vision, and human-computer interaction are preferred;</li>
        <li>Majors in Electrical Engineering, Automation, Computer Science/Engineering, Human-Computer Interaction, Design, Psychology or other related subjects</li>
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="For summer camp, contact us" content={<>
        Please send your resume or portfolio to chumengdi@air.tsinghua.edu.cn, and name by [summer camp]-[reseach field]-[research direction ].
      </>} />
    </div>
  </span>,
  beforeEntry: undefined,
  entry: undefined
}

export const WINTER_CAMP = {
  // bgURL: '/images/winter_camp.gif',
  title: "Winter Camp Program",
  intro: <span>
    This event will be held annually with different research subjects.<br />
    <br />
    At the beginning of 2022, DISCOVER Lab held the 1st winter camp, 2021-2022 Robotics Training Camp, which focused on engineering skills training. Students participating in this camp have joined one of the following 9 programs based on their interests and skills: <br />
    <br />
    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <li>Robot group planning and control.</li>
      <li>Robot for Robomaster Sim2real challenge.<br /></li>
      <li>Indoor 3D reconstruction.<br /></li>
      <li>Weakly supervised annotation for environmental understanding.<br /></li>
      <li>Wheel-legged robot.<br /></li>
      <li>Indoor autonomous navigation for wheel robots.<br /></li>
      <li>Robotic arm development with reinforcement learning.<br /></li>
      <li>Multimodal perception and generation.<br /></li>
      <li>Multimodal affective computing.<br /></li>
    </div>
    {/* <Image
      alt="teams"
      sx={{ borderRadius: 2, my: 2 }}
      src={"/images/winter_camp.gif"}
    /> */}
    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Location" content={<>
        Tsinghua Tuspark, Beijing, China
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Duration" content={<>
        Jan - March, annually
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Application" content={<>
        Dec 1st  - Jan 1st, annually
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Requirements" content={<>
        <li>graduate/undergraduate/PhD students enrolled in well known institutions;</li>
        <li>passion for research, excellent in basic skills, outstanding innovation and practical ability;</li>
        <li>At least 1 month of on site work time guaranteed during the winter camp;</li>
        <li>Research experience in robotics, computer vision, and human-computer interaction are preferred;</li>
        <li>Majors in Electrical Engineering, Automation, Computer Science/Engineering, Human-Computer Interaction, Design, Psychology and or other related subjects.</li>
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="For winter camp, contact us" content={<>
        Please send your resume or portfolio to guohaole@air.tsinghua.edu.cn, and name by [summer camp]-[reseach field]-[research direction ].
      </>} />
    </div>
  </span>,
  imageURL: "/images/winter_camp.gif",
  beforeEntry: undefined,
  entry: undefined,
}

export const VISITING_PROGRAM = {
  title: "Internship Program",
  intro: <span>
    Interns at DISCOVER Lab should conduct research in cutting-edge algorithms including federated learning, privacy computing, AI security, and data integration. He/she should also cooperate with leading companies in the industry to apply these technologies to the industry and deliver quality research output.<br />
    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Location" content={<>
        Tsinghua Tuspark, Beijing, China
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Basic requirements" content={<>
        <li>Candidates should be currently enrolled in a bachelor's / master's / doctor's program in computer science, electronics, automation, robotics, mathematics, material chemistry, or other related majors.</li>
        <li>Candidates should have strong self-motivation and teamwork abilities.</li>
        <li>The internship should last at least 6 months, 3 days per week.</li>
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Skill requirements (You should meet at least one of them)" content={<>
        <li>Have interests or research experiences in AI and reinforcement learning. Be familiar with mainstream deep learning frameworks and be able to read related literature and implement algorithms independently.</li>
        <li>Be familiar with and have worked on projects about robotics, Raspberry Pi, Arduino, embedded systems, mechatronics design and 3D printing.</li>
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Salary and benefits" content={<>
        <li>A first-class research platform and innovation atmosphere</li>
        <li>A competitive salary</li>
        <li>An internship certificate</li>
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="For Intern program， contact us" content={<>
        Please send your resume to guohaole@air.tsinghua.edu.cn, and name the subject by [Your Name]-[School]-[Year]-[Major]-[When can you begin internship].
      </>} />
    </div>
  </span>,
  beforeEntry: undefined,
  entry: undefined,
}

export const STAR_PROGRAM = {
  title: "STAR Program",
  intro: <span>
    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Research Field" content={<>
        Computer Vision, Deep Learning, Reinforcement Learning, Adversarial Learning, Robotics, Computer Graphics, Natural Language Processing, Data Mining, Personalized Recommendation, Causal Inference, Graph Neural Networks, Intelligent Computing Systems, Edge Computing, Mobile Computing, AIOT, Security and Data Protection, Federated Learning, Distributed Machine Learning and Operations Optimization, Bioinformatics, Medicinal Chemistry, Interaction Design, Additive Manufacturing.
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Requirements" content={<>
        <li>Working in or will start PhD/master's degree program in a well-known domestic or international institution.</li>
        <li>Passion for scientific research, excellent basic quality, outstanding innovation and practical ability.</li>
        <li>Full-time internship for ≥ 6 months (some directions require ≥ 8 months).</li>
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Benefits" content={<>
        <li>Cooperate directly with top scientists in the field of artificial intelligence, share the high-quality scientific resources of Tsinghua University and partners, and output high-level academic results.</li>
        <li>Understand the needs of the industry and transform world-class scientific research results into real-life applications.</li>
        <li>Have the priority hiring opportunities for doctoral/postdoctoral/full-time positions.</li>
        <li>Enjoy High-quality resources and strong recommendations from industry giants (including but not limited to recommendation letters).</li>
        <li>Share First-hand information about cutting-edge lectures, forums and competition activities.</li>
        <li>Co-work with other talented students.</li>
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="Salary and benefits" content={<>
        <li>A first-class research platform and innovation atmosphere</li>
        <li>A competitive salary</li>
        <li>An internship certificate</li>
      </>} />
    </div>

    <div style={{ pageBreakInside: 'avoid', breakInside: 'avoid-column' }}>
      <Block title="For S.T.A.R program, contact us:" content={<>
        Please send your resume to airhr@air.tsinghua.edu.cn,and name by [Your Name]-[School]-[Year]-[Major]-[STAR program]-[Research Field].
      </>} />
    </div>
  </span>,
  beforeEntry: undefined,
  entry: undefined,
}


export const ROBOMASTER_PROGRAM = {
  title: "Robotics Course: Win the Competition! ",
  intro: "\"Introduction to Intelligent Systems: Design and Practice\" is an undergraduate course set up by DISCOVER Lab and iCenter. In this course, robotic concepts and toolchains are introduced for a robot competition. We highly encourage experienced robotic enthusiasts to participate in RoboMaster University Sim2Real Challenge (RMUS), which is an international robotic competition held at ICRA and is organized by DISCOVER Lab and DJI.",
  imageURL: "/images/lesson.jpg",
  beforeEntry: "Learn more: ",
  entry: [
    {
      id: 1,
      description: 'Course Homepage',
      href: "https://air.tsinghua.edu.cn/robomaster/course_ug.html",
    },
    {
      id: 2,
      description: 'RMUS 2022',
      href: "https://air.tsinghua.edu.cn/robomaster/sim2real_icra22.html",
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
  intro: <div>
    DISCOVER Club is a student community which aims at hardcore robotic competitions, burnishing solid skills in computer vision, automatic control, mechanical design and other astonishing activities. Specific multi-robot systems are built to accomplish such missions. Some existing technical problems in the robotic competition introduced above can be defined and possibly solved in form of
    <span style={{color: 'black', fontWeight: 'bold'}}> Student Research Training (SRT) </span>
     and 
    <span style={{color: 'black', fontWeight: 'bold'}}> Final Year Project (FYP)</span>.
  </div>,
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

export const CAREER_PROFESSOR = {
  // bgURL: '/images/winter_camp.gif',
  title: "Professors / Associate Professors / Assistant Professors",
  intro: <span>
    <Block title="Job Responsibilities" content={<>
      The DISCOVER Lab invites applications for the position of Professor/Associate Professor/Assistant Professor of the Institute for AI Industry Research (AIR), Tsinghua University.
      <br />
      <br />
      DISCOVER (DIStributed COllaborative Vision and Exponential Robotics) Lab is a key technical team at Institute for AI Industry Research (AIR), Tsinghua University, aiming to establish an exponential robotic platform which enables robots to reproduce themselves. To achieve the goal, scientists and technologists from DISCOVER Lab are developing top-tier computer vision, computer graphics, and robotics expertise and are working on cutting-edge technological breakthroughs to address significant practical challenges.
      <br />
      <br />
      We are continuously seeking individuals with strong expertise in machine learning/autonomous driving/robotics. Candidates admitted to our lab will conduct research in cutting-edge fields such as autonomous driving, customer-directed manufacturing and laboratory automation using machine learning, robotics, high-performance computing and other technologies. As an important part of our team, candidates are encouraged to output high-level scientific research results, expand the research influence in related fields in both academia and industry, and promote related industrial applications.
    </>} />
    <Block title="Qualifications and Requirements" content={<>
      <li>Candidates must have earned a PhD degree in computer science, electronic engineering, robotics, automation, transportation, applied mathematics, pattern recognition, artificial intelligence or other related majors;</li>
      <li>Candidates should have internationally recognized academic achievements or rich R&D experiences in the industry with outstanding achievements in the industrialization of scientific research results;</li>
      <li>Experience as R&D leaders or senior management positions in well-known domestic or foreign companies is preferred;</li>
      <li>Candidates should be passionate about scientific research and teaching. Meanwhile, he or she must have a high level of integrity and share Tsinghua's values.</li>
    </>} />
    <Block title="Salary and Benefits" content={<>
      At DISCOVER Lab we will provide you with:
      <li>World-class research environment, internationally competitive package, and welfare benefits as a Tsinghua's employee;</li>
      <li>Open and collaborative academic atmosphere together with sufficient start-up funds;</li>
      <li>Research platform at Tsinghua with top-tier industrial resources which offer abundant data and scenarios for technological innovation;</li>
      <li>Mature pipeline for technology industrialization and incubation.</li>
    </>} />
    <Block title="Contact Us" content={<>
      Please send your resume to zhouguyue@air.tsinghua.edu.cn.
    </>} />
  </span>,
  imageURL: "/images/winter_camp.gif",
  beforeEntry: undefined,
  entry: undefined,
}

export const CAREER_POSTDOC = {
  // bgURL: '/images/winter_camp.gif',
  title: "Postdoc Fellow",
  intro: <span>

    <Block title="Job Responsibilities" content={<>
      Candidates should carry out research that enables autonomous driving, V2X, and AI Transportation. He or she should produce influential research outcomes and promote industrial application of the following research areas:
      <li>Machine learning/deep learning/reinforced learning algorithms, including statistical machine learning models, efficient neural networks, representation learning, self-supervised learning, graph representation learning, adversarial learning, multimodal and large-scale pre-training;</li>
      <li>Computer vision, including image classification, facial recognition, object detection, image segmentation, image recognition, image/video understanding, and model compression;</li>
      <li>Machine learning systems, including distributed optimization methods for machine learning, federated learning, and efficient neural networks;</li>
      <li>Intelligent information retrieval, such as ranking, neural information retrieval, recommendation systems, user mining and modeling;</li>
      <li>Data mining, including data crowdsourcing, social network mining, large image modeling and analysis, and stream data computing;</li>
      <li>Decision-making optimization, including reinforcement learning, multi-agent learning, and large-scale optimization.</li>
    </>} />
    <Block title="Qualifications and Requirements" content={<>
      <li>Candidates should hold a doctoral degree (within three years of graduation and under 35 years old, for post-doc positions) in computer science, electronic engineering, automation, transportation, applied mathematics, pattern recognition, artificial intelligence or other related majors;</li>
      <li>Candidates should have internationally recognized academic achievements or rich R&D experiences in the industry.</li>
      <li>Candidates should have extraordinary abilities in identifying and solving key research problems, with strong communication and teamwork skills.</li>
    </>} />
    <Block title="Salary and Benefits" content={<>
      At DISCOVER Lab we will provide you with:
      <li>World-class research environment, internationally competitive package, and welfare benefits as a Tsinghua's employee;</li>
      <li>Open and collaborative academic atmosphere together with sufficient start-up funds;</li>
      <li>Research platform at Tsinghua with top-tier industrial resources which offer abundant data and scenarios for technological innovation;</li>
      <li>Mature pipeline for technology industrialization and incubation.</li>
    </>} />
    <Block title="Contact Us" content={<>
      Please send your resume to zhouguyue@air.tsinghua.edu.cn.
    </>} />
  </span>,
  imageURL: "/images/winter_camp.gif",
  beforeEntry: undefined,
  entry: undefined,
}
export const CAREER_RESEARCHER = {
  // bgURL: '/images/winter_camp.gif',
  title: "Researcher",
  intro: <span>
    <Block title="Job Responsibilities" content={<>
      Candidates should carry out research that enables AI Transportation and develop industrial applications in the following research areas:
      <li>Machine learning/deep learning/reinforced learning algorithms, including statistical machine learning models, efficient neural networks, representation learning, self-supervised learning, graph representation learning, adversarial learning, multimodal and large-scale pre-training;</li>
      <li>Decision-making optimization in autonomous driving, V2X and smart transportation systems, using reinforcement learning, multi-agent learning, and large-scale optimization;</li>
      <li>Computer vision, including image classification and image segmentation;</li>
      <li>Machine learning systems;</li>
      <li>Intelligent information retrieval, such as ranking, neural information retrieval, recommendation systems, user mining and modeling.</li>
    </>} />
    <Block title="Salary and Benefits" content={<>
      At DISCOVER Lab we will provide you with:
      <li>Open and collaborative academic atmosphere, and a chance to work with great minds;</li>
      <li>Research platform at Tsinghua with abundant data and top-tier industrial resources;</li>
      <li>Mature pipeline for technology industrialization and incubation;</li>
      <li>Good work-life balance, and comfortable work environment.</li>
    </>} />
    <Block title="Qualifications and Requirements" content={<>
      <li>Candidates should be graduates from well-known universities with a degree in computer science, electronic engineering, automation, transportation, applied mathematics, pattern recognition, artificial intelligence or other related majors;</li>
      <li>Candidates should have at least three years of working experience at renowned research institutes or leading companies in related fields;</li>
      <li>Candidates should have academic or industrial experience in autonomous driving, V2X, or smart transportation system building;</li>
      <li>Candidates should be proficient in NLP/ML/DL models and algorithms (e.g. GBDT/MLP/CNN/RNN/LSTM/Transformer), and be familiar with reinforcement learning algorithms;</li>
      <li>Candidates should be skilled in one or more mainstream deep learning frameworks (Caffe, TensorFlow, PyTorch, PaddlePaddle), and be familiar with their architecture and implementation mechanisms;</li>
      <li>Candidates should have extraordinary abilities in identifying and solving key research problems, with strong communication and teamwork skills.</li>
    </>} />
    <Block title="Contact Us" content={<>
      Please send your resume to zhouguyue@air.tsinghua.edu.cn.
    </>} />
  </span>,
  imageURL: "/images/winter_camp.gif",
  beforeEntry: undefined,
  entry: undefined,
}
