import { Box } from '@mui/material';
// 

export const INTRO = {
    overline: "AIR DISCOVER",
    title: (<span>
        <Box component={'span'} sx={{ color: 'brown' }}>R</Box>
        <Box component={'span'} sx={{ color: 'primary.main' }}>o</Box>
        <Box component={'span'} sx={{ color: 'primary.dark' }}>b</Box>
        <Box component={'span'} sx={{ color: 'primary.light' }}>o</Box>
        <Box component={'span'} sx={{ color: 'secondary.main' }}>t</Box>
        <Box component={'span'} sx={{ color: 'secondary.dark' }}>i</Box>
        <Box component={'span'} sx={{ color: 'green' }}>c</Box>
        <Box component={'span'} sx={{ color: 'purple' }}>s</Box>
        {' '}
        <Box component={'span'} sx={{ color: 'text.secondary' }}>Team</Box>
    </span>),
    description: (`The Robotics group has focused on research in autonomous systems that can move, manipulate, perceive, decide, and interact with human.
We are interested in discovering how robot locomotion and execution can improve the system performance in embodied tasks for transportation, manufacturing, and consumer applications.
Another domain of our research lies in investigating simulation-to-reality gaps and performing explainable domain transfer learning to shorten deployment duration. 
Looking forward to a human-robot symbiosis in the future, we therefore aim at developing hardware-aware, scalable algorithms for multi-robot and multi-human collaboration.`)
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
]

export const MEMBERS = [
    { id: 1, name: "Zhou, Guyue", role: "Group Leader", photo: "/member_photos/people_Zhou_Guyue.jpeg" },
    { id: 2, name: "Huang, Pengfei", role: "Researcher", photo: "/member_photos/people_Huang_Pengfei.jpg" },
    { id: 3, name: "Jiang, Chengyu", role: "Researcher", photo: "/member_photos/people_Jiang_Chengyu.jpg" },
    { id: 4, name: "Li, Chuxuan", role: "Researcher", photo: "/member_photos/people_Li_Chuxuan.jpg" },
    // { id: 5, name: "Li, Jin", role: "Researcher", photo: "/member_photos/people_Li_Jin.jpg" },
    { id: 5, name: "Zhang, Xinliang", role: "Engineer", photo: "/member_photos/people_Zhang_Xinliang.jpg" },
    { id: 6, name: "Wang, Zheng", role: "Project Manager", photo: "/member_photos/people_Wang_Zheng.jpg" },
    { id: 7, name: "Huang, Yao", role: "Master Student", photo: "/member_photos/people_Huang_Yao.jpg" },
    { id: 7, name: "Chen, Yilun", role: "Chief Scientist", photo: "" },
]
