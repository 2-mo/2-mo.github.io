---
title: Coding
order: 4
---

## nihaonihao

### 好用的代码库

https://github.com/xixu-me/Xget
超高性能、安全的一站式开源资源获取加速引擎。其性能远超传统加速器，为您提供跨多个平台的统一高效的下载体验，涵盖代码储存库、包管理、容器镜像、模型及数据集等


[ViT](https://github.com/lucidrains/vit-pytorch)


https://github.com/Done-0/fuck-u-code
一个专为挖掘项目"屎坑"设计的代码质量分析工具，能无情揭露代码的丑陋真相，并用毫不留情的幽默语言告诉你：你的代码到底有多烂。

### 统计代码数量

```bash
git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
```

### 统计提交次数

```bash
git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r
```

### 查看个人提交

```bash
git log --author="username" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -
```
