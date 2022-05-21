---
title: "PQ-Transformer: Jointly Parsing 3D Objects and Layouts from Point Clouds"
description: The first transformer architecture to jointly parse 3D objects and layouts.
category: Cognitive Scene Understanding
coverImg: /images/sun_pq_1.PNG
heroImg: /images/sun_pq_1.PNG
createdAt: '2022-04-06T12:34'
tags: [Transformer, 3D Object Detection, Layout Estimation]
author:
  name: Chen, Xiaoxue
---

3D scene understanding from point clouds plays a vital role for various robotic applications. Unfortunately, current state-of-the-art methods use separate neural networks for different tasks like object detection or room layout estimation. Such a scheme has two limitations: 1) Storing and running several networks for different tasks are expensive for typical robotic platforms. 2) The intrinsic structure of separate outputs are ignored and potentially violated. To this end, we propose the first transformer architecture that predicts 3D objects and layouts simultaneously, using point cloud inputs. Unlike existing methods that either estimate layout keypoints or edges, we directly parameterize room layout as a set of quads. As such, the proposed architecture is termed as P(oint)Q(uad)-Transformer. Along with the novel quad representation, we propose a tailored physical constraint loss function that discourages object-layout interference. The quantitative and qualitative evaluations on the public benchmark ScanNet show that the proposed PQ-Transformer succeeds to jointly parse 3D objects and layouts, running at a quasi-real-time (8.91 FPS) rate without efficiency-oriented optimization. Moreover, the new physical constraint loss can improve strong baselines, and the F1-score of the room layout is significantly promoted from 37.9% to 57.9%. Code and models can be accessed at https://github.com/OPEN-AIR-SUN/PQ-Transformer.

![main](/images/sun_pq_2.PNG)