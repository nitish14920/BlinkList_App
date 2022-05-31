// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TypographyComponent } from "./TypographyComponent";
import { MemoryRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms",
  component: TypographyComponent,
} as ComponentMeta<typeof TypographyComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TypographyComponent> = (args) => (
  <MemoryRouter>
    <TypographyComponent {...args}>Typography</TypographyComponent>
  </MemoryRouter>
);

//👇 Each story then reuses that template
export const TypographyComponent1 = Template.bind({});
TypographyComponent1.args = {
  color: "red",
  variant: "h1",
};
export const TypographyComponent2 = Template.bind({});
TypographyComponent2.args = {
  color: "black",
  variant: "subtitle1",
};
