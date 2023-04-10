---
title: "Delving into Shape-aware Zero-shot Semantic Segmentation"
category: Scene analysis and understanding
createdAt: '2023-03-29T18:11'
coverImg: /images/sun_vision_sazs_1.png
heroImg: /images/sun_vision_sazs_3.png
tags: [Zero-shot learning, Semantic Segmentation, Multi-modal]
author:
  name: Liu, Xinyu
---

Thanks to the impressive progress of large-scale vision-language pretraining, recent recognition models can classify arbitrary objects in a zero-shot and open-set manner, with a surprisingly high accuracy. However, translating this success to semantic segmentation is not trivial, because this dense prediction task requires not only accurate semantic understanding but also fine shape delineation and existing vision-language models are trained with image-level language descriptions. To bridge this gap, we pursue shape-aware zero-shot semantic segmentation in this study. Inspired by classical spectral methods in the image segmentation literature, we propose to leverage the eigen vectors of Laplacian matrices constructed with self-supervised pixel-wise features to promote shape-awareness. Despite that this simple and effective technique does not make use of the masks of seen classes at all, we demonstrate that it out-performs a state-of-the-art shape-aware formulation that aligns ground truth and predicted edges during training. We also delve into the performance gains achieved on different datasets using different backbones and draw several interesting and conclusive observations: the benefits of promoting shape-awareness highly relates to mask compactness and language embedding locality. Finally, our method sets new state-of-the-art performance for zero-shot semantic segmentation on both Pascal and COCO, with significant margins. Code and models will be accessed at [https://github.com/Liuxinyv/SAZS](https://github.com/Liuxinyv/SAZS).

![pic](/images/sun_vision_sazs_2.png)

