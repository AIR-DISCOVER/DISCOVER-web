---
title: "DPF: Learning Dense Prediction Fields with Weak Supervision"
category: Physical Scene Decomposition
createdAt: '2023-03-29T18:11'
coverImg: /images/sun-dpf-1.PNG
heroImg: /images/sun-dpf-2.PNG
tags: [dense prediction, senmantic segmentation, intrinsic decomposition, neural implicit field]
author:
  name: Chen, Xiaoxue
---

Nowadays, many visual scene understanding problems are addressed by dense prediction networks. But pixel-wise dense annotations are very expensive (e.g., for scene parsing) or impossible (e.g., for intrinsic image decomposition), motivating us to leverage cheap point-level weak supervision. However, existing pointly-supervised methods still use the same architecture designed for full supervision. In stark contrast to them, we propose a new paradigm that makes predictions for point coordinate queries, as inspired by the recent success of implicit representations, like distance or radiance fields. As such, the method is named as dense prediction fields (DPFs). DPFs generate expressive intermediate features for continuous sub-pixel locations, thus allowing outputs of an arbitrary resolution. DPFs are naturally compatible with point-level supervision. We showcase the effectiveness of DPFs using two substantially different tasks: high-level semantic parsing and low-level intrinsic image decomposition. In these two cases, supervision comes in the form of single-point semantic category and two-point relative reflectance, respectively. As benchmarked by three large-scale public datasets PASCALContext, ADE20K and IIW, DPFs set new state-of-the-art performance on all of them with significant margins. Code can be accessed at [Here](https://github.com/cxx226/DPF).

![results](/images/sun-dpf-3.PNG)

