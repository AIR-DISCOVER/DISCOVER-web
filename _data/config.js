export const HCI_MEMBERS = [
  { id: 1, name: "Gao, Jiasi", role: "Role", photo: "" },
  { id: 2, name: "Gao, Jiasi", role: "Role", photo: "" },
  { id: 3, name: "Gao, Jiasi", role: "Role", photo: "" },
  { id: 4, name: "Gao, Jiasi", role: "Role", photo: "" },
  { id: 5, name: "Gao, Jiasi", role: "Role", photo: "" },
]
export const SUN_MEMBERS = [
  { id: 1, name: "Shi, Yongliang", role: "Role", photo: "/member_photos/sun-shiyongliang.jpeg"},
  { id: 2, name: "Chen, Xiaoxue", role: "Role", photo: "/member_photos/sun-chenxiaoxue.jpeg" },
  { id: 3, name: "Li, Pengfei", role: "Role", photo: "/member_photos/sun-lipengfei.jpeg" },
  { id: 4, name: "Tian, Beiwen", role: "Role", photo: "/member_photos/sun-tianbeiwen.jpg" },
]
export const MECHANIC_MEMBERS = [
  { id: 1, name: "Mechanic King", role: "Role", photo: "" },
  { id: 2, name: "Mechanic King", role: "Role", photo: "" },
  { id: 3, name: "Mechanic King", role: "Role", photo: "" },
  { id: 4, name: "Mechanic King", role: "Role", photo: "" },
  { id: 5, name: "Mechanic King", role: "Role", photo: "" },
]
export const CATEGORIES = {
  hci: [
    "Understanding/Modelling People",
    "Build Human-centred AI System",
    "Methodology Research about Human-AI Collabration",
  ],
  sun: ['cate2'],
  mechanic: ['cate3'],
}
export const TAGS = {
  hci: ['tag1'],
  sun: ['tag2'],
  mechanic: ['tag3'],
}

export const HCI_COVER_PIC = "";
export const SUN_COVER_PIC = "";
export const MECHANIC_COVER_PIC = "";

export const DISCOVER_INTRO = "AIR DISCOVER SUN Team is mainly focusing on computer vision which is the art of tracing light, along two paths: \
- From images to the physical world; \
- From images to our brains. \
We believe a methodology that integrates data-driven recognition and closed-form reconstruction would lead to a comprehensive understanding of the world, facilitating emerging AI-empowered robotics applications that collaborate with people. \
\
AIR DISCOVER HCI Team is a Human-centered AI research team that focuses on creating AI-driven systems that amplify and augment human abilities and well-being：\
- Understanding and modeling long-term human behaviors and emotions in the real world through wearable or ubiquitous contactless sensors; \
- Building novelty human-in-the-loop AI/Robotics systems; \
- Exploring methods and algorithms enabling effective human-AI collaboration that make human partnerships more productive, creative, accessible, and enjoyable.\
\
AIR DISCOVER Hardware Lab aims to fulfill the requirement of robotics research in AIR, especially to unleash the potential of novel sensor/actuator systems for the mobility of robots and 3D printing for various rapid material forming. ";

export const GROUP_INTRO = {
  hci: { overline: "overline", title: "Title", description: "Description", inverse: true },
  sun: { overline: "overline", title: "Title", description: "Description", landing_img: "/member_photos/discover-icon.png" },
  mechanic: { overline: "AIR DISCOVER", title: "SUN Team", description: DISCOVER_INTRO },
}