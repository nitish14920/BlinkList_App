// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Logo from "./Logo";
import { MemoryRouter } from "react-router-dom";
import { height } from "@mui/system";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Logo,
} as ComponentMeta<typeof Logo>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Logo> = (args) => (
  <MemoryRouter>
    {" "}
    <Logo {...args} />
  </MemoryRouter>
);

//👇 Each story then reuses that template
export const Logo1 = Template.bind({});
Logo1.args = {
  image: "e60c1b 1.png",
};
export const Logo2 = Template.bind({});
Logo2.args = {
  image: "e60c1b 1.png",
  style: {
    width: "150px",
    height: "50px",
  },
};
