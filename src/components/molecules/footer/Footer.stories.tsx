// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from "./Footer";
import { MemoryRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Footer,
} as ComponentMeta<typeof Footer>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Footer> = (args) => (
  <MemoryRouter>
    <Footer></Footer>
  </MemoryRouter>
);

//👇 Each story then reuses that template
export const Footer1 = Template.bind({});
