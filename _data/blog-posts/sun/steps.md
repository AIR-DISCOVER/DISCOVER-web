---
title: "STEPS: Joint Self-Supervised Nighttime Image Enhancement and Depth Estimation"
category: Dense Prediction
createdAt: '2023-03-31T23:22'
coverImg: /images/vision_steps_3.png
heroImg: /images/vision_steps_1.png
tags: [Self-superviesd Learning, Depth Estimation, Low-light Image Enhancement]
author:
  name: Zheng, Yupeng
---

Self-supervised depth estimation draws a lot of attention
recently as it can promote the 3D sensing capabilities of
self-driving vehicles. However, it intrinsically relies
upon the photometric consistency assumption, which hardly
holds during nighttime. Although various supervised
nighttime image enhancement methods have been proposed,
their generalization performance on challenging driving
scenarios is not satisfactory. To this end, we propose the
first method that jointly learns a nighttime image enhancer
and a depth estimator, without using ground truth for
neither tasks. Our method tightly entangles two
self-supervised tasks using a newly proposed uncertain
pixel masking strategy. This strategy originates from the
observation that nighttime images not only suffer from
underexposed regions but also from overexposed regions. By
fitting a bridge-shaped curve to the illumination map
distribution, both regions are suppressed and two tasks are
bridged naturally. We benchmark the method on two
established datasets: nuScenes and Oxford and demonstrate
state-of-the-art performance on both of them. Detailed
ablations also reveal the mechanism of our proposal. Last
but not least, to mitigate the problem of sparse ground
truth of existing datasets, we provide a new
photo-realistically enhanced nighttime dataset based upon
CARLA. It brings meaningful new challenges to the
community. Codes, data, and models are available at [https://github.com/ucaszyp/STEPS](https://github.com/ucaszyp/STEPS).

![pic](/images/vision_steps_2.png)

