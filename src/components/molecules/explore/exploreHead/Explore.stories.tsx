// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Explore from "./Explore";
import { MemoryRouter } from "react-router-dom";

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Molecules",
  component: Explore,
} as ComponentMeta<typeof Explore>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: ComponentStory<typeof Explore> = (args) => (
  <MemoryRouter>
    <Explore {...args}>Typography</Explore>
  </MemoryRouter>
);

//๐ Each story then reuses that template
export const Explore1 = Template.bind({});
Explore1.args = {};
