// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import BookDetails from "./BookDetails";
import { MemoryRouter } from "react-router-dom";

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Molecules",
  component: BookDetails,
} as ComponentMeta<typeof BookDetails>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: ComponentStory<typeof BookDetails> = (args) => (
  <MemoryRouter>
    <BookDetails {...args}></BookDetails>
  </MemoryRouter>
);

//๐ Each story then reuses that template
export const BookDetails1 = Template.bind({});
