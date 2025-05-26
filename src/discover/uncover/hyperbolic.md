# Awesome Hyperbolic Representation Learning

A curated list of resources dedicated to hyperbolic representation learning and its applications across various domains. Hyperbolic spaces are particularly suited for representing hierarchical data and tree-like structures, offering advantages over Euclidean embeddings for many complex data types.


https://github.com/samacqua/hyperbolic-vqvae
Hyperbolic space is well fit to reduce the dimensionality of codebook vectors in VQ-VAEs. This repo implements training hyperbolic VQ-VAEs and benchmarks performance on various tasks.
This is the final project for 9.58: Projects in the Science of Intelligence at MIT in the fall of 2022.



## Table of Contents
- [Awesome Hyperbolic Representation Learning](#awesome-hyperbolic-representation-learning)
  - [Table of Contents](#table-of-contents)
  - [Surveys and Tutorials](#surveys-and-tutorials)
  - [Frameworks and Libraries](#frameworks-and-libraries)
  - [Core Methods](#core-methods)
  - [Computer Vision](#computer-vision)
  - [Natural Language Processing](#natural-language-processing)
  - [Graph Representation Learning](#graph-representation-learning)
  - [Recommendation Systems](#recommendation-systems)
  - [Multimodal Learning](#multimodal-learning)
  - [Reinforcement Learning](#reinforcement-learning)
  - [Clustering and Classification](#clustering-and-classification)
  - [Other Applications](#other-applications)
    - [Top-Tier Conferences](#top-tier-conferences)
      - [NeurIPS](#neurips)
      - [CVPR/ICCV/ECCV](#cvpriccveccv)
      - [ICML/ICLR](#icmliclr)
      - [KDD/WWW/WSDM](#kddwwwwsdm)
      - [AAAI/IJCAI](#aaaiijcai)
      - [ACL](#acl)
      - [EMNLP/NAACL](#emnlpnaacl)
      - [CIKM/SIGIR](#cikmsigir)
    - [Other Academic Publications](#other-academic-publications)
      - [Transactions Journals](#transactions-journals)
      - [Computer Graphics \& Robotics](#computer-graphics--robotics)
      - [Audio \& Signal Processing](#audio--signal-processing)
      - [Other Venues](#other-venues)
    - [Tools \& Libraries](#tools--libraries)
    - [Preprints \& Others](#preprints--others)
  - [Contributing](#contributing)
  - [Citation](#citation)
  - [License](#license)

## Surveys and Tutorials

- [Awesome-Hyperbolic-Representation-and-Deep-Learning](https://github.com/marlin-codes/Awesome-Hyperbolic-Representation-and-Deep-Learning) - Comprehensive survey of hyperbolic representation learning methods
- [Hyperbolic Collection](https://github.com/LiuChuang0059/) - A collection of papers on Hyperbolic embedding and Hyperbolic Neural Network
- [ECCV 2022 Tutorial](https://github.com/MinaGhadimiAtigh/hyperbolic_representation_learning) - Hyperbolic Representation Learning for Computer Vision (ECCV 2022)
- [Hyperbolic Graph Learning](https://hyperbolicgraphlearning.github.io/) - A tutorial site for hyperbolic graph representation learning

## Frameworks and Libraries

- [GraphZoo](https://github.com/reddy-lab/GraphZoo) - A framework that systematizes learning, using, and designing graph processing pipelines/models
- [Hyperbolic Geometry Library](https://github.com/cduck/hyperbolic) - Python library for generating hyperbolic geometry and drawing with drawsvg (Poincaré disk and half-plane models)

## Core Methods

_Fundamental techniques and approaches for learning in hyperbolic spaces_

- [Poincaré Embeddings](https://github.com/facebookresearch/PoincareMaps) - Poincaré embeddings for learning hierarchical representations (2017)
- [Hyperbolic Cones](https://github.com/dalab/hyperbolic_cones) - Hyperbolic Entailment Cones for Learning Hierarchical Embeddings (ICML 2018)
- [Hyperbolics](https://github.com/HazyResearch/hyperbolics) - Representation Tradeoffs for Hyperbolic Embeddings and Mixed-Curvature Representations in Product Spaces
- [HoroPCA](https://github.com/HazyResearch/HoroPCA) - Hyperbolic Dimensionality Reduction via Horospherical Projections (ICML 2021)
- [Hyperbolic Neural Networks++](https://github.com/mil-tokyo/hyperbolic_nn_plusplus) - Enhanced hyperbolic neural networks (ICLR 2021)
- [QH-Optim](https://github.com/facebookresearch/qhoptim) - Quasi-hyperbolic momentum and Adam for deep learning (ICLR 2019)
- [Hyperbolic Busemann Learning](https://github.com/MinaGhadimiAtigh/Hyperbolic-Busemann-Learning) - Hyperbolic Busemann Learning with Ideal Prototypes (NeurIPS 2021)
- [Unsupervised Hyperbolic Metric Learning](https://github.com/JiexiYan/UnHyperML) - UnHyperML: Unsupervised Hyperbolic Metric Learning (CVPR 2021)

## Computer Vision

_Applications of hyperbolic geometry in computer vision tasks_

- [Hyperbolic Image Embeddings](https://github.com/leymir/hyperbolic-image-embeddings) - Hyperbolic Image Embeddings (CVPR 2020)
- [Hyperbolic Image Segmentation](https://github.com/MinaGhadimiAtigh/HyperbolicImageSegmentation) - Hyperbolic Image Segmentation (CVPR 2022)
- [Hyperbolic CV](https://github.com/kschwethelm/HyperbolicCV) - Fully Hyperbolic Convolutional Neural Networks for Computer Vision (ICLR 2024)
- [Hyperbolic Chamfer Distance](https://github.com/ark1234/ICCV2023-HyperCD) - Hyperbolic Chamfer Distance for Point Cloud Completion (ICCV 2023)
- [HyCoRe](https://github.com/diegovalsesia/HyCoRe) - Rethinking the compositionality of point clouds through regularization in the hyperbolic space (NeurIPS 2022)
- [Hyperbolic ZSL](https://github.com/ShaoTengLiu/Hyperbolic_ZSL) - Hyperbolic Visual Embedding Learning for Zero-Shot Recognition (CVPR 2020)
- [HypLiLoc](https://github.com/sijieaaa/HypLiLoc) - HypLiLoc: Towards Effective LiDAR Pose Regression with Hyperbolic Fusion (CVPR 2023)
- [HPR](https://github.com/Jonathan-UCAS/HPR) - Hyperbolic Prototype Rectification for Few-Shot 3D Point Cloud Classification (PR 2025)
- [Tree-Changes-Detection](https://github.com/liyantett/Tree-Changes-Detection-with-Siamese-Hyperbolic-network) - Deep Change Monitoring: A Hyperbolic Representative Learning Framework and a Dataset for Long-term Fine-grained Tree Change Detection (arXiv 2025)
- [HyperbolicReasoning](https://github.com/AinkaranSanthi/HyperbolicReasoning) - Robust Hierarchical Symbolic Explanations in Hyperbolic Space for Image Classification (CVPR Workshop 2023)
- [HHCH](https://github.com/HUST-IDSM-AI/HHCH) - Exploring Hierarchical Information in Hyperbolic Space for Self-Supervised Image Hashing (TIP 2024)

## Natural Language Processing

_Hyperbolic embeddings for language understanding and processing_

- [HypEmo](https://github.com/dinobby/HypEmo) - Label-Aware Hyperbolic Embeddings for Fine-grained Emotion Classification (ACL 2023)
- [HyperMatch](https://github.com/MySong7NLPer/HyperMatch) - Hyperbolic Relevance Matching for Neural Keyphrase Extraction (NAACL 2022)
- [Hyperbolic Label Embeddings](https://github.com/soumyac1999/hyperbolic-label-emb-for-hmc) - Joint Learning of Hyperbolic Label Embeddings for Hierarchical Multi-label Classification (EACL 2021)
- [Hyphen](https://github.com/LCS2-IIITD/Hyphen) - Discourse-Aware Hyperbolic Fourier Co-Attention for Social-Text Classification (NeurIPS 2022)
- [Fine-Grained Entity Typing](https://github.com/nlpAThits/figet-hyperbolic-space) - Fine-Grained Entity Typing in Hyperbolic Space (ACL 2019)
- [HyperIM](https://github.com/bcol23/HyperIM) - Hyperbolic Interaction Model For Hierarchical Multi-Label Classification
- [Poincare Probe](https://github.com/FranxYao/PoincareProbe) - Probing BERT in Hyperbolic Spaces (ICLR 2021)
- [HyperQA](https://github.com/vanzytay/WSDM2018_HyperQA) - Hyperbolic Representation Learning for Fast and Efficient Neural Question Answering (WSDM 2018)
- [CoSyn](https://github.com/MananSuri27/CoSyn) - CoSyn: Detecting Implicit Hate Speech in Online Conversations Using a Context Synergized Hyperbolic Network (EMNLP 2023)
- [hHTM](https://github.com/YRaoGroup/hHTM) - Hierarchical Topic Modeling via Contrastive Learning and Hyperbolic Embedding (COLING'24)

## Graph Representation Learning

_Methods for representing graph structures in hyperbolic spaces_

- [HGCN](https://github.com/HazyResearch/hgcn) - Hyperbolic Graph Convolutional Networks in PyTorch
- [LSEnet](https://github.com/ZhenhHuang/LSEnet) - Lorentz Structural Entropy Neural Network for Deep Graph Clustering
- [HypDiff](https://github.com/RingBDStack/HypDiff) - Hyperbolic Geometric Latent Diffusion Model for Graph Generation (ICML 2024)
- [DiskNet](https://github.com/tsinghua-fib-lab/DiskNet) - Predicting Long-term Dynamics of Complex Networks via Identifying Skeleton in Hyperbolic Space (KDD 2024)
- [HHNE](https://github.com/ydzhang-stormstout/HHNE) - Hyperbolic Heterogeneous Information Network Embedding (AAAI 2019)
- [HTGN](https://github.com/marlin-codes/HTGN) - Discrete-time Temporal Network Embedding via Implicit Hierarchical Learning in Hyperbolic Space (KDD 2021)
- [Hyperbolic Hierarchical Clustering](https://github.com/nmonath/hyperbolic_hierarchical_clustering) - Gradient-based Hierarchical Clustering using Continuous Representations of Trees in Hyperbolic Space (KDD 2019)
- [SHAN](https://github.com/lijlin26/SHAN) - Simplicial Hyperbolic Attention Network (CIKM 2023)
- [STGN](https://github.com/LuckyGirl-XU/STGN) - Scalable and Effective Temporal Graph Representation Learning With Hyperbolic Geometry (TNNLS 2024)

## Recommendation Systems

_Hyperbolic approaches for recommendation and collaborative filtering_

- [HCMKR](https://github.com/unknown) - Hyperbolic Contrastive Learning with Model-Augmentation for Knowledge-Aware Recommendation (ECML-PKDD 2024)
- [Hyperbolic Recommenders](https://github.com/evfro/HyperbolicRecommenders) - Hyperbolic (ordinary and variational) autoencoders for recommender systems (ACM RecSys 2020)
- [HGCF](https://github.com/layer6ai-labs/HGCF) - HGCF: Hyperbolic Graph Convolution Networks for Collaborative Filtering
- [LGCF](https://github.com/CRIPAC-DIG/LGCF) - Fully Hyperbolic Graph Convolution Network for Recommendation (CIKM 2021)

## Multimodal Learning

_Applying hyperbolic geometry to multiple modalities_

- [Meru](https://github.com/facebookresearch/meru) - Hyperbolic Image-Text Representations (ICML 2023)
- [HyperVD](https://github.com/xiaogangpeng/HyperVD) - Learning Weakly Supervised Audio-Visual Violence Detection in Hyperbolic Space
- [HyCoClip](https://github.com/PalAvik/hycoclip) - Compositional Entailment Learning for Hyperbolic Vision-Language Models (ICLR 2024)

## Reinforcement Learning

_Hyperbolic spaces in reinforcement learning_

- [Hyperbolic-RL](https://github.com/twitter-research/hyperbolic-rl) - 🌟 Hyperbolic reinforcement learning minimal repository

## Clustering and Classification

_Hyperbolic approaches to clustering and classification tasks_

- [HALO](https://github.com/paolomandica/HALO) - Hyperbolic Active Learning for Semantic Segmentation under Domain Shift (ICML 2024)

## Other Applications

_Additional applications of hyperbolic representation learning across various fields_

### Top-Tier Conferences

#### NeurIPS
- [HyperbolicTiling_Learning](https://github.com/ydtydr/HyperbolicTiling_Learning) - Numerically Accurate Hyperbolic Embeddings Using Tiling-Based Models (NeurIPS 2019)
- [Hyperbolic_Feature_Augmentation](https://github.com/zhigao2017/Hyperbolic_Feature_Augmentation) - Hyperbolic Feature Augmentation via Distribution Estimation and Infinite Sampling on Manifolds (NeurIPS 2022)
- [GM-VAE](https://github.com/ml-postech/GM-VAE) - Hyperbolic VAE via Latent Gaussian Distributions (NeurIPS 2023)
- [HMI](https://github.com/xiongbo010/HMI) - Hyperbolic Embedding Inference for Structured Multi-Label Prediction (NeurIPS 2022)
- [HyperbolicProcrustesAnalysis](https://github.com/RonenTalmonLab/HyperbolicProcrustesAnalysis) - Hyperbolic Procrustes Analysis Using Riemannian Geometry (NeurIPS 2021)
- [HypStructure](https://github.com/uiuctml/HypStructure) - Learning Structured Representations with Hyperbolic Embeddings (NeurIPS 2024)

#### CVPR/ICCV/ECCV
- [DiffUDF](https://github.com/LIA-DiTella/DiffUDF) - Differentiable Unsigned Distance Fields with Hyperbolic Scaling (CVPR 2024)
- [CO-SNE](https://github.com/yunhuiguo/CO-SNE) - CO-SNE: Dimensionality Reduction and Visualization for Hyperbolic Data (CVPR 2022)
- [hype](https://github.com/naver-ai/hype) - HYPE: Hyperbolic Entailment Filtering for Underspecified Images and Texts (ECCV 2020)
- [hyperbolic_action](https://github.com/Tenglon/hyperbolic_action) - Searching for actions on the hyperbole (CVPR 2020)
- [HAE](https://github.com/lingxiao-li/HAE) - The Euclidean Space is Evil: Hyperbolic Attribute Editing for Few-shot Image Generation (ICCV 2023)
- [HySAC](https://github.com/aimagelab/HySAC) - 🌟 Hyperbolic Safety-Aware Vision-Language Models (CVPR 2025)

#### ICML/ICLR
- [disk-embedding](https://github.com/lapras-inc/disk-embedding) - Hyperbolic Disk Embeddings for Directed Acyclic Graphs (ICML 2019)
- [LorentzianDistanceRetrieval](https://github.com/MarcTLaw/LorentzianDistanceRetrieval) - Lorentzian Distance Learning for Hyperbolic Representations (ICML 2019)
- [HYSP](https://github.com/paolomandica/HYSP) - Hyperbolic Self-paced Learning for Self-supervised Skeleton-based Action Representations (ICLR 2023)
- [ShadowCones](https://github.com/ydtydr/ShadowCones) - Shadow Cones: Unveiling Partial Orders in Hyperbolic Space (ICLR 2024)
- [Hyperbolic-Normalizing-Flows-ICML-2020](https://github.com/joeybose/Hyperbolic-Normalizing-Flows-ICML-2020) - Hyperbolic Normalizing Flows (ICML 2020)
- [hyperbolic-gplvms](https://github.com/NoemieJaquier/hyperbolic-gplvms) - Gaussian process hyperbolic latent variable models (ICML 2024)
- [HIE](https://github.com/marlin-codes/HIE) - Hyperbolic Representation Learning: Revisiting and Advancing (ICML 2023)
- [HyperbolicSpatialPropagation](https://github.com/JinhwiPark/HyperbolicSpatialPropagation) - Learning Affinity with Hyperbolic Representation for Spatial Propagation (ICML 2023)

#### KDD/WWW/WSDM
- [Amazon Hyperbolic Embeddings](https://github.com/amazon-science/hyperbolic-embeddings) - Self-Supervised Hyperboloid Representations from Logical Queries over Knowledge Graphs (WWW 2021) and ANTHEM: Attentive Hyperbolic Entity Model for Product Search (WSDM 2022)
- [Hyper-stockgat-www](https://github.com/midas-research/hyper-stockgat-www) - Exploring the Scale-Free Nature of Stock Markets: Hyperbolic Graph Learning for Algorithmic Trading (WWW 2021)
- [hyperbolic-distance-matrices](https://github.com/puoya/hyperbolic-distance-matrices) - Hyperbolic Distance Matrices (KDD 2020)
- [HyperAid](https://github.com/elichienxD/HyperAid) - HyperAid: Denoising in hyperbolic spaces for tree-fitting and hierarchical clustering (KDD 2022)
- [HICF](https://github.com/marlin-codes/HICF) - Hyperbolic Informative Collaborative Filtering (KDD 2022)
- [HRCF](https://github.com/marlin-codes/HRCF) - HRCF: Enhancing Collaborative Filtering via Hyperbolic Geometric Regularization (WWW 2022)
- [hgtm](https://github.com/cezhang01/hgtm) - Hyperbolic Graph Topic Modeling Network with Continuously Updated Topic Tree (KDD 2023)
- [HISum](https://github.com/MySong7NLPer/HISum) - HISum: Hyperbolic Interaction Model for Extractive Multi-Document Summarization (WWW 2023)
- [Hyperbolic Transformer](https://github.com/marlin-codes/hyperbolicTransformer) - Hypformer: Exploring Efficient Hyperbolic Transformer Fully in Hyperbolic Space (KDD 2024)

#### AAAI/IJCAI
- [HDAE](https://github.com/johnnyjana730/HDAE) - HDAE: Hyperbolic Disentangled Representation for Fine-Grained Aspect Extraction (AAAI 2022)
- [hyperbolic_heterogeneous](https://github.com/wanglili-dartmouth/hyperbolic_heterogeneous) - Embedding Heterogeneous Networks into Hyperbolic Space Without Meta-path (AAAI 2021)
- [HGDM](https://github.com/LF-WEN/HGDM) - Hyperbolic Graph Diffusion Model (AAAI 2024)
- [Hyp-OW](https://github.com/boschresearch/Hyp-OW) - Hyp-OW: Exploiting Hierarchical Structure Learning with Hyperbolic Distance Enhances Open World Object Detection (AAAI 2024)


#### ACL
- [hyhtm](https://github.com/simra-shahid/hyhtm) - HyHTM: Hyperbolic Geometry Based Hierarchical Topic Models (ACL 2023)

#### EMNLP/NAACL
- [HyperKA](https://github.com/nju-websoft/HyperKA) - Knowledge Association with Hyperbolic Knowledge Graph Embeddings (EMNLP 2020)
- [hyfi](https://github.com/nlpAThits/hyfi) - A Fully Hyperbolic Neural Model for Hierarchical Multi-class Classification (EMNLP 2020)
- [hyper-event-TempRel](https://github.com/Xingwei-Tan/hyper-event-TempRel) - Poincaré Event Temporal Embeddings and Hyperbolic GRU for Event TempRel Extraction (EMNLP 2021)
- [HyperExpan](https://github.com/PlusLabNLP/HyperExpan) - HyperExpan: Taxonomy Expansion with Hyperbolic Representation Learning (EMNLP 2021)
- [ComplexHyperbolicKGE](https://github.com/HKUST-KnowComp/ComplexHyperbolicKGE) - Complex Hyperbolic Knowledge Graph Embeddings with Fast Fourier Transform (EMNLP 2022)
  

#### CIKM/SIGIR
- [hyperbolic_struct](https://github.com/wanglili-dartmouth/hyperbolic_struct) - Embedding Node Structural Role Identity into Hyperbolic Space (CIKM 2020)
- [HyperSiameseNet](https://github.com/MySong7NLPer/HyperSiameseNet) - A Preliminary Exploration of Extractive Multi-Document Summarization in Hyperbolic Space (CIKM 2022)

### Other Academic Publications

#### Transactions Journals
- [HAT](https://github.com/ydzhang-stormstout/HAT) - Hyperbolic Graph Attention Network (Transactions on Big Data 2021)
- [sherbet](https://github.com/LuChang-CS/sherbet) - Self-supervised graph learning with hyperbolic embedding for temporal health event prediction (IEEE Transactions on Cybernetics 2023)
- [TMLR](https://github.com/saibr/hypvl) - Intriguing Properties of Hyperbolic Embeddings in Vision-Language Models (TMLR 2024)
- [hyperbolic_federated_classification](https://github.com/sauravpr/hyperbolic_federated_classification) - Federated Classification in Hyperbolic Spaces via Secure Aggregation of Convex Hulls (TMLR 2024)
- [HoroRF](https://github.com/LarsDoorenbos/HoroRF) - Hyperbolic Random Forests (Transactions on Machine Learning Research 2024)
- [SIHG](https://github.com/Luoyadan/SIHG) - Interpretable Signed Link Prediction with Signed Infomax Hyperbolic Graph (TKDE 2021)
- [HGSR](https://github.com/yimutianyang/HGSR) - Hyperbolic Graph Learning for Social Recommendation (TKDE 2023)
- [hyperbolic-tsne](https://github.com/msmathcomp/hyperbolic-tsne) - Accelerating hyperbolic t-SNE (TCVG 2024)
- [HECPG](https://github.com/IvanXie416/HECPG) - HECPG: Hyperbolic Embedding and Confident Patch-Guided Network for Point Cloud Matching (TGRS 2024)

#### Computer Graphics & Robotics
- [HGF](https://github.com/sdsgisd/HGF) - A Hyperbolic Geometric Flow for Evolving Films and Foams (SIGGRAPH Asia 2017)
- [hyp2nav](https://github.com/GDam90/hyp2nav) - 🌟 Hyp²Nav: Hyperbolic Planning and Curiosity for Crowd Navigation (IROS 2024)
- [HyperFLAW](https://github.com/LTTM/HyperFLAW) - When Cars meet Drones: Hyperbolic Federated Learning for Source-Free Domain Adaptation in Adverse Weather (WACV 2025)
- [hyper](https://github.com/gabmoreira/hyper) - Hyperbolic vs Euclidean Embeddings in Few-Shot Learning: Two Sides of the Same Coin (WACV 2024)

#### Audio & Signal Processing
- [Hyper-Unmix](https://github.com/merlresearch/hyper-unmix) - Hyperbolic Audio Source Separation (ICASSP 2023)

#### Other Venues
- [Hyperbolic-Generative-Adversarial-Network](https://github.com/facundolazcano/Hyperbolic-Generative-Adversarial-Network) - Hyperbolic Generative Adversarial Network (IEEE Access 2021)
- [pvae](https://github.com/emilemathieu/pvae) - Continuous Hierarchical Representations with Poincaré Variational Auto-Encoders
- https://github.com/grisaitis/hyperbolic-vae (新pytorch版本)
- [Hyperbolic_Sliced-Wasserstein_via_Geodesic_and_Horospherical_Projections](https://github.com/clbonet/Hyperbolic_Sliced-Wasserstein_via_Geodesic_and_Horospherical_Projections) - Hyperbolic Sliced-Wasserstein via Geodesic and Horospherical Projections (PMLR 2023)
- [hyp-oc](https://github.com/Kartik-3004/hyp-oc) - Hyp-OC : Hyperbolic One Class Classification for Face Anti-Spoofing (FG 2024)
- [hilbert-contrastive-learning](https://github.com/jaeeun-n/hilbert-contrastive-learning) - Hyperbolic Contrastive Learning for Document Representations (ECAI 2024)

### Tools & Libraries

_Software tools and libraries for working with hyperbolic spaces_

- [PoincareMaps](https://github.com/facebookresearch/PoincareMaps) - Poincare maps recover continuous hierarchies in single-cell data
- [hyperbolic_llm](https://github.com/thunlp/hyperbolic_llm) - Code for Hyperbolic Pre-Trained Language Model (TASLP)
- [hyperbolicvit](https://github.com/hyperbolicvit/hyperbolicvit) - Hyperbolic Transformer for Image Classification
- [Hipe](https://github.com/maxkatzmann/Hipe) - 🔧 Hipe is a Python tool that visualizes drawings in hyperbolic space using the native representation
- [dibujos_hiperbolicos](https://github.com/pablolessa/dibujos_hiperbolicos) - A python tool to create drawings in the hyperbolic disk
- [hyperbolic-image-embeddings](https://github.com/hyperbolic-embeddings/hyperbolic-image-embeddings) - Hyperbolic Image Embeddings
- [PyHyperbolic3D](https://github.com/stla/PyHyperbolic3D) - Python stuff for drawing 3D hyperbolic polyhedra with 'PyVista'
- [confmap](https://github.com/FCoulombeau/confmap) - Conformal mappings and hyperbolic tessalations with Python
- [Mercator](https://github.com/rl27/Mercator) - A tool for visualizing generative models in 3D hyperbolic space
- [hyperbolic-wythoff](https://github.com/mountain/hyperbolic-wythoff) - A toolkit to draw uniform tilings in hyperbolic plane by wythoff construction
- [HyperbolicLR](https://github.com/Axect/HyperbolicLR) - HyperbolicLR: Epoch Insensitive Learning Rate Scheduler
- [HypMaps](https://github.com/Tanvi141/HypMaps) - Python package to map points from Euclidean to Hyperbolic space
- [hypdelta](https://github.com/tnmtvv/hypdelta) - Tool for computing delta-hyperbolicity on distance matrix
- [Proseminar-SS21-Hyperbolic-Tiling](https://github.com/hegl-lab/Proseminar-SS21-Hyperbolic-Tiling) - Draw tilings and graph embeddings in the hyperbolic plane
- [hyperbolic-tree-of-life.github.io](https://github.com/hyperbolic-tree-of-life/hyperbolic-tree-of-life.github.io) - d3-hypertree [demo](https://hyperbolic-tree-of-life.github.io/) with Open Tree of Life data set
- [HyperbolicChessTrainer](https://github.com/RichardAragon/HyperbolicChessTrainer) - Auto trains LLM models to play chess by having them simulate the game board in hyperbolic space
- [Hyperbolic-GeometPy](https://github.com/Labardini/Hyperbolic-GeometPy) - GUI for Hyperbolic Geometry using Python, PyQt and pyqtgraph
- [pytorch_hyperbolic](https://github.com/fratajcz/pytorch_hyperbolic) - Implementation of hyperbolic NNs and GNNs
- [Hyperbolic-Kernel-Convolution](https://github.com/BruceZhangReve/Hyperbolic-Kernel-Convolution) - Hyperbolic Kernel Convolution: A Generic Framework

### Preprints & Others

_Preprints, work in progress, and other resources_

- [HyperKG](https://github.com/prokolyvakis/hyperkg) - HyperKG: Hyperbolic Knowledge Graph Embeddings for Knowledge Base Completion
- [HyperMiner](https://github.com/NoviceStone/HyperMiner) - HyperMiner: Topic Taxonomy Mining with Hyperbolic Embedding
- [Hyperbolic-Embedding](https://github.com/melifluos/Hyperbolic-Embedding) - Learning neural network embeddings in hyperbolic spaces
- [HyLa](https://github.com/ydtydr/HyLa) - Laplacian Features for Learning with Hyperbolic Space
- [HypLLM](https://github.com/marlin-codes/HypLLM) - Hyperbolic Fine-tuning for LLMs
- [HGRAM](https://github.com/Akirato/HGRAM) - Hyperbolic Graph Neural Networks at Scale: A Meta Learning Approach
- [Hyperbolic-VAE-with-Ranking-Loss](https://github.com/ctr4si/Hyperbolic-VAE-with-Ranking-Loss)
- [LKGR](https://github.com/yankai-chen/LKGR) - Modeling Scale-free Graphs with Hyperbolic Geometry for Knowledge-aware Recommendation
- [hgcn](https://github.com/ZhangKaly/hgcn) - Hyperbolic Graph Convolutional Neural Networks (NIPS 2019)
- [geometry_tools](https://github.com/tjweisman/geometry_tools) - Tools for working numerically with hyperbolic space and projective geometry
- [HC-GLAD](https://github.com/Yali-F/HC-GLAD) - Dual Hyperbolic Contrastive Learning for Unsupervised Graph-Level Anomaly Detection
- [hyperbolic-properties](https://github.com/aitsc/hyperbolic-properties) - Why are hyperbolic neural networks effective? A study on hierarchical representation capability (ICLR 2024 reject)
- [HyperLearning_Paperlist](https://github.com/zealscott/HyperLearning_Paperlist) - List of papers about hyperbolic enhanced representation learning and its applications
- [HERec](https://github.com/Martin-qyma/HERec) - Breaking Information Cocoons: A Hyperbolic Graph-LLM Framework for Exploration and Exploitation in Recommender Systems (arXiv 2024)
- [Hyperbolic-Prompt-Learning](https://github.com/myaxxxxx/Hyperbolic-Prompt-Learning) - Hyperbolic Representations for Prompt Learning (Coling 2024 under review)
- [hyperbolic_hhne](https://github.com/BUPT-GAMMA/hyperbolic_hhne) - Hyperbolic Heterogeneous Information Network Embedding (AAAI 2019)
- [hyperbolic_vae](https://github.com/julian-8897/hyperbolic_vae) - Variational Autoencoder with Hyperbolic Latent Space in PyTorch
- [hsvm](https://github.com/plumdeq/hsvm) - Python implementation of hyperbolic SVM, as introduced in [Large-Margin Classification in Hyperbolic Space](https://arxiv.org/pdf/1806.00437)
- [HyperIMBA](https://github.com/RingBDStack/HyperIMBA) - Hyperbolic Geometric Graph Representation Learning for Hierarchy-imbalance Node Classification
- [hc_embedding](https://github.com/network-embeddings/hc_embedding) - Machine learning meets complex networks via coalescent embedding in the hyperbolic space
- [HyperA](https://github.com/dhruvdcoder/HyperA) - Hyperbolic Neural Networks implementation using Poincare Ball model
- [QANet](https://github.com/localminimum/QANet) - QANET: COMBINING LOCAL CONVOLUTION WITH GLOBAL SELF-ATTENTION FOR READING COMPREHENSION (ICLR 2018)
  - [第三方](https://github.com/hengruo/QANet-pytorch)
  - [第三方](https://github.com/bhacquin/QANet-Hyperbolic_Attention)
- [Hyperbolics](https://github.com/j4freeman/Hyperbolics) - A Gentle Introduction to Hyperbolic Neural Networks (Tutorial)

## Contributing

Contributions to this list are welcome! Please feel free to submit a pull request with additional resources, corrections, or improvements.

## Citation

If you find this resource useful in your research, please consider citing the relevant papers linked in this collection.

## License

This collection is available under the [Creative Commons CC0 license](https://creativecommons.org/publicdomain/zero/1.0/).