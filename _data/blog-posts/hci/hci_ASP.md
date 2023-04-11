---
title: Planning Assembly Sequence with Graph Transformer
category: Assembly Sequence Planning
createdAt: '2023-04-07T20:23'
coverImg: /images/hci_ASP_01.PNG
heroImg: /images/hci_ASP_02.PNG
tags: [Transformer, Graph Attention, ASP]
author:
  name: Ma, Lin
---
## Planning Assembly Sequence with Graph Transformer

 Assembly Sequence Planning (ASP) is the essential process for modern manufacturing, proven to be NP-complete thus its effective and efficient solution has been a challenge
for researchers in the field.
In this paper, we present a graph-transformer based framework for the ASP problem which is trained and demonstrated on a self-collected ASP database. The ASP database contains a self-collected set of LEGO models. The LEGO model is abstracted to a heterogeneous graph structure after a thorough analysis of the original structure and feature extraction. The ground truth assembly sequence is first generated by brute-force search and then adjusted manually to be in line with human rational habits. Based on this self-collected ASP dataset, we propose a heterogeneous graph-transformer framework to learn the latent rules for assembly planning.
We evaluated the proposed framework in a series of experiments. The results show that the similarity of the predicted and ground truth sequences can reach 0.44, a medium correlation measured by Kendall's $\tau$. Meanwhile, we compared the different effects of node features and edge features and generated a feasible and reasonable assembly sequence as a benchmark for further research. 
Our dataset and code are available on: [htps://github.com/AIR-DISCOVER/ICRA\_ASP]. 

![pic](/images/hci_ASP_02.PNG)