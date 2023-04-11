---
title: City-scale Ultra-low-altitude HD Map for Micro Air Vehicles
#description: "Explainable AI refers to methods and techniques that enable humans."
category: City-scale Ultra-low-altitude HD Map
coverImg: /images/robotics_HDmap.png
heroImg: /images/robotics_HDmap.png
createdAt: '2023-04-11T19:12'
# duration: 8 minutes read
tags: [Transportation, Robotics, Autonomy, Collaborative Robot]
author:
  name: Zhou, Guyue
  # role: Full Stack Designer
  # picture: https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg
  quotes: Member since Dec 1, 2020
  about: Self introduction here (to be updated)
---

In a complex urban environment with dense buildings, the MAVs' capabilities of reliable localization and navigation are highly limited. As a result, such limitation constrains the development and deployment of MAVs in urban scenarios such as media, rescue, and last-mile delivery applications. Different from traditional methods that utilize the global navigation satellite system (GNSS) to adjust the bias of on-board sensors, this project introduces a novel visual localization technology with a crowdsourcing ultra-low-altitude high-definition (HD) map. Furthermore, the captured city-scale ultra-low-altitude HD map can provide prior information for MAVs' navigation. The project is expected to achieve high precision global localization and highly reliable environmental understanding in MAVs' applications in complex urban environments.

*LATITUDE: Robotic Global Localization with Truncated Dynamic Low-pass Filter in City-scale NeRF* has been accepted by ICRA2023, which completes the relocalization of UAVs based on city-scale NeRF. Taking advantage of the arbitrary view synthesis of NeRF, data augmentation is performed by generating data not in the training set through illumination coding, and a position recognition network is trained to obtain the pose of the UAV. Based on the position recognition, we proposed a truncated dynamic low-pass filtering to realize the coarse-to-fine optimization strategy to avoid the local optimal of pose optimization and the positioning accuracy reaches 2 cm.

![pic](/images/UAV.PNG)

{/* 这里是注释，不会显示在网页中 */}

{/*
coverImg: post封面，在post列表展示
heroImg: post头图，在post自身页面最上方展示
\# 开头的项目为可选项，如果适用删去#即可显示
 */}
