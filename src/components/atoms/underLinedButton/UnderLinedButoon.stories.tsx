// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import UnderLinedButton from "./UnderLinedButton";
import { MemoryRouter } from "react-router-dom";

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms",
  component: UnderLinedButton,
} as ComponentMeta<typeof UnderLinedButton>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: ComponentStory<typeof UnderLinedButton> = (args) => (
  <MemoryRouter>
    <UnderLinedButton {...args}>Typography</UnderLinedButton>
  </MemoryRouter>
);

//๐ Each story then reuses that template
export const UnderLinedButton1 = Template.bind({});
UnderLinedButton1.args = {
  color: "red",
  text1: "UnderLinedButton",
};
export const UnderLinedButton2 = Template.bind({});
UnderLinedButton2.args = {
  color: "black",
  text1: "UnderLinedButton",
};
