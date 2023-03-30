---
title: "From Semi-supervised to Omni-supervised Room Layout Estimation Using Point Clouds"
category: Cognitive Scene Understanding
coverImg: /images/sun-semi-pq-2.jpg
heroImg: /images/sun-semi-pq-1.jpg
createdAt: '2023-03-30T14:11'
tags: [Semi-Supervised Learning, Room Layout Estimation]
author:
  name: Gao, Huanang
---

Room layout estimation is a long-existing robotic vision task that benefits both environment sensing and motion planning. However, layout estimation using point clouds (PCs) still suffers from data scarcity due to annotation difficulty. As such, we address the semi-supervised setting of this task based upon the idea of model exponential moving averaging. But adapting this scheme to the state-of-the-art (SOTA) solution for PC-based layout estimation is not straight-forward. To this end, we define a quad set matching strategy and several consistency losses based upon metrics tailored for layout quads. Besides, we propose a new online pseudo-label harvesting algorithm that decomposes the distribution of a hybrid distance measure between quads and PC into two components. This technique does not need manual threshold selection and intuitively encourages quads to align with reliable layout points. Surprisingly, this framework also works for the fully-supervised setting, achieving a new SOTA on the ScanNet benchmark. Last but not least, we also push the semi-supervised setting to the realistic omni-supervised setting, demonstrating significantly promoted performance on a newly annotated ARKitScenes testing set. Our codes, data and models will be made publicly available.