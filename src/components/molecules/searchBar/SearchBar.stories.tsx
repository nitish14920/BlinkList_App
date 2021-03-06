// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchBar from "./SearchBar";
import { MemoryRouter } from "react-router-dom";

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Molecules",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: ComponentStory<typeof SearchBar> = (args) => (
  <MemoryRouter>
    <SearchBar></SearchBar>
  </MemoryRouter>
);

//๐ Each story then reuses that template
export const SearchBar1 = Template.bind({});
