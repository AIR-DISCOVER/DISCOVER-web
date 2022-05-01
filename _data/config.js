export const HCI_MEMBERS = [
  { id: 1, name: "Gao, Jiasi", role: "Role", photo: "" },
  { id: 2, name: "Gao, Jiasi", role: "Role", photo: "" },
  { id: 3, name: "Gao, Jiasi", role: "Role", photo: "" },
  { id: 4, name: "Gao, Jiasi", role: "Role", photo: "" },
  { id: 5, name: "Gao, Jiasi", role: "Role", photo: "" },
]
export const SUN_MEMBERS = [
  { id: 1, name: "Shi, Yongliang", role: "Post doc", photo: "/member_photos/people_Shi_Yongliang.jpeg" },
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

export const HCI_COVER_PIC = "";
export const SUN_COVER_PIC = "";
export const MECHANIC_COVER_PIC = "/cover_imgs/mechanic.jpg";

export const DISCOVER_INTRO = (
  <>
    <p>
      <strong>DISCOVER</strong> (<strong>DIS</strong>tributed <strong>CO</strong>llaborative <strong>V</strong>ision and <strong>E</strong>xponential <strong>R</strong>obotics) Lab is a key technical team at Institute for AI Industry Research (AIR), Tsinghua University, aiming to establish an exponential robotic platform which enables robots to reproduce themselves. To achieve the goal, scientists and technologists from DISCOVER Lab are developing top-tier computer vision, computer graphics, and robotics expertise and are working on the cutting-edge technological breakthroughs to address significant practical challenges.
    </p>
  </>
);

export const DISCOVER_PAGELINKS = [
  {
    order: '1',
    subheader: 'TEST',
    cover: SUN_COVER_PIC,
    items: [
      { title: 'To understand our core value', path: '' },
      { title: 'To find our RA/PostDoc/PhD openings', path: '' },
      { title: 'To find our internship opportunities', path: '' },
      { title: 'To meet our industrial partners', path: '' },
    ],
  },
  {
    order: '2',
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