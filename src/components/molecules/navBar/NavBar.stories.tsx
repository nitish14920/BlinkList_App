// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavBar from "./NavBar";
import { MemoryRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof NavBar> = (args) => (
  <MemoryRouter>
    <NavBar></NavBar>
  </MemoryRouter>
);

//👇 Each story then reuses that template
export const NavBar1 = Template.bind({});
