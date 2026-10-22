# OpenVisualLab 本地整合记录（2026-10-22）

个人主页继续使用现有 Next.js / PRISM 内容系统。本次新增 8 篇历史论文分享、3 篇专题阅读笔记；原分享人、原整理者、原记录时期和固定版本来源链接保留在正文。

## 新增内容

| 页面 | 原作者 / 分享人 | 原记录时间 |
| --- | --- | --- |
| [CLOVER：生成预期与闭环视觉运动控制](../content/notes/reading-clover-20241028.md) | Qu Yunjin（屈云进） | 2024-10-28 |
| [DriveLM：以图结构问答连接感知、预测与规划](../content/notes/reading-drivelm-20241104.md) | Wang Jingxin（王京新） | 2024-11-04 |
| [VISTA：通用驾驶世界模型](../content/notes/reading-vista-20241111.md) | Zhang Mingzhu（张明珠） | 2024-11-11 |
| [SparseDrive：稀疏场景表示与端到端自动驾驶](../content/notes/reading-sparsedrive-20241118.md) | Yuan Shuang（袁双） | 2024-11-18 |
| [DeeR-VLA：动态推理的视觉语言动作模型](../content/notes/reading-deer-vla-20241202.md) | Yang Shedan（杨社丹） | 2024-12-02 |
| [Causal-CoG：用于多模态推理的因果上下文生成](../content/notes/reading-causal-cog-20241216.md) | Wang Jingxin（王京新） | 2024-12-16 |
| [Drive-WM：面向自动驾驶的多视角世界模型](../content/notes/reading-drive-wm-20241230.md) | Zhang Mingzhu（张明珠） | 2024-12-30 |
| [ECoT：机器人控制中的具身思维链](../content/notes/reading-ecot-20250106.md) | Yang Shedan（杨社丹） | 2025-01-06 |
| [语言模型与自动驾驶：历史阅读清单](../content/notes/driving-with-language-reading-list.md) | Jingxin Wang（王京新） | 2024（原检索范围 2022–2025） |
| [世界模型与自动驾驶：历史阅读清单](../content/notes/world-model-reading-list.md) | Zhang Mingzhu（张明珠） | 2024–2025 |
| [医学图像与主动学习：阅读札记](../content/notes/medical-active-learning-reading-list.md) | Hongyi Wang（王洪艺） | 2024 |

## 现有内容增补

- 视频异常检测指南：补入 MCANet 原图，保留现有重写正文，复用原有 LAVAD、HAWK、VERA 图。
- 论文分享札记：补充分享前准备与八次历史分享索引。
- 代码复现札记：提取 DAGR 历史环境中的版本核对经验，标明历史配置。
- 科研导航：加入站内研究笔记入口。旧站 85 个导航 URL 中 83 个已有覆盖；另两个旧入口未重新引入。
- NexusAD 已有 publications 条目与代码链接；旧主页其余项目是模板演示，旧介绍含占位人物卡片。现有履历和人物信息继续使用个人主页版本。

## 资产与版本

新增 14 份图像文件；3 份现有 VAD 图按 SHA-256 确认相同并复用。相同世界模型图只使用一份，旧图原件全部保存在历史仓库。

世界模型笔记采用本地缓存的 origin/main 版本，并补回旧工作区中未覆盖的 Pandora 阅读条目；两个版本完整保留。Causal-CoG 两份旧笔记仅开头空行不同，使用一个页面，两个来源保留。Drive-WM、ECoT、MCANet 取自本地已缓存提交，未拉取远端。

旧 VuePress 组件、导航、样式、图片、参考 PDF、机器环境记录与未完成组会记录保留在本地档案。未将会议邀请链接、机器代理设置、模板演示或无效的 2 字节 ECoT PDF 带入公开内容。

## 本地历史档案

`.local-archive/openvisuallab/repository-20261022/` 保存完整旧工作目录，包含 `.git` 和 `src/polaris/README.md` 的原有未提交改动。已逐文件核对 1,741 个文件的 SHA-256、大小、inode 与权限，差异为 0；HEAD、全部 refs、工作区状态保持一致。

`.local-archive/openvisuallab/snapshots/` 保存原 2026-10-06 快照与 SHA256 伴随文件。压缩包 SHA-256：`4a99fb912de36075a08f5912e8bba72932f6c46044b01e2e21a49d81134e73cf`。`source-documents/`、`legacy-code/` 与 `reference-papers/` 通过相对链接定位档案中的原文件。

整个 `.local-archive/` 已加入 `.gitignore`，且位于 `public/` 外。网站构建只导出当前站点页面与公开资产。本次仅进行本地整合，没有推送、发布或删除线上仓库。
