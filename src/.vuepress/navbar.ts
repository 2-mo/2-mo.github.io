import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  { text: "Polaris", link: "/polaris/README.md", icon: "meteor" },
  { text: "Leaning", link: "/learning/README.md", icon: "chalkboard"},
  {
    text: "Reading",
    icon: "road",
    prefix: "research/",
    children: [
      {
        text: "Open World",
        icon: "pen-to-square",
        prefix: "open-world/",
        children: [
          { text: "overview", icon: "pen-to-square", link: "README.md" },
        ],
      },
      {
        text: "Object Detection",
        icon: "pen-to-square",
        prefix: "object-detection/",
        children: [
          { text: "overview", icon: "pen-to-square", link: "README.md" },
        ],
      },
      {
        text: "Anomaly Discovery",
        icon: "pen-to-square",
        prefix: "anomaly-discovery/",
        children: [
          { text: "overview", icon: "pen-to-square", link: "README.md" },
        ],
      },
      {
        text: "Embodied Intelligence",
        children: [
          { text: "Autonomous Driving", icon: "pen-to-square", link: "1" },
          { text: "Robot", icon: "pen-to-square", link: "2" },
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
          { text: "ubuntu", icon: "pen-to-square", link: "README.md" },
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
    prefix: "/uncover/",
    children: [
      { text: "overview", icon: "pen-to-square", link: "README.md" },
      {
        text: "Big Model",
        icon: "pen-to-square",
        prefix: "open-world/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
        ],
      },
      {
        text: "Handy Kit",
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
