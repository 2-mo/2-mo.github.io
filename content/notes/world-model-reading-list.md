> 原整理者：Zhang Mingzhu（张明珠）。原记录时间：2024–2025。2026-10-22 整理并入个人主页。内容保留原记录的研究背景与判断；文献覆盖以原记录时期为准。

> World-Models-Autonomous-Driving-Latest-Survey

按原笔记保留世界模型与自动驾驶的研究分类、论文线索和阅读心得。

## ➢ 论文汇总

[1] <https://github.com/GigaAI-research/General-World-Models-Survey> 该 repo 内有目前世界模型方向的优秀论文汇总，包括基本分类：视频生成、自动驾驶和自主代理。其中自动驾驶分成端到端、以及2D、3D神经模拟器方法。世界模型的文献、 开源code、 综述。

[2] <https://github.com/HaoranZhuExplorer/World-Models-Autonomous-Driving-Latest-Survey>   该repo 内以‘时间’为顺序精选相关世界自动驾驶模型。且并持续更新，包括一些挑战、相关视频，包括机器人领域的世界模型使用（大多数为模仿学习强化学习方向）可参考借鉴。

[3] [Awesome-World-Models-for-AD](https://github.com/zhanghm1995/awesome-world-models-for-AD?tab=readme-ov-file#Table-of-Content)

[4] [World models paper list from Shanghai AI lab](https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving/blob/main/papers.md#world-model--model-based-rl)

[5] [Awesome-Papers-World-Models-Autonomous-Driving](https://github.com/chaytonmin/Awesome-Papers-World-Models-Autonomous-Driving).

## ➢ 认识世界模型

![world model](/notes/world-model-reading-list/world-model.png)

### 1. 简单介绍（从世界模型--> 自动驾驶世界模型用于场景生成）

  [1]  世界模型简介：<https://mp.weixin.qq.com/s/UmT0DjFqRPsjv2m28ySvdw>世界模型是一种人工智能技术，旨在通过整合多种感知信息，如视觉、听觉和语言，利用机器学习和深度学习等方法来理解和预测现实世界。它包括感知模块、表征学习、动力学模型和生成模型，用于构建环境的内部表示，不仅能反映当前状态，还能预测未来变化。这种模型在强化学习、自动驾驶、游戏开发和机器人学等领域有广泛应用。Yann LeCun提出的这一概念，强调通过自监督学习让AI像人一样理解世界，形成内部的心理表征，以期实现通用人工智能。Meta的I-JEPA模型是基于这一愿景的实现，它通过分析和补全图像展示了对世界背景知识的应用。

  [2]  影响较大的早期世界模型文章：2018年Jurgen在NeurIPS 以循环世界模型促进策略演变“Recurrent World Models Facilitate Policy Evolution”的title发表：链接: <https://arxiv.org/abs/1803.10122> 示例: <https://worldmodels.github.io/>

  [3]  世界模型在自动驾驶领域的应用： <https://www.bilibili.com/read/cv34465959/>

  [4]  世界模型用于自动驾驶场景生成以及仿真平台: <https://blog.csdn.net/CV_Autobot/article/details/134002647>

### 2.论文综述

 [1]  2024-Is Sora a World Simulator? A Comprehensive Survey on General World Models and Beyond， __`arxiv`__ [Paper](https://arxiv.org/abs/2403.02622) 极佳科技 （比较全面，该综述通过 260 余篇文献，对世界模型在视频生成、自动驾驶、智能体、通用机器人等领域的研究和应用进行了详尽的分析和讨论。另外，该综述还审视了当前世界模型的挑战和局限性，并展望了它们未来的发展方向。）

 [2] 2024-World Models for Autonomous Driving: An Initial Survey，IEEE TIV,澳门大学，夏威夷大学。[Paper](https://arxiv.org/abs/2403.02622)（画风有趣，对自动驾驶世界模型的现状和未来进展进行了初步回顾，涵盖了它们的理论基础、实际应用以及旨在克服现有局限性的正在进行的研究工作。）

  [3]2024-Data-Centric Evolution in Autonomous Driving: A Comprehensive Survey of Big Data System, Data Mining, and Closed-Loop Technologies __`arxiv`__ [Paper](https://arxiv.org/pdf/2401.12888.pdf)

   [4]2024-Forging Vision Foundation Models for Autonomous Driving: Challenges, Methodologies, and Opportunities __`arxiv`__ [Paper](https://arxiv.org/pdf/2401.08045.pdf)

## 3.挑战赛 Workshops/Challenges

* 2024-1X World Model Challenge  __`Challenges`__ [Link](https://github.com/1x-technologies/1xgpt)
* 2024-ECCV Corner case Challenge  __`Challenges`__ [Link](https://coda-dataset.github.io/w-coda2024/track2/)

* 2024-CVPR Workshop, Foundation Models for Autonomous Systems, Challenges, Track 4: Predictive World Model __`Challenges`__ [Link](https://opendrivelab.com/challenge2024/)

## Tutorials/Talks/

* 2023 __`from Wayve`__; [Video](https://www.youtube.com/watch?v=lNOs08byOhw)

* 2022-Neural World Models for Autonomous Driving [Video](https://www.youtube.com/watch?v=wMvYjiv6EpY)

#### + There are two main types of world models in Autonomous Driving aimed at reducing driving uncertainty, i.e., World Model as Neural Driving Simulator and World Model for End-to-end Driving

![world model](/notes/world-model-reading-list/end-to-end.png)

#### + In the simulation environment, methods such as MILE and TrafficBots are based on reinforcement learning, enhancing their capacity for decision-making and future prediction, thereby paving the way to end-to-end autonomous driving

![world model](/notes/world-model-reading-list/generation.png)

#### CVPR 2025
* GEM: A Generalizable Ego-Vision Multimodal World Model for Fine-Grained Ego-Motion, Object Dynamics, and Scene Composition Control __`CVPR 2025`__; __`Generative AI`__; [Paper](https://arxiv.org/pdf/2412.11198), [Code to be released](https://github.com/vita-epfl/GEM)

#### ICLR 2025
* LAW: Enhancing End-to-End Autonomous Driving with Latent World Model  __`ICLR 2025`__; __`End-to-End AD`__; [Paper](https://openreview.net/pdf?id=fd2u60ryG0), [Code](https://github.com/BraveGroup/LAW)
* PreWorld: Semi-Supervised Vision-Centric 3D Occupancy World Model for Autonomous Driving __`ICLR 2025`__; __`Occupancy Forecasting `__; __`Motion Planning `__; [Paper](https://openreview.net/pdf?id=rCX9l4OTCT), [Code](https://github.com/getterupper/PreWorld)
* AdaWM: Adaptive World Model based Planning for Autonomous Driving __`ICLR 2025`__; __`RL`__; __`Planning`__; [Paper](https://openreview.net/pdf?id=NEu8wgPctU)
* SSR: Navigation-Guided Sparse Scene Representation for End-to-End Autonomous Driving  __`ICLR 2025`__;  __`End-to-End AD`__; [Paper](https://openreview.net/pdf?id=Vv76fCYffN), [Code to be released](https://github.com/PeidongLi/SSR)
* OccProphet: Pushing Efficiency Frontier of Camera-Only 4D Occupancy Forecasting with Observer-Forecaster-Refiner Framework __`ICLR 2025`__; __`Occupancy Forecasting `__; [Paper](https://openreview.net/pdf?id=vC7AlY1ytz), [Code to be released](https://github.com/JLChen-C/OccProphet)

#### AAAI 2025
* DriveDreamer-2: LLM-Enhanced World Models for Diverse Driving Video Generation __`AAAI 2025`__; __`Generative AI`__; __`LLM`__; [Paper](https://arxiv.org/pdf/2403.06845), [Website](https://drivedreamer2.github.io/), [Code](https://github.com/f1yfisher/DriveDreamer2)
* Drive-OccWorld: Driving in the Occupancy World: Vision-Centric 4D Occupancy Forecasting and Planning via World Models for Autonomous Driving __`AAAI 2025`__; __`Occupancy Forecasting `__; __`Planning `__; [Paper](https://arxiv.org/pdf/2408.14197), [Website](https://drive-occworld.github.io/), [Code](https://github.com/yuyang-cloud/Drive-OccWorld)

#### Others
* PIWM: Dream to Drive with Predictive Individual World Model __`TIV 2025`__; __`RL`__; [Paper](https://arxiv.org/abs/2501.16733), [Code](https://github.com/gaoyinfeng/PIWM)
* MaskGWM: A Generalizable Driving World Model with Video Mask Reconstruction  __`arxiv`__; __`Generative AI`__; [Paper](https://arxiv.org/abs/2502.11663) [Code](https://github.com/SenseTime-FVG/OpenDWM)
* Dream to Drive: Model-Based Vehicle Control Using Analytic World Models  __`arxiv`__;  __`Planning`__; [Paper](https://arxiv.org/abs/2502.10012)
* HERMES: A Unified Self-Driving World Model for Simultaneous 3D Scene Understanding and Generation  __`arxiv`__;  __`Generative AI`__;  __`LLM`__; [Paper](https://arxiv.org/pdf/2501.14729), [Code to be released](https://github.com/LMD0311/HERMES)
* AD-L-JEPA: Self-Supervised Spatial World Models with Joint Embedding Predictive Architecture for Autonomous Driving with LiDAR Data. __`arxiv`__; __`Pre-training`__; __`Self-supervised representation learning`__; [Paper](https://arxiv.org/abs/2501.04969), [Code](https://github.com/HaoranZhuExplorer/AD-L-JEPA-Release)
* Cosmos World Foundation Model Platform for Physical AI  __`arxiv`__; __`Foundation Model`__; [Paper](https://arxiv.org/abs/2501.03575), [Code](https://github.com/NVIDIA/Cosmos)

#### NeurIPS 2024
*  DrivingDojo Dataset: Advancing Interactive and Knowledge-Enriched Driving World Model __`NeurIPS 2024`__; __`Dataset`__; [Paper](https://proceedings.neurips.cc/paper_files/paper/2024/file/178f4666a84ecdd61e3b85145ed56484-Paper-Datasets_and_Benchmarks_Track.pdf), [Website](https://drivingdojo.github.io/), [Code](https://github.com/Robertwyq/Drivingdojo)
*  Vista: A Generalizable Driving World Model with High Fidelity and Versatile Controllability __`NeurIPS 2024`__; __`from Shanghai AI Lab`__;  __`Generative AI`__; [Paper](https://proceedings.neurips.cc/paper_files/paper/2024/file/a6a066fb44f2fe0d36cf740c873b8890-Paper-Conference.pdf), [Website](https://opendrivelab.com/Vista/), [Code](https://github.com/OpenDriveLab/Vista)

#### ECCV 2024
* DriveDreamer: Towards Real-world-driven World Models for Autonomous Driving __`ECCV 2024`__; __`Generative AI`__; [Paper](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/06416.pdf), [Website](https://drivedreamer.github.io/), [Code](https://github.com/JeffWang987/DriveDreamer)
* Modelling Competitive Behaviors in Autonomous Driving Under Generative World Model __`ECCV 2024`__; __`RL`__; __`Trajectories Simulation`__; [Paper](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/05085.pdf), [Code to be released](https://github.com/qiaoguanren/MARL-CCE)
* NeMo: Neural Volumetric World Models for Autonomous Driving __`ECCV 2024`__; __`End-to-End AD`__; __`Motion Planning `__; [Paper](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02571.pdf)
* OccWorld: Learning a 3D Occupancy World Model for Autonomous Driving __`ECCV 2024`__; __`Occupancy Forecasting`__; __`Motion Planning`__; [Paper](https://arxiv.org/pdf/2311.16038.pdf), [Code](https://github.com/wzzheng/OccWorld)
* Think2Drive: Efficient Reinforcement Learning by Thinking with Latent World Model for Autonomous Driving (in CARLA-v2)  __`ECCV 2024`__;  __`RL`__; [Paper](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/06129.pdf), [Website](https://thinklab-sjtu.github.io/CornerCaseRepo/)
* FipTR: A Simple yet Effective Transformer Framework for Future Instance Prediction in Autonomous Driving __`ECCV 2024`__; __`Future Instance Prediction`__; [Paper](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/11758.pdf), [Code](https://github.com/TabGuigui/FipTR)
* DrivingDiffusion: Layout-Guided multi-view driving scene video generation with latent diffusion model __`ECCV 2024`__; __`Generative AI`__ [Paper](https://arxiv.org/pdf/2310.07771.pdf), [Code](https://github.com/shalfun/DrivingDiffusion)

#### CVPR 2024
* Drive-WM: Driving into the Future: Multiview Visual Forecasting and Planning with World Model for Autonomous Driving __`CVPR 2024`__; __`Generative AI`__; __`Planning`__; [Paper](https://arxiv.org/pdf/2311.17918.pdf), [Website](https://drive-wm.github.io/), [Code](https://github.com/BraveGroup/Drive-WM)
* DriveWorld: 4D Pre-trained Scene Understanding via World Models for Autonomous Driving  __`CVPR 2024`__;  __`Pre-training`__; [Paper](https://arxiv.org/pdf/2405.04390)
* Cam4DOcc: Benchmark for Camera-Only 4D Occupancy Forecasting in Autonomous Driving Applications  __`CVPR 2024`__;  __`Occupancy Forecasting `__; [Paper](https://arxiv.org/abs/2311.17663), [Code](https://github.com/haomo-ai/Cam4DOcc)
* GenAD: Generalized Predictive Model for Autonomous Driving __`CVPR 2024`__;  __`from Shanghai AI Lab`__ __`Generative AI`__; [Paper](https://arxiv.org/pdf/2403.09630.pdf), [Code](https://github.com/OpenDriveLab/DriveAGI)
* ViDAR: Visual Point Cloud Forecasting enables Scalable Autonomous Driving  __`CVPR 2024`__; __`Pre-training`__;  __`from Shanghai AI Lab`__; __`NuScenes dataset`__ [Paper](https://arxiv.org/pdf/2312.17655), [Code](https://github.com/OpenDriveLab/ViDAR)
* UnO: Unsupervised Occupancy Fields for Perception and Forecasting __`CVPR 2024`__; __`Occupancy Forecasting`__; __`Pre-training`__; [Paper](https://arxiv.org/pdf/2406.08691)

#### ICLR 2024
* Copilot4D: Learning Unsupervised World Models for Autonomous Driving via Discrete Diffusion __`ICLR 2024`__; __`Future Point Cloud Prediction`__; __`from Waabi`__; [Paper](https://arxiv.org/abs/2311.01017)

#### ICRA 2024
* Mitigating Covariate Shift in Imitation Learning for Autonomous Vehicles Using Latent Space Generative World Models  __`ICRA 2024`__; __`Planning`__ [Paper](https://arxiv.org/abs/2409.16663)

#### Others
* InfinityDrive: Breaking Time Limits in Driving World Models __`arxiv 2024`__; __`Generative AI`__; [Paper](https://arxiv.org/abs/2412.01522v1), [Website](https://metadrivescape.github.io/papers_project/InfinityDrive/page.html)
* DriveDreamer4D: World Models Are Effective Data Machines for 4D Driving Scene Representation __`arxiv 2024`__; __`Generative AI`__; __`4D Simulation`__; [Paper](https://arxiv.org/pdf/2410.13571), [Website](https://drivedreamer4d.github.io/), [Code](https://github.com/GigaAI-research/DriveDreamer4D)
* ReconDreamer: Crafting World Models for Driving Scene Reconstruction via Online Restoration __`arxiv 2024`__; __`Generative AI`__; __`4D Simulation`__; [Paper](https://arxiv.org/abs/2411.19548), [Website](https://recondreamer.github.io/), [Code](https://github.com/GigaAI-research/ReconDreamer)
* 2024-DrivingWorld: Constructing World Model for Autonomous Driving via Video GPT. [Paper](https://arxiv.org/abs/2412.19505)  [Project Page](https://huxiaotaostasy.github.io/DrivingWorld/index.html) [Code](https://github.com/YvanYin/DrivingWorld)
* 2024-DOME: Taming Diffusion Model into High-Fidelity Controllable Occupancy World Model. [Paper](https://arxiv.org/abs/2410.10429)  [Project Page](https://gusongen.github.io/DOME)
* 2024-OccLLaMA: An Occupancy-Language-Action Generative World Model for Autonomous Driving [Paper](https://www.arxiv.org/abs/2409.03272)
* 2024-BEVWorld: A Multimodal World Model for Autonomous Driving via Unified BEV Latent Space  __`arxiv`__ [Paper](https://arxiv.org/abs/2407.05679)
* 2024-Planning with Adaptive World Models for Autonomous Driving  __`arxiv`__; __`Planning`__; [Paper](https://arxiv.org/pdf/2406.10714)
* 2024-OccSora: 4D Occupancy Generation Models as World Simulators for Autonomous Driving [Paper](https://arxiv.org/ab/2405.20337), [Code](https://github.com/wzzheng/OccSora)

### Before 2023
* 2023-ADriver-I: A General World Model for Autonomous Driving __`arxiv`__; __`Generative AI`__; __`NuScenes & one private dataset`__ [Paper](https://arxiv.org/pdf/2311.13549.pdf)
* 2023-GAIA-1: A Generative World Model for Autonomous Driving __`arxiv`__; __`Generative AI`__; __`Wayve's private data`__ [Paper](https://arxiv.org/pdf/2309.17080.pdf)
* 2023-Neural World Models for Computer Vision __'PhD Thesis'__; __`from Wayve`__  [Paper](https://arxiv.org/pdf/2306.09179)
* 2022-Separating the World and Ego Models for Self-Driving __` ICLR 2022 workshop on Generalizable Policy Learning in the Physical World`__; __`from Yann Lecun's Group`__ [Paper](https://arxiv.org/abs/2204.07184), [Code](https://github.com/vladisai/pytorch-ppuu)
* 2022-SEM2: Enhance Sample Efficiency and Robustness of End-to-end Urban Autonomous Driving via Semantic Masked World Model  __`NeurIPS 2022 Deep Reinforcement Learning Workshop`__; __`RL`__; __`CARLA dataset`__ [Paper](https://arxiv.org/pdf/2210.04017.pdf)
* 2022-MILE: Model-Based Imitation Learning for Urban Driving __`NeurIPS 2022`__; __`RL`__; __`from Wayve`__ [Paper](https://arxiv.org/pdf/2210.07729.pdf), [Code](https://github.com/wayveai/mile)
* 2022-Iso-Dream: Isolating and Leveraging Noncontrollable Visual Dynamics in World Models __`NeurIPS 2022`__ [Paper](https://arxiv.org/pdf/2205.13817.pdf), [Code](https://github.com/panmt/iso-dream)
* 2021-FIERY: Future Instance Prediction in Bird's-Eye View from Surround Monocular Cameras __`ICCV 2019`__; __`Future Prediction`__; __`from Wayve`__; __`NuScenes, Lyft datasets`__ [Paper](https://openaccess.thecvf.com/content/ICCV2021/papers/Hu_FIERY_Future_Instance_Prediction_in_Birds-Eye_View_From_Surround_Monocular_ICCV_2021_paper.pdf), [Code](https://github.com/wayveai/fiery)
* 2021-Learning to drive from a world on rails __`CVPR 2021 Oral`__; __`RL`__ [Paper](https://arxiv.org/pdf/2105.00636.pdf), [Project Page](https://dotchen.github.io/world_on_rails/), [Code](https://github.com/dotchen/WorldOnRails)
* 2019-Model-Predictive Policy Learning with Uncertainty Regularization for Driving in Dense Traffic __`ICLR 2019`__; __`Future Prediction`__; __`from Yann Lecun's Group`__ [Paper](https://github.com/Atcold/pytorch-PPUU?tab=readme-ov-file), [Code](https://github.com/Atcold/pytorch-PPUU)

## Workshops/Challenges
* 2024-1X World Model Challenge  __`Challenges`__ [Link](https://github.com/1x-technologies/1xgpt)
* 2024-CVPR Workshop, Foundation Models for Autonomous Systems, Challenges, Track 4: Predictive World Model __`Challenges`__ [Link](https://opendrivelab.com/challenge2024/)

## Tutorials/Talks/
* 2023 __`from Wayve`__; [Video](https://www.youtube.com/watch?v=lNOs08byOhw)
* 2022-Neural World Models for Autonomous Driving [Video](https://www.youtube.com/watch?v=wMvYjiv6EpY)

## Surveys that Contain World Models for AD
* 2025-A Survey of World Models for Autonomous Driving __`arxiv`__ [Paper](https://arxiv.org/abs/2501.11260)
* 2024-World Models for Autonomous Driving: An Initial Survey __`arxiv`__ [Paper](https://arxiv.org/abs/2403.02622)
* 2024-Data-Centric Evolution in Autonomous Driving: A Comprehensive Survey of Big
Data System, Data Mining, and Closed-Loop Technologies __`arxiv`__ [Paper](https://arxiv.org/pdf/2401.12888.pdf)
* 2024-Forging Vision Foundation Models for Autonomous Driving: Challenges, Methodologies, and Opportunities __`arxiv`__ [Paper](https://arxiv.org/pdf/2401.08045.pdf)

## Other General World Model Papers
* 2025-Intuitive physics understanding emerges from self-supervised pretraining on natural videos [Paper](https://arxiv.org/abs/2502.11831v1), [Code](https://github.com/facebookresearch/jepa-intuitive-physics)
* 2025-Do generative video models learn physical principles from watching videos? [Paper](https://arxiv.org/abs/2501.09038), [Code](https://github.com/google-deepmind/physics-IQ-benchmark), [Website](https://physics-iq.github.io/)
* 2024-PreLAR: World Model Pre-training with Learnable Action Representation __`ECCV 2024`__; __`Pretraining`__; __`RL`__; [Paper](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03363.pdf), [Code](https://github.com/zhanglixuan0720/PreLAR)
* 2024-Understanding Physical Dynamics with Counterfactual World Modeling __`ECCV 2024`__; [Paper](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03523.pdf), [Website](https://neuroailab.github.io/cwm-physics/), [Code](https://github.com/neuroailab/cwm_dynamics)
* 2024-Genie2: [Website](https://deepmind.google/discover/blog/genie-2-a-large-scale-foundation-world-model/)
* 2024-WHALE: Towards Generalizable and Scalable World Models for Embodied Decision-making [Paper](https://arxiv.org/abs/2411.05619)
* 2024-How Far is Video Generation from World Model: A Physical Law Perspective [Paper](https://arxiv.org/abs/2411.02385)
* 2024-PIVOT-R: Primitive-Driven Waypoint-Aware World Model for Robotic Manipulation  __`NeurIPS 2024`__ [Paper](https://arxiv.org/abs/2410.10394)
* 2024-RoboDreamer: Learning Compositional World Models for Robot Imagination [Paper](https://arxiv.org/abs/2404.12377)
* 2024-TD-MPC2: Scalable, Robust World Models for Continuous Control __`ICLR 2024`__ [Paper](https://openreview.net/pdf?id=Oxh5CstDJU)
* 2024-Hierarchical World Models as Visual Whole-Body Humanoid Controllers [Paper](https://arxiv.org/pdf/2405.18418)
* 2024-Efficient World Models with Time-Aware and Context-Augmented Tokenization __`ICML 2024`__
* 2024-3D-VLA: A 3D Vision-Language-Action Generative World Model __`ICML 2024`__ [Paper](https://arxiv.org/pdf/2403.09631.pdf)
* 2024-Newton from Archetype AI __`website`__ [Link](https://www.archetypeai.io/blog/introducing-archetype-ai---understand-the-real-world-in-real-time)
* 2024-MagicTime: Time-lapse Video Generation Models as Metamorphic Simulators __`arxiv`__ [Paper](https://arxiv.org/pdf/2404.05014.pdf), [Code](https://github.com/PKU-YuanGroup/MagicTime)
* 2024-IWM: Learning and Leveraging World Models in Visual Representation Learning  __`arxiv`__, __`from Yann Lecun's Group`__ [Paper](https://arxiv.org/pdf/2403.00504.pdf)
* 2024-Video as the New Language for Real-World Decision Making __`arxiv`__, __`Deepmind`__ [Paper](https://arxiv.org/abs/2402.17139)
* 2024-Genie: Generative Interactive Environments __`Deepmind`__ [Paper](https://arxiv.org/abs/2402.15391v1), [Website](https://sites.google.com/view/genie-2024/home)
* 2024-Sora __`OpenAI`__, __`Generative AI`__ [Link](https://openai.com/sora), [Technical Report](https://openai.com/research/video-generation-models-as-world-simulators)
* 2024-LWM: World Model on Million-Length Video And Language With RingAttention __`arxiv`__; __`Generative AI`__ [Paper](https://arxiv.org/abs/2402.08268), [Code](https://github.com/LargeWorldModel/LWM)
* 2024-WorldDreamer: Towards General World Models for Video Generation via Predicting Masked Tokens __`arxiv`__; __`Generative AI`__ [Paper](https://arxiv.org/abs/2401.09985)
* 2024-Video prediction models as rewards for reinforcement learning __`NeurIPS 2024`__ [Paper](https://proceedings.neurips.cc/paper_files/paper/2023/file/d9042abf40782fbce28901c1c9c0e8d8-Paper-Conference.pdf), [Code](https://github.com/Alescontrela/viper_rl)
* 2024-V-JEPA: Revisiting Feature Prediction for Learning Visual Representations from Video __`from Yann Lecun's Group`__ [Paper](https://ai.meta.com/research/publications/revisiting-feature-prediction-for-learning-visual-representations-from-video/), [Code](https://github.com/facebookresearch/jepa)
* 2023-STORM: Efficient Stochastic Transformer based World Models for Reinforcement Learning  __`NeurIPS 2023`__ [Paper](https://proceedings.neurips.cc/paper_files/paper/2023/file/5647763d4245b23e6a1cb0a8947b38c9-Paper-Conference.pdf), [Code](https://github.com/weipu-zhang/STORM)
* 2023-Facing Off World Model Backbones: RNNs, Transformers, and S4 __`NeurIPS 2023`__ [Paper](https://arxiv.org/abs/2307.02064)
* 2023-I-JEPA: Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture __`CVPR 2023`__; __`from Yann Lecun's Group`__ [Paper](https://arxiv.org/abs/2301.08243), [Code](https://github.com/facebookresearch/ijepa)
* 2023-Temporally Consistent Transformers for Video Generation __`ICML 2023`__ [Paper](https://arxiv.org/abs/2210.02396), [Code](https://github.com/wilson1yan/teco)
* 2023-Learning to Model the World with Language __`arxiv`__ [Paper](https://arxiv.org/abs/2308.01399), [Code](https://github.com/jlin816/dynalang)
* 2023-Transformers are sample-efficient world models __`ICLR 2023`__;__`RL`__ [Paper](https://arxiv.org/pdf/2209.00588.pdf), [Code](https://github.com/eloialonso/iris)
* 2023-Gradient-based Planning with World Models __`arxiv`__; __`from Yann Lecun's Group`__; __`Planning`__; [Paper](https://arxiv.org/pdf/2312.17227)
* 2023-World Models via Policy-Guided Trajectory Diffusion __`arxiv`__; __`RL`__; [Paper](https://arxiv.org/pdf/2312.08533.pdf)
* 2023-DreamerV3: Mastering diverse domains through world models __`arxiv`__;__`RL`__; [Paper](https://arxiv.org/abs/2301.04104), [Code](https://github.com/danijar/dreamerv3)
* 2022-Daydreamer: World models for physical robot learning __`CoRL 2022`__; __`Robotics`__ [Paper](https://arxiv.org/abs/2206.14176), [Code](https://github.com/danijar/daydreamer)
* 2022-Masked World Models for Visual Control __`CoRL 2022`__; __`Robotics`__ [Paper](https://proceedings.mlr.press/v205/seo23a.html), [Code](https://github.com/younggyoseo/MWM)
* 2022-A Path Towards Autonomous Machine Intelligence __`openreview`__; __`from Yann Lecun's Group`__; __`General Roadmap for World Models`__; [Paper](https://openreview.net/forum?id=BZ5a1r-kVsf); [Slides1](https://leshouches2022.github.io/SLIDES/compressed-yann-1.pdf), [Slides2](https://leshouches2022.github.io/SLIDES/lecun-20220720-leshouches-02.pdf), [Slides3](https://leshouches2022.github.io/SLIDES/lecun-20220720-leshouches-03.pdf); [Videos](https://www.youtube.com/playlist?list=PLEIq5bchE3R3Yl5taXdYA04a9kH9yvyGm)
* 2021-LEXA:Discovering and Achieving Goals via World Models __`NeurIPS 2021`__; [Paper](https://proceedings.neurips.cc/paper_files/paper/2021/hash/cc4af25fa9d2d5c953496579b75f6f6c-Abstract.html), [Website & Code](https://orybkin.github.io/lexa/)
* 2021-DreamerV2: Mastering Atari with Discrete World Models __`ICLR 2021`__; __`RL`__; __`from Google & Deepmind`__ [Paper](https://arxiv.org/pdf/2010.02193.pdf), [Code](https://github.com/danijar/dreamerv2)
* 2020-Dreamer: Dream to Control: Learning Behaviors by Latent Imagination __`ICLR 2020`__ [Paper](https://arxiv.org/abs/1912.01603), [Code](https://github.com/google-research/dreamer)
* 2019-Learning Latent Dynamics for Planning from Pixels __`ICML 2019`__ [Paper](https://proceedings.mlr.press/v97/hafner19a/hafner19a.pdf), [Code](https://github.com/google-research/planet)
* 2018-Model-Based Planning with Discrete and Continuous Actions __`arxiv`__; __`RL, Planning`__; __`from Yann Lecun's Group`__;  [Paper](https://arxiv.org/pdf/1705.07177)
* 2018-Recurrent world models facilitate policy evolution __`NeurIPS 2018`__; [Paper](https://papers.nips.cc/paper_files/paper/2018/file/2de5d16682c3c35007e4e92982f1a2ba-Paper.pdf), [Code](https://github.com/hardmaru/WorldModelsExperiments)

## Other Related Papers
* 2023-Occupancy Prediction-Guided Neural Planner for Autonomous Driving __`ITSC 2023`__; __`Planning, Neural Predicted-Guided Planning`__; __`Waymo Open Motion dataset`__ [Paper](https://arxiv.org/abs/2305.03303)

## Other Related Repos
[Awesome-World-Model](https://github.com/LMD0311/Awesome-World-Model),
[Awesome-World-Models-for-AD ](https://github.com/zhanghm1995/awesome-world-models-for-AD?tab=readme-ov-file#Table-of-Content),
[World models paper list from Shanghai AI lab](https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving/blob/main/papers.md#world-model--model-based-rl),
[Awesome-Papers-World-Models-Autonomous-Driving](https://github.com/chaytonmin/Awesome-Papers-World-Models-Autonomous-Driving).

#### ■ 2D Scene Generation

+ 👍(2023 Arxiv) GAIA-1: A generative world model for autonomous driving [[Paper](https://arxiv.org/abs/2309.17080)][[Blog](https://wayve.ai/thinking/scaling-gaia-1/)] (Wayve)
* (2023 CVPR 2023 workshop) [[Video](https://www.youtube.com/watch?v=6x-Xb_uT7ts)] (Tesla)
* 👍(2023 Arxiv) DriveDreamer: Towards Real-world-driven World Models for Autonomous Driving [[Paper](https://drivedreamer.github.io/)][[Code](https://github.com/JeffWang987/DriveDreamer)] (GigaAI)
* (2023 Arxiv) ADriver-I: A General World Model for Autonomous Driving [[Paper](https://arxiv.org/abs/2311.13549)] (MEGVII)
* 👍(2023 Arxiv) DrivingDiffusion: Layout-Guided multi-view driving scene video generation with latent diffusion model [[Paper](https://arxiv.org/abs/2310.07771)] (Baidu)
* (2023 Arxiv) Panacea: Panoramic and Controllable Video Generation for Autonomous Driving [[Paper](https://panacea-ad.github.io/)][[Code](https://github.com/wenyuqing/panacea)] (MEGVII)
* 👍(2024 CVPR) Drive-WM: Driving into the Future: Multiview Visual Forecasting and Planning with World Model for Autonomous Driving [[Paper](https://drive-wm.github.io/)][[Code](https://github.com/BraveGroup/Drive-WM)] (CASIA)
* (2023 Arxiv) WoVoGen: World Volume-aware Diffusion for Controllable Multi-camera Driving Scene Generation [[Paper](https://arxiv.org/abs/2312.02934)] (Fudan)
* (2024 Arxiv) DriveDreamer-2: LLM-Enhanced World Models for Diverse Driving Video Generation [[Paper](https://drivedreamer2.github.io/)][[Code](https://github.com/f1yfisher/DriveDreamer2)] (GigaAI)
* (2024 CVPR) GenAD: Generalized Predictive Model for Autonomous Driving [[Paper](https://arxiv.org/abs/2403.09630)][[Code](https://github.com/OpenDriveLab/DriveAGI?tab=readme-ov-file)] (Shanghai AI Lab)
* (2024 Arxiv) SubjectDrive: Scaling Generative Data in Autonomous Driving via Subject Control [[Paper](https://subjectdrive.github.io/)] (MEGVII)

#### ■ 3D Scene Generation

+ 👍(2024 ICLR) Copilot4D:Learning unsupervised world models for autonomous driving via discrete diffusion [[Paper](https://arxiv.org/abs/2311.01017)] (Waabi)
* (2023 Arxiv) OccWorld: Learning a 3D Occupancy World Model for Autonomous Driving [[Paper](https://arxiv.org/abs/2311.16038)][[Code](https://github.com/wzzheng/OccWorld)] (THU)
* (2023 Arxiv) MUVO: A Multimodal Generative World Model for Autonomous Driving with Geometric Representations [[Paper](https://arxiv.org/abs/2311.11762)] (KIT)
* (2024 Arxiv) LidarDM: Generative LiDAR Simulation in a Generated World [[Paper](https://www.zyrianov.org/lidardm/)][[Code](https://github.com/vzyrianov/lidardm)] (MIT)

#### ■ 4D Pre-training for Autonomous Driving

* (2024 Arxiv)-DriveDreamer4D: World Models Are Effective Data Machines for 4D Driving Scene Representation [Paper](https://arxiv.org/pdf/2410.13571)
* (2024 CVPR) ViDAR: Visual Point Cloud Forecasting enables Scalable Autonomous Driving [[Paper](https://arxiv.org/abs/2312.17655)][[Code](https://github.com/OpenDriveLab/ViDAR)] (Shanghai AI Lab)
* 👍(2024 CVPR) DriveWorld: 4D Pre-trained Scene Understanding via World Models for Autonomous Driving [（原记录未附论文链接）] (PKU)

### ■ End-to-end Driving based on World Models

+ 👍(2022 NeurIPS) Iso-Dream: Isolating and Leveraging Noncontrollable Visual Dynamics in World Models [[Paper](https://proceedings.neurips.cc/paper_files/paper/2022/hash/9316769afaaeeaad42a9e3633b14e801-Abstract-Conference.html)] (SJTU)
* 👍(2022 NeurIPS) MILE: Model-Based Imitation Learning for Urban Driving [[Paper](https://proceedings.neurips.cc/paper_files/paper/2022/hash/827cb489449ea216e4a257c47e407d18-Abstract-Conference.html)][[Code](https://github.com/wayveai/mile)] (Wayve)
* (2022 NeurIPS Deep RL Workshop) SEM2: Enhance Sample Efficiency and Robustness of End-to-end Urban Autonomous Driving via Semantic Masked World Model [[Paper](https://arxiv.org/abs/2210.04017)] (HIT & THU)
* (2023 ICRA) TrafficBots: Towards World Models for Autonomous Driving Simulation and Motion Prediction [[Paper](https://ieeexplore.ieee.org/abstract/document/10161243)] (ETH Zurich)
* (2024 Arxiv) Think2Drive: Efficient Reinforcement Learning by Thinking in Latent World Model for Quasi-Realistic Autonomous Driving (in CARLA-v2) [[Paper](https://arxiv.org/abs/2402.16720)] (SJTU)

![world model](/notes/world-model-reading-list/ad.png)

## Papers
* 2024-DriveDreamer4D: World Models Are Effective Data Machines for 4D Driving Scene Representation [Paper](https://arxiv.org/pdf/2410.13571)
* 2024-DrivingDojo Dataset: Advancing Interactive and Knowledge-Enriched Driving World Model [Paper](https://arxiv.org/abs/2410.10738)  __`Dataset`__
* 2024-Mitigating Covariate Shift in Imitation Learning for Autonomous Vehicles Using Latent Space Generative World Models [Paper](https://arxiv.org/abs/2409.16663)  __`Planning`__
* 2024-OccLLaMA: An Occupancy-Language-Action Generative World Model for Autonomous Driving [Paper](https://www.arxiv.org/abs/2409.03272)
* 2024-Drive-OccWorld: Driving in the Occupancy World: Vision-Centric 4D Occupancy Forecasting and Planning via World Models for Autonomous Driving [Paper](https://arxiv.org/pdf/2408.14197)
* 2024-CarFormer: Self-Driving with Learned Object-Centric Representations  __`ECCV 2024`__ [Paper](https://arxiv.org/pdf/2407.15843)
* 2024-BEVWorld: A Multimodal World Model for Autonomous Driving via Unified BEV Latent Space  __`arxiv`__ [Paper](https://arxiv.org/pdf/2407.05679v1)
* 2024-Planning with Adaptive World Models for Autonomous Driving  __`arxiv`__; __`Planning`__; [Paper](https://arxiv.org/pdf/2406.10714)
* 2024-UnO: Unsupervised Occupancy Fields for Perception and Forecasting [Paper](https://arxiv.org/pdf/2406.08691)
* 2024-LAW: Enhancing End-to-End Autonomous Driving with Latent World Model [Paper](https://arxiv.org/pdf/2406.08481)
* 2024-OccSora: 4D Occupancy Generation Models as World Simulators for Autonomous Driving [Paper](https://arxiv.org/ab/2405.20337), [Code](https://github.com/wzzheng/OccSora)
* 2024-Delphi: Unleashing Generalization of End-to-End Autonomous Driving with Controllable Long Video Generation [Paper](https://arxiv.org/abs/2406.01349)
* 👍2024-Vista: A Generalizable Driving World Model with High Fidelity and Versatile Controllability __`NeurIPS 2024`__; __`from Shanghai AI Lab`__ [Paper](https://arxiv.org/pdf/2405.17398)
* 2024-DriveWorld: 4D Pre-trained Scene Understanding via World Models for Autonomous Driving  __`CVPR 2024`__;  __[Paper](https://arxiv.org/pdf/2405.04390),
* 2024-UniPAD: A Universal Pre-training Paradigm for Autonomous Driving __`CVPR 2024`__;  __`from Shanghai AI Lab`__ [Paper](https://arxiv.org/abs/2310.08370), [Code](https://github.com/Nightmare-n/UniPAD)
* 2024-GenAD: Generalized Predictive Model for Autonomous Driving __`CVPR 2024`__;  __`from Shanghai AI Lab`__ [Paper](https://arxiv.org/pdf/2403.09630.pdf)
* 2024-Think2Drive: Efficient Reinforcement Learning by Thinking in Latent World Model for Quasi-Realistic Autonomous Driving  __`arxiv`__ [Paper](https://arxiv.org/pdf/2402.16720.pdf)
* 2024-ViDAR: Visual Point Cloud Forecasting enables Scalable Autonomous Driving  __`CVPR 2024`__; __`Pre-training`__;  __`from Shanghai AI Lab`__; __`NuScenes dataset`__ [Paper](https://arxiv.org/pdf/2312.17655), [Code](https://github.com/OpenDriveLab/ViDAR)
* 2024-Copilot4D: Learning Unsupervised World Models for Autonomous Driving via Discrete Diffusion __`ICLR 2024`__; __`Future Prediction`__; __`from Waabi`__; __`NuScenes, KITTI Odemetry, Argoverse2 Lidar datasets`__  [Paper](https://arxiv.org/abs/2311.01017)
* 2023-DrivingDiffusion: Layout-Guided multi-view driving scene video generation with latent diffusion model __`arxiv`__; __`Generative AI`__ [Paper](https://arxiv.org/pdf/2310.07771.pdf), [Code](https://github.com/shalfun/DrivingDiffusion)
* 2023-MUVO: A Multimodal Generative World Model for Autonomous Driving with Geometric Representations __`arxiv`__; __`Pre-training`__; __`CARLA dataset`__ [Paper](https://arxiv.org/pdf/2311.11762.pdf)
* 2023-Driving into the Future: Multiview Visual Forecasting and Planning with World Model for Autonomous Driving __`arxiv`__; __`Generative AI, Planning`__; __`NuScenes and Waymo datasets`__ [Paper](https://arxiv.org/pdf/2311.17918.pdf)
* 2023-ADriver-I: A General World Model for Autonomous Driving __`arxiv`__; __`Generative AI`__; __`NuScenes & one private dataset`__ [Paper](https://arxiv.org/pdf/2311.13549.pdf)
* 2023-OccWorld: Learning a 3D Occupancy World Model for Autonomous Driving __`arxiv`__; __`Occupancy Future Prediction, Planning`__; __`Occ3D dataset for Occupancy Future Prediction, NuScenes for motion planning`__ [Paper](https://arxiv.org/pdf/2311.16038.pdf), [Code](https://github.com/wzzheng/OccWorld)
* 2023-GAIA-1: A Generative World Model for Autonomous Driving __`arxiv`__; __`Generative AI`__; __`Wayve's private data`__ [Paper](https://arxiv.org/pdf/2309.17080.pdf)

  Related papers & tutorials to understand this paper:

  FDM for video diffusion decoder: [Paper](https://proceedings.neurips.cc/paper_files/paper/2022/file/b2fe1ee8d936ac08dd26f2ff58986c8f-Paper-Conference.pdf), [Code](https://github.com/plai-group/flexible-video-diffusion-modeling)

  Denoising diffusion tutorials: [CVPR 2022 tutorial](https://www.youtube.com/watch?v=cS6JQpEY9cs), [class from UC Berkeley](https://www.youtube.com/watch?v=687zEGODmHA), [Video](https://www.youtube.com/watch?v=pea3sH6orMc)

* 2023-DriveDreamer: Towards Real-world-driven World Models for Autonomous Driving __`arxiv`__; __`Generative AI`__; __`NuScenes dataset`__ [Paper](https://arxiv.org/pdf/2309.09777.pdf), [Code (To be released soon)](https://github.com/JeffWang987/DriveDreamer)
* 2023-Neural World Models for Computer Vision __'PhD Thesis'__; __`from Wayve`__  [Paper](https://arxiv.org/pdf/2306.09179)
* 2023-UniWorld: Autonomous Driving Pre-training via World Models __`arxiv`__; __`Pre-training`__; __`NuScenes dataset`__ [Paper](https://arxiv.org/pdf/2308.07234.pdf)
* 2022-Separating the World and Ego Models for Self-Driving __`ICLR 2022 workshop on Generalizable Policy Learning in the Physical World`__; __`from Yann Lecun's Group`__ [Paper](https://arxiv.org/abs/2204.07184), [Code](https://github.com/vladisai/pytorch-ppuu)
* 2022-SEM2: Enhance Sample Efficiency and Robustness of End-to-end Urban Autonomous Driving via Semantic Masked World Model  __`NeurIPS 2022 Deep Reinforcement Learning Workshop`__; __`RL`__; __`CARLA dataset`__ [Paper](https://arxiv.org/pdf/2210.04017.pdf)
* 2022-MILE: Model-Based Imitation Learning for Urban Driving __`NeurIPS 2022`__; __`RL`__; __`from Wayve`__ [Paper](https://arxiv.org/pdf/2210.07729.pdf), [Code](https://github.com/wayveai/mile)
* 2022-Iso-Dream: Isolating and Leveraging Noncontrollable Visual Dynamics in World Models __`NeurIPS 2022`__ [Paper](https://arxiv.org/pdf/2205.13817.pdf), [Code](https://github.com/panmt/iso-dream)
* 2021-FIERY: Future Instance Prediction in Bird's-Eye View from Surround Monocular Cameras __`ICCV 2019`__; __`Future Prediction`__; __`from Wayve`__; __`NuScenes, Lyft datasets`__ [Paper](https://openaccess.thecvf.com/content/ICCV2021/papers/Hu_FIERY_Future_Instance_Prediction_in_Birds-Eye_View_From_Surround_Monocular_ICCV_2021_paper.pdf), [Code](https://github.com/wayveai/fiery)
* 2021-Learning to drive from a world on rails __`CVPR 2021 Oral`__; __`RL`__ [Paper](https://arxiv.org/pdf/2105.00636.pdf), [Project Page](https://dotchen.github.io/world_on_rails/), [Code](https://github.com/dotchen/WorldOnRails)
* 2019-Model-Predictive Policy Learning with Uncertainty Regularization for Driving in Dense Traffic __`ICLR 2019`__; __`Future Prediction`__; __`from Yann Lecun's Group`__ [Paper](https://github.com/Atcold/pytorch-PPUU?tab=readme-ov-file), [Code](https://github.com/Atcold/pytorch-PPUU)


■  ➢ 发现的新的有意思的研究方向-->

生成式的World Model可以被用来当作一种仿真工具来生成仿真数据，特别是极为少见的Corner Case的数据。特别是基于Text to image 的可控条件生成Corner Case，可以进行数据增广，解决真实数据且标注少的现存问题。
然而World Model更有潜力的应用方向是World Model可能会成为像GPT一样的自动驾驶领域的基础模型，而其他自动驾驶具体任务都会围绕这个基础模型进行研发构建。
重点阅读vista
还有一篇是新出的数据集可以进行复现。

## ■  ➢可控条件生成-->

* ○ 可控条件生成-->magicdrive <https://github.com/cure-lab/MagicDrive>   [[paper](https://arxiv.org/abs/2310.02601)] [[Code](https://github.com/cure-lab/MagicDrive)]可作为baseline. 从几何标注中合成的数据可以帮助下游任务,如2D目标检测。因此,本文探讨了text-to-image (T2I)扩散模型在生成街景图像并惠及下游3D感知模型方面的潜力。
* ○ 可控条件生成-->magicdrive3D  [[paper](https://arxiv.org/abs/2405.14475)] [[Code](https://github.com/flymin/MagicDrive3D)]
* ○ 可控条件生成-->panacea <https://zhuanlan.zhihu.com/p/684249231>用于生成多视角且可控的驾驶场景视频，能够合成无限数量的多样化、带标注的样本，这对于自动驾驶的进步有至关重要的意义。 Panacea解决了两个关键挑战：“一致性”和“可控性”。一致性确保时间和视角的一致性，而可控性确保生成的内容与相应的标注对齐。
* ○ 可控条件生成-->drive-WM这是第一个与现有端到端规划模型兼容的自动驾驶世界模型。通过由视角[[主页](https://drive-wm.github.io/)]分解促进的联合空间-时间建模，Drive-WM在驾驶场景中生成高保真度的多视图视频。
* ○ 可控条件生成-->Geodiffusion
* ○ -->Detdiffusion
* ○ 可控条件生成-->BevControl
* ○ 可控条件生成-->BevControl
* ○ 可控条件生成--PerLDiff
* ○ 可控条件生成学习平台--CarDreamer
* ○ 可控条件生成学习平台--DriveArena

## ■  ➢occ世界模型-->

* 2023-Occupancy Prediction-Guided Neural Planner for Autonomous Driving __`ITSC 2023`__; __`Planning, Neural Predicted-Guided Planning`__; __`Waymo Open Motion dataset`__ [Paper](https://arxiv.org/abs/2305.03303)

+ 与occ结合的：occworld、Drive-occword、OccLLaMA、Driving in the Occupancy World: Vision-Centric 4D Occupancy Forecasting and Planning via World Models for Autonomous Driving、OccSora

### 1. DEFINITION

每篇文章的创新点从单一多视角到环视视角、从单一输入到多模态输入来提高生成质量。还有视频生成的时长，以及轨迹预测，基于决策的世界模型方法。需解决时空不一致性和生成场景连续性。

## 通用世界模型补充阅读（旧版本保留）

以下条目来自较早版本，在合并时保留。

* 2024-Pandora: Towards General World Model with Natural Language Actions and Video States [Paper](https://world-model.maitrix.org/assets/pandora.pdf)

## 原始记录

来源：[OpenVisualLab 原始笔记](https://github.com/OpenVisualLab/openvisuallab.github.io/blob/fb1c6c144b87894535f112871d887db0e6af72d4/src/archiver/worldmodel/README.md)。原仓库、版本差异及未完成的记录保留在本地历史档案。
