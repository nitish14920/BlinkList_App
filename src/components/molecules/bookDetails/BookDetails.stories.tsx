// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import BookDetails from "./BookDetails";
import { MemoryRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: BookDetails,
} as ComponentMeta<typeof BookDetails>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof BookDetails> = (args) => (
  <MemoryRouter>
    <BookDetails {...args}></BookDetails>
  </MemoryRouter>
);

//👇 Each story then reuses that template
export const BookDetails1 = Template.bind({});
