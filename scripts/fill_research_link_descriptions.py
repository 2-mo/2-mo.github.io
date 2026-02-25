from __future__ import annotations

from pathlib import Path

FILE_PATH = Path("/Users/2-mo/Projects/2-mo.github.io/content/research-links.toml")


def build_description(group: str, subtitle: str, title: str) -> str:
    subtitle = subtitle.strip()
    title = title.strip()

    if group == "⏰ DEADLINE":
        return f"{subtitle}：{title}，用于快速确认投稿节点与时间安排。"
    if group == "🔍 论文检索":
        return f"{subtitle}：{title}，便于进行论文检索、追踪与文献调研。"
    if group == "⚓️ 论文下载":
        return f"{subtitle}：{title}，可用于文献获取与资料收集。"
    if group == "🏠 研究机构":
        return f"{subtitle}：{title}，用于关注机构动态与前沿研究进展。"
    if group == "🔨 科研工具":
        return f"{subtitle}：{title}，帮助提升科研写作、开发与效率流程。"
    if group == "🔧 在线工具":
        return f"{subtitle}：{title}，提供常用在线处理与效率工具。"
    if group == "🌈 绘图配色":
        return f"{subtitle}：{title}，适合图表设计、配色参考与可视化制作。"
    if group == "🧱 常用素材":
        return f"{subtitle}：{title}，可用于演示文稿、图标与素材资源整理。"
    if group == "📜 辅助写作":
        return f"{subtitle}：{title}，用于论文写作、润色与语言表达支持。"
    if group == "📟 公众号编辑":
        return f"{subtitle}：{title}，用于公众号内容制作与排版发布。"
    if group == "AI / 演示":
        return f"{subtitle}：{title}，用于 AI 项目体验、演示与学习参考。"
    if group == "数据集":
        return f"{subtitle}：{title}，可用于数据下载、基准测试与实验准备。"
    if group == "画图参考":
        return f"{subtitle}：{title}，用于可视化实现与绘图案例参考。"
    if group == "模版下载":
        return f"{subtitle}：{title}，提供论文模板与投稿格式参考。"
    if group == "搜索引擎 🔎":
        return f"{subtitle}：{title}，用于科研信息检索与快速定位资源。"
    if group == "科研常用网站":
        return f"{subtitle}：{title}，作为科研常用入口与资源聚合链接。"
    if group == "mac 软件集合 🍎":
        return f"{subtitle}：{title}，用于 Mac 科研环境与常用工具配置。"
    if group == "补充资源":
        return f"{subtitle}：{title}，作为补充学习与实用资源入口。"

    if subtitle:
        return f"{subtitle}：{title}，点击可直达原始链接。"
    return f"{title}，点击可直达原始链接。"


def fill_missing_content(text: str) -> tuple[str, int]:
    lines = text.splitlines()
    output: list[str] = []

    current_group = ""
    item_buffer: list[str] = []
    in_item = False
    filled_count = 0

    def flush_item() -> None:
        nonlocal filled_count
        nonlocal item_buffer

        if not item_buffer:
            return

        title = ""
        subtitle = ""
        has_content = False

        for line in item_buffer:
            s = line.strip()
            if s.startswith("title = ") and not title:
                title = s.split("=", 1)[1].strip().strip('"')
            elif s.startswith("subtitle = "):
                subtitle = s.split("=", 1)[1].strip().strip('"')
            elif s.startswith("content = "):
                has_content = True

        if not has_content and title:
            content = build_description(current_group, subtitle, title).replace('"', '\\"')
            inserted = False
            new_item: list[str] = []
            for line in item_buffer:
                new_item.append(line)
                if line.strip().startswith("link = ") and not inserted:
                    new_item.append(f'content = "{content}"')
                    inserted = True
            if not inserted:
                new_item.append(f'content = "{content}"')
            item_buffer = new_item
            filled_count += 1

        output.extend(item_buffer)
        item_buffer = []

    for line in lines:
        stripped = line.strip()

        if stripped == "[[groups]]":
            if in_item:
                flush_item()
                in_item = False
            output.append(line)
            continue

        if stripped.startswith('title = "') and output and output[-1].strip() == "[[groups]]":
            current_group = stripped.split("=", 1)[1].strip().strip('"')
            output.append(line)
            continue

        if stripped == "[[groups.items]]":
            if in_item:
                flush_item()
            in_item = True
            item_buffer = [line]
            continue

        if in_item:
            if stripped.startswith("[[groups]]") or stripped.startswith("[[groups.items]]"):
                flush_item()
                in_item = False
                output.append(line)
            else:
                item_buffer.append(line)
        else:
            output.append(line)

    if in_item:
        flush_item()

    return "\n".join(output) + "\n", filled_count


def main() -> None:
    original = FILE_PATH.read_text(encoding="utf-8")
    updated, filled_count = fill_missing_content(original)
    FILE_PATH.write_text(updated, encoding="utf-8")
    print(f"Filled {filled_count} missing descriptions.")


if __name__ == "__main__":
    main()
