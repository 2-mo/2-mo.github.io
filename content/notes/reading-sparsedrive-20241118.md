> 原分享人：Yuan Shuang（袁双）。原记录时间：2024-11-18。2026-10-22 整理并入个人主页。内容保留原记录的研究背景与判断；文献覆盖以原记录时期为准。

SparseDrive: End-to-End Autonomous Driving via Sparse Scene Representation

## 分享摘要

`性能好` `计算量低` `github star数多`

  [arXiv](https://arxiv.org/abs/2405.19620) [GitHub](https://github.com/swc-17/SparseDrive)

![论文图示](/notes/reading-sparsedrive-20241118/1118-sparsedrive-title.png)

Tsinghua University (清华大学)   Horizon Robotics (地平线)

关键词：对称稀疏感知;并行运动规划;自车交互

分享摘要：提出了一种名为 SparseDrive 的新型自动驾驶范式，旨在解决传统模块化自动驾驶系统中信息损失和错误累积的问题。与传统方法不同，该系统采用端到端的设计思路，通过稀疏表示和任务重新设计来提升性能和效率。SparseDrive 的核心包括对称稀疏感知模块和并行运动规划器两大创新:感知模块统一了检测、跟踪和在线建图功能，采用对称模型架构来学习驾驶场景的完全稀疏表示;而在运动预测和规划方面，研究者基于这两项任务的相似性提出了并行设计方案，并引入分层规划选择策略和碰撞感知重评分模块，以确保输出轨迹的合理性和安全性。实验结果表明，SparseDrive 在各项任务性能上显著优于现有最先进的方法同时具备更高的训练和推理效率

![论文图示](/notes/reading-sparsedrive-20241118/1118-sparsedrive-motivation.png)

## 相关论文

[UniAD: Planning-oriented Autonomous Driving (CVPR'23) (best paper)](https://github.com/OpenDriveLab/UniAD)

[SparseBEV: High-Performance Sparse 3D Object Detection
from Multi-Camera Videos (ICCV'23)](https://github.com/MCG-NJU/SparseBEV)

## 原始记录

来源：[OpenVisualLab 原始笔记](https://github.com/OpenVisualLab/openvisuallab.github.io/blob/45e559a6750bd076f2c8cbb2ced3947f68d06093/src/browser/epoch_one_24_1028_1202/241118_SparseDrive_arXiv24_ys.md)。原仓库、版本差异及未完成的记录保留在本地历史档案。

[返回组会分享索引](/notes/paper-reading-and-sharing/#历史论文分享记录)
