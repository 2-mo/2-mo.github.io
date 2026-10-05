## 了解领域

以小目标检测为例，先整理定义、应用、挑战、解决思路、数据集和代表团队。比较性能时注明评价设置、会议或期刊以及年份。

### 让思维导图变成自己的

检索可以从 **Small Object Detection** 和 **Tiny Object Detection** 两个关键词开始。挑战按关系展开：目标信息少，容易受噪声干扰；标注困难，高质量标注也少。给每类解决思路补上代表论文，再选两三个数据集准备实验。

**思维导图需要变成你的思维导图。** 感兴趣的分支继续细化，列出尚未解决的问题，选一个具化。

## 找信息

从综述、Awesome 合集和技术解读找线索，再顺着原论文的引用和相关工作追溯。也可以从数据集出发，找代表论文，检查代码与算力要求。检索入口见 [Polaris](/research-links/)。

读引言时抓住 **However** 后面的转折：作者指出的是领域挑战，还是某类方法的局限？

可以先试着补全一句话：

> 针对什么问题，这篇工作通过什么方法，做了什么改进，从而得到什么效果。

## 论文论文

### 找论文

先找十篇左右，按时间顺序看。后出的论文会 **diss 之前的论文**，方便看清前作的局限和后续的改进。

下面是当时围绕小目标和航拍目标检测使用过的一份阅读单：

1. *Better to Follow, Follow to Be Better: Towards Precise Supervision of Feature Super-Resolution for Small Object Detection*（ICCV 2019）
2. *Clustered Object Detection in Aerial Images*（ICCV 2019）
3. *A Global-Local Self-Adaptive Network for Drone-View Object Detection*（TIP 2021）
4. *RFLA: Gaussian Receptive Field Based Label Assignment for Tiny Object Detection*（ECCV 2022）
5. *QueryDet: Cascaded Sparse Query for Accelerating High-Resolution Small Object Detection*（CVPR 2022）
6. *Oriented RepPoints for Aerial Object Detection*（CVPR 2022）
7. *Interactive Multi-Class Tiny-Object Detection*（CVPR 2022）
8. *Adaptive Sparse Convolutional Networks with Global Context Enhancement for Faster Object Detection on Drone Images*（CVPR 2023）

第一遍先找出每篇解决的问题，用自己的话概括，再决定是否精读。

### 看论文

读完一组后，比较哪篇理解最清楚、哪篇最模糊，最大的障碍是什么，哪种改进思路最有说服力。再找几篇相关方法检验自己的判断。

当时继续比较的材料还有 *TinyDet: Accurate Small Object Detection in Lightweight Generic Detectors* 和 *Confidence-driven Bounding Box Localization for Small Object Detection*。

### 讲论文

人的思维是网状的，论文是线性的。讲论文需要把脑子里的联系排成别人能跟上的顺序；说不清楚的地方，回到原文重新确认。

## 如何汇报论文

1. **工作背景。** 发表在哪，哪个团队做的，有没有连续的工作，放在怎样的研究脉络中理解。
2. **任务和应用。** 属于什么领域，在哪个数据集上做，解决它有什么意义，与听众有什么联系。
3. **具体问题。** 当前有什么挑战，这篇论文到底解决哪一个。问题讲清楚，大家才容易听懂后面的方法。
4. **必要概念。** 补充理解后文所需的基本知识和相关工作。
5. **动机与方法。** 为什么这样改，基于什么改，使用什么监督或约束。
6. **评价与比较。** 用什么标准衡量效果，与同设置下的方法相比怎么样。
7. **实验证据。** 哪个实验验证了哪个改进，是否真的回应了前面提出的问题。
8. **自己的收获。** 这个问题在自己的领域是否存在，方法的思路和实现能否借鉴，图表和文字的表达有没有值得学的地方。

提问与图表讲解见[《论文分享中的几个问题》](/notes/paper-reading-and-sharing/)。

## 留下来的资料

- [《如何看如何说》](/notes/revisiting-papers/reading-and-presenting.docx)：找论文、看论文、讲论文的简短提纲，DOCX。
- [《如何高效阅读机器学习顶会论文》](/notes/revisiting-papers/reading-ml-papers.pdf)：当时收集的阅读笔记，包含初筛、精读、记录与回顾，PDF。
- [《如何快速入门科研》](/notes/paper-reading-and-sharing/research-getting-started-2023.pptx)：2023 年的讨论课件，包含论文分享、代码实践和写作，PPTX。

附件保留当时版本。
