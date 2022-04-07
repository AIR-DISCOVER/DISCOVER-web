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
    "Understanding/Modelling People",
    "Build Human-centred AI System",
    "Methodology Research about Human-AI Collabration",
  ],
  sun: ['Research'],
  mechanic: [],
}
export const TAGS = {
  hci: ['tag1'],
  sun: ["Transformer", "Semantic Segmentation", "Affordance", "Attribute", "3D Object Detection", "Layout Estimation"],
  mechanic: ['Manufacturing', 'Robotics', 'C2M', 'CAD', 'Collabrative Robot', 'Transportation', 'Autonomy', 'Locomotion', 'Sim2Real'],
}

export const HCI_COVER_PIC = "";
export const SUN_COVER_PIC = "";
export const MECHANIC_COVER_PIC = "/cover_imgs/mechanic.jpg";

export const DISCOVER_INTRO = "AIR DISCOVER SUN Team is mainly focusing on computer vision which is the art of tracing light, along two paths: \n - From images to the physical world; \n - From images to our brains. We believe a methodology that integrates data-driven recognition and closed-form reconstruction would lead to a comprehensive understanding of the world, facilitating emerging AI-empowered robotics applications that collaborate with people. "
export const ROBOTICS_INTRO = "The Robotics group has focused on research in autonomous systems that can move, manipulate, perceive, decide, and interact with human. We are interested in discovering how robot locomotion and execution can improve the system performance in embodied tasks for transportation, manufacturing, and consumer applications. Another domain of our research lies in investigating simulation-to-reality gaps and performing explainable domain transfer learning to shorten deployment duration. Looking forward to a human-robot symbiosis in the future, we therefore aim at developing hardware-aware, scalable algorithms for multi-robot and multi-human collaboration."

export const GROUP_INTRO = {
  hci: { overline: "overline", title: "Title", description: "Description", inverse: true },
  mechanic: { overline: "RESEARCH GROUP", title: "Robotics", description: ROBOTICS_INTRO, landing_img: "/member_photos/discover-icon.png" },
  sun: { overline: "AIR DISCOVER", title: "SUN Team", description: DISCOVER_INTRO },
}