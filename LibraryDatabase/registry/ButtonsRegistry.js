import {
  ArrowSlideButton,
  RevealButton,
  SweepButton,
} from "../code/AnimatedButton";

export const ButtonsRegistry = [
  {
    name: "Reveal Button",
    description:
      "A dynamic button that transforms on hover, smoothly swapping the text and icon positions while revealing an image and animating the background for a playful interactive effect.",
    category: "Buttons",
    component: <RevealButton text={"Hover Me"} />,
    code: "/LibraryDatabase/code/AnimatedButton/RevealButton.jsx",
    image: "",
    dependecies: [],
  },
  {
    name: "Sweep Button",
    description: "",
    category: "Buttons",
    component: <SweepButton text={"Hover Me"} />,
    code: "/LibraryDatabase/code/AnimatedButton/SweepButton.jsx",
    image: "",
    dependecies: [],
  },
  {
    name: "Arrow Slide Button",
    description: "",
    category: "Buttons",
    component: <ArrowSlideButton text={"Hover Me"} />,
    code: "/LibraryDatabase/code/AnimatedButton/ArrowSlideButton.jsx",

    image: "",
    dependecies: [],
  },
];
