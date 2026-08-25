import RevealButton from "../code/RevealButton";
import SweepButton from "../code/SweepButton";

export const ButtonsRegistry = [
  {
    name: "Reveal Button",
    description:
      "A dynamic button that transforms on hover, smoothly swapping the text and icon positions while revealing an image and animating the background for a playful interactive effect.",
    category: "Buttons",
    component: <RevealButton text={"Hover Me"} />,
    code: "",
    image: "",
    dependecies: [],
  },
  {
    name: "Sweep Button",
    description: "",
    category: "Buttons",
    component: <SweepButton text={"Hover Me"} />,
    code: "",
    image: "",
    dependecies: [],
  },
];
