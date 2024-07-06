import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  { text: "Polaris", link: "/polaris/README.md", icon: "meteor" },
  { text: "Leaning", link: "/learning/README.md", icon: "chalkboard"},
  {
    text: "Reading",
    icon: "lightbulb",
    prefix: "research/",
    children: [
      {
        text: "Open World",
        icon: "pen-to-square",
        prefix: "open-world/",
        children: [
          { text: "Object Detection", icon: "expand", link: "README.md" },
        ],
      },
      {
        text: "Anomaly Discovery",
        icon: "pen-to-square",
        prefix: "anomaly-discovery/",
        children: [
          { text: "Unsupervised Video", icon: "video", link: "README.md" },
          { text: "Road Scenes", icon: "road", link: "README.md" },
        ],
      },
      {
        text: "Embodied Intelligence",
        children: [
          { text: "Autonomous Driving", icon: "car", link: "1" },
          { text: "Robot", icon: "robot", link: "2" },
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
          { text: "ubuntu", icon: "computer", link: "README.md" },
          { text: "docker", icon: "shapes", link: "docker.md" },
        ],
      },
      {
        text: "MacOS",
        icon: "pen-to-square",
        prefix: "mac/",
        children: [
          { text: "Apple1", icon: "rainbow", link: "1" },
        ],
      },
    ],
  },
  {
    text: "Uncovering",
    icon: "fire",
    prefix: "/uncover/",
    children: [
      { text: "overview", icon: "eye", link: "README.md" },
      {
        text: "Big Model",
        icon: "eye",
        prefix: "",
        children: [
          { text: "ICL/CoT/GoT", icon: "code-branch", link: "CoT.md" },
          { text: "Awesome Model", icon: "cable-car", link: "2" },
        ],
      },
      {
        text: "Handy Kit",
        icon: "pen-to-square",
        prefix: "open-world/",
        children: [
          { text: "Invoke", icon: "robot", link: "1" },
          { text: "Deployment", icon: "cube", link: "2" },
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
