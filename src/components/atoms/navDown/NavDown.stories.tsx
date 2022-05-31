// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavDown from "./NavDown";
import { MemoryRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms",
  component: NavDown,
} as ComponentMeta<typeof NavDown>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof NavDown> = (args) => (
  <MemoryRouter>
    <NavDown {...args} />
  </MemoryRouter>
);

//👇 Each story then reuses that template
export const NavDown1 = Template.bind({});
NavDown1.args = {
  sx: {},
};
export const NavDown2 = Template.bind({});
NavDown2.args = {
  sx: { fontSize: 40 },
};
