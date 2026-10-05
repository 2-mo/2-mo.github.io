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
