---
title: "Cerberus Transformer: Joint Semantic, Affordance and Attribute Parsing"
category: Physical Scene Decomposition
createdAt: '2022-04-05T18:11'
coverImg: /images/sun_cer_3.jpg
heroImg: /images/sun_cer_1.PNG
tags: [Transformer, Semantic Segmentation, Affordance, Attribute]
author:
  name: Chen, Xiaoxue
---
Multi-task indoor scene understanding is widely considered as an intriguing formulation, as the affinity of different tasks may lead to improved performance. In this paper, we tackle the new problem of joint semantic, affordance and attribute parsing. However, successfully resolving it requires a model to capture long-range dependency, learn from weakly aligned data and properly balance sub-tasks during training. To this end, we propose an attention-based architecture named Cerberus and a tailored training framework. Our method effectively addresses the aforementioned challenges and achieves state-of-the-art performance on all three tasks. Moreover, an in-depth analysis shows concept affinity consistent with human cognition, which inspires us to explore the possibility of weakly supervised learning. Surprisingly, Cerberus achieves strong results using only 0.1%-1% annotation. Visualizations further confirm that this success is credited to common attention maps across tasks. Code and models can be accessed at [https://github.com/OPEN-AIR-SUN/Cerberus](https://github.com/OPEN-AIR-SUN/Cerberus).

![results](/images/sun_cer_2.PNG)
