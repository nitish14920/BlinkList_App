// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Anchor from "./Anchor";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Anchor,
} as ComponentMeta<typeof Anchor>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />;

//👇 Each story then reuses that template
export const Explore = Template.bind({});
Explore.args = {
  children: "Explore",
};
