> 原分享人：Wang Jingxin（王京新）。原记录时间：2024-11-04。2026-10-22 整理并入个人主页。内容保留原记录的研究背景与判断；文献覆盖以原记录时期为准。

DriveLM: Driving with Graph Visual Question Answering

## 收获总结

1. 不要讲的太细，像图、表之类的，完全可以再下面**加句话总结**一下，因为做其他方向的，不了解这个指标是什么，只关心背后的思想，得把文章的思想讲出来，而不是说指标结果的好坏；【讲表的时候，主要是讲为什么要设计这个表？（目得），这个表验证了什么？】

2. 数据集+图结构方式的创新；

3. 讲PPT时，如果自己有问题要提问的话，最好总结一下，把自己的思考展示出来，然后哪里受阻了，再点出来；

## 分享摘要



[paper](https://eccv.ecva.net/virtual/2024/poster/130) [GitHub](https://github.com/OpenDriveLab/DriveLM) [project page](https://opendrivelab.com/DriveLM/)
[CVPR Workshop Challenge](https://opendrivelab.com/challenge2024/#driving_with_language)

![论文图示](/notes/reading-drivelm-20241104/1104-drivelm.png)

分享摘要：

本篇论文针对将通用视觉-语言模型（VLMs）应用于端到端自动驾驶中的挑战；受到1、大规模预训练的视觉-语言模型在多任务中的通用性和推理能力；2、人类驾驶员会分多个步骤对决策进行推理的启发；提出了DriveLM，一个结合语言输入的自动驾驶框架，包括DriveLM-nuScenes和DriveLM-CARLA两个数据集，任务定义涵盖感知、预测、规划三个阶段，以及相关的评估方法；提升了VLMs 在自动驾驶场景中的适应性和推理能力，尤其是在处理未见场景和传感器配置方面，达到了与专用驾驶模型相媲美甚至超越的表现的效果，验证了语言驱动驾驶的潜力。

---

## 问答简记

**问：** 为什么在nuScense数据集上，什么信息也没用组织，直接用，效果就要比Graph图的方式要高？

**答：**  可能只是拿图结构的方式来用，并没有做指令微调(因为数据量太大了)；重点是表达在新数据上的泛化性。

---

**问：** 为什么要提出这个数据集(动机是什么)？

**答：** 泛化性需要推理来解决，与人交互需要可解释性，模仿人类多步推理的启发，提出图结构的数据集QA。

---

**问：** 逻辑关系的真假，或者说强度问题：有的问题加到模型中，反而降点；能否加入强逻辑关系？强逻辑关系是什么？怎么筛选这种强逻辑关系；

（原记录未记下回答。）

---
**问：** VLM模型给出了轨迹预测的路径点，怎么更精细化这样的路径点？

（原记录未记下回答。）

## 相关论文
1. Xu, Z., Zhang, Y., Xie, E., Zhao, Z., Guo, Y., Wong, K.K., Li, Z., & Zhao, H. (2023). DriveGPT4: Interpretable End-to-End Autonomous Driving Via Large Language Model. IEEE Robotics and Automation Letters, 9, 8186-8193.\
2. Shao, H., Hu, Y., Wang, L., Waslander, S.L., Liu, Y., & Li, H. (2023). LMDrive: Closed-Loop End-to-End Driving with Large Language Models. 2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 15120-15130.\
下面的是CVPR 2024 drive with language挑战赛的论文：\
1. Enhancing Vision Language Models for Autonomous Driving  with Multi-view Multi-dataset Fusion\
2. Driving with InternVL\
3. BeVLM: GoT-based Integration of BEV and LLM for Driving with Language

## 原始记录

来源：[OpenVisualLab 原始笔记](https://github.com/OpenVisualLab/openvisuallab.github.io/blob/45e559a6750bd076f2c8cbb2ced3947f68d06093/src/browser/epoch_one_24_1028_1202/241104_DriveLM_ECCV24_Oral_wjx.md)。原仓库、版本差异及未完成的记录保留在本地历史档案。

[返回组会分享索引](/notes/paper-reading-and-sharing/#历史论文分享记录)
