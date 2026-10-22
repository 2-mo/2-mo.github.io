## VS Code 插件

- **远程连接**：Remote-SSH、Remote Explorer。[设置文档](https://code.visualstudio.com/docs/remote/ssh)
- **Python**：Python、Pylance。[解释器与环境](https://code.visualstudio.com/docs/python/environments)
- **辅助**：Path Intellisense 补全路径，TODO Highlight 标出待办，CodeSnap 生成代码截图。

## 检查运行环境

在项目使用的终端和解释器里执行：

```shell
python -c 'import sys, torch;print(sys.executable);print(torch.__version__);print(torch.version.cuda)'
```

依次输出解释器路径、PyTorch 版本和该构建对应的 CUDA 版本。

## 复现时看什么

先跑通项目自带的推理与评价脚本，再对照论文追踪数据流、模块输入输出和损失函数。记录配置、代码版本以及与论文结果的差异；一次改一个因素，检查它是否产生预期效果。

## 从 DAGR 复现记录看环境版本

OpenVisualLab 在 2024 年的 [DAGR](https://github.com/uzh-rpg/dagr) 复现笔记记录过一组环境：PyTorch 1.11.0、torchvision 0.12.0、torchaudio 0.11.0、CUDA Toolkit 11.3，并固定 setuptools 69.5.1 与 MKL 2024.0。这是当时实验的配置记录，重做实验时仍应以对应代码版本的依赖为准。

有三项检查值得保留：

- `nvcc -V` 查看系统 CUDA 编译工具链；`torch.version.cuda` 查看当前 PyTorch 构建使用的 CUDA 版本。两者反映不同层次，需要结合实际编译扩展的要求检查。
- 安装 `torch-sparse` 等扩展前，先核对 PyTorch 和 CUDA 的组合，再选对应的软件包。原记录使用了匹配 `torch-1.11.0+cu113` 的 PyG 包。
- 将 Python、PyTorch、CUDA、依赖版本与安装渠道一起记入实验记录。环境可复现后，再开始调试模型与数据流。

来源：[原始 DAGR 环境记录](https://github.com/OpenVisualLab/openvisuallab.github.io/blob/45e559a6750bd076f2c8cbb2ced3947f68d06093/src/coooder/for_dagr.md)。原记录中的机器代理地址、安装器路径和完整命令留在本地历史档案。
