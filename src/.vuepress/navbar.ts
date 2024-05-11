import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  { text: "Polaris", link: "/polaris/README.md", icon: "meteor" },
  { text: "Leaning", link: "/learning/README.md", icon: "chalkboard"},
  {
    text: "Reading",
    icon: "road",
    prefix: "/posts/",
    children: [
      {
        text: "Open World",
        icon: "pen-to-square",
        prefix: "open-world/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
        ],
      },
      {
        text: "Open World",
        icon: "pen-to-square",
        prefix: "open-world/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
        ],
      },
      {
        text: "Open World",
        icon: "pen-to-square",
        prefix: "open-world/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
        ],
      },
      {
        text: "-",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
        ],
      },
    ],
  },
  {
    text: "Coding",
    icon: "code",
    prefix: "/coding/",
    children: [
      {
        text: "Ubuntu",
        icon: "pen-to-square",
        prefix: "ubuntu/",
        children: [
          { text: "环境配置", icon: "pen-to-square", link: "README.md" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
        ],
      },
      {
        text: "MacOS",
        icon: "pen-to-square",
        prefix: "mac/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
        ],
      },
    ],
  },
  {
    text: "Uncovering",
    icon: "fire",
    prefix: "/posts/",
    children: [
      {
        text: "Ubuntu",
        icon: "pen-to-square",
        prefix: "open-world/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
        ],
      },
      {
        text: "Open World",
        icon: "pen-to-square",
        prefix: "open-world/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
        ],
      },
    ],
  },
  {
    text: "Visual Lab",
    icon: "book",
    link: "http://10.16.38.164/",
  },
]);
