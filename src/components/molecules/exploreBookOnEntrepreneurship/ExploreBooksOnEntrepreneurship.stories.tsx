// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import ExploreBooksOnEntrepreneurship from "./ExploreBooksOnEntrepreneurship";
import { MemoryRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: ExploreBooksOnEntrepreneurship,
} as ComponentMeta<typeof ExploreBooksOnEntrepreneurship>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ExploreBooksOnEntrepreneurship> = (
  args
) => (
  <MemoryRouter>
    <ExploreBooksOnEntrepreneurship></ExploreBooksOnEntrepreneurship>
  </MemoryRouter>
);

//👇 Each story then reuses that template
export const ExploreBooksOnEntrepreneurship1 = Template.bind({});
