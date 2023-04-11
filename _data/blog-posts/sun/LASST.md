---
title: "Language-guided Semantic Style Transfer of 3D Indoor Scenes"
category: 3D Style Transfer
createdAt: '2023-03-31T23:22'
coverImg: /images/LASST_3.jpg
heroImg: /images/LASST_1.png
tags: [3D Style Transfer, Differentiable Rendering, Vision and Language]
author:
  name: Jin, Bu
---

We address the new problem of language-guided semantic style transfer of 3D indoor scenes. The input is a 3D indoor scene mesh and several phrases that describe the target scene. Firstly, 3D vertex coordinates are mapped to RGB residues by a multi-layer perceptron. Secondly, colored 3D meshes are differentiablly rendered into 2D images, via a viewpoint sampling strategy tailored for indoor scenes. Thirdly, rendered 2D images are compared to phrases, via pre-trained vision-language models. Lastly, errors are back-propagated to the multi-layer perceptron to update vertex colors corresponding to certain semantic categories. We did large-scale qualitative analyses and A/B user tests, with the public ScanNet and SceneNN datasets. 

We demonstrate: (1) visually pleasing results that are potentially useful for multimedia applications. (2) rendering 3D indoor scenes from viewpoints consistent with human priors is important. (3) incorporating semantics significantly improve style transfer quality. (4) an HSV regularization term leads to results that are more consistent with inputs and generally rated better. 

Codes and user study toolbox are available at [https://github.com/AIR-DISCOVER/LASST](https://github.com/AIR-DISCOVER/LASST). 

![pic](/images/LASST_2.jpg)

