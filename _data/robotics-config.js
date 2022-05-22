import { Box } from '@mui/material';
// 

export const INTRO = {
    //overline: "AIR DISCOVER",
    title: (<span>
        <Box component={'span'} sx={{ fontSize: '60px', color: 'brown' }}>R</Box>
        <Box component={'span'} sx={{ fontSize: '60px', color: 'primary.main' }}>o</Box>
        <Box component={'span'} sx={{ fontSize: '60px', color: 'primary.dark' }}>b</Box>
        <Box component={'span'} sx={{ fontSize: '60px', color: 'primary.light' }}>o</Box>
        <Box component={'span'} sx={{ fontSize: '60px', color: 'secondary.main' }}>t</Box>
        <Box component={'span'} sx={{ fontSize: '60px', color: 'secondary.dark' }}>i</Box>
        <Box component={'span'} sx={{ fontSize: '60px', color: 'green' }}>c</Box>
        <Box component={'span'} sx={{ fontSize: '60px', color: 'purple' }}>s</Box>
        {' '}
        <Box component={'span'} sx={{ fontSize: '60px', color: 'text.secondary' }}>Group</Box>
    </span>),
    description: (`The Robotics group has focused on research in autonomous systems that can move, manipulate, perceive, decide, and interact with humans.
We are interested in discovering how robot locomotion and execution can improve the system performance in embodied tasks for transportation, manufacturing, and consumer applications.
Another domain of our research lies in investigating simulation-to-reality gaps and performing explainable domain transfer learning to shorten deployment duration. 
Looking forward to a human-robot symbiosis in the future, we therefore aim at developing hardware-aware, scalable algorithms for multi-robot and multi-human collaboration.`),
    landing_img: "/landing_imgs/mechanic.jpg",
}

export const COVER_PIC = "/cover_imgs/mechanic.jpg";


export const TAGS = [
    'Manufacturing',
    'Robotics',
    'C2M',
    'CAD',
    'Collabrative Robot',
    'Transportation',
    'Autonomy',
    'Locomotion',
    'Sim2Real',
]

export const CATEGORIES = [
    "Customer to Manufacturer",
    "City-scale Ultra-low-altitude HD Map",
    "Simulation to Reality",
    "A Multimodal Robotic Platform"
]

export const MEMBERS = [
    { id: 1, name: "Zhou, Guyue", role: "Lab Director", photo: "/member_photos/people_Zhou_Guyue.jpeg" },
    { id: 2, name: "Chen, Yilun", role: "Chief Scientist", photo: "/member_photos/people_Chen_Yilun.jpg" },
    { id: 3, name: "Jiang, Chengyu", role: "Researcher", photo: "/member_photos/people_Jiang_Chengyu.jpg" },
    { id: 4, name: "Zhang, Xinliang", role: "Engineer", photo: "/member_photos/people_Zhang_Xinliang.jpg" },
    { id: 5, name: "Huang, Pengfei", role: "Researcher", photo: "/member_photos/people_Huang_Pengfei.jpg" },
    { id: 6, name: "Li, Chuxuan", role: "Researcher", photo: "/member_photos/people_Li_Chuxuan.jpg" },
    // { id: 5, name: "Li, Jin", role: "Researcher", photo: "/member_photos/people_Li_Jin.jpg" },
    { id: 7, name: "Wang, Zheng", role: "Project Manager", photo: "/member_photos/people_Wang_Zheng.jpg" },
    { id: 8, name: "Huang, Yao", role: "Master Student", photo: "/member_photos/people_Huang_Yao.jpg" },
]
