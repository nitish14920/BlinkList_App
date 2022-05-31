// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchIcon from "./SearchIIcon";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms",
  component: SearchIcon,
} as ComponentMeta<typeof SearchIcon>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SearchIcon> = (args) => (
  <SearchIcon {...args} />
);

//👇 Each story then reuses that template
export const SearchIcon1 = Template.bind({});
SearchIcon1.args = {
  sx: {
    fontSize: 20,
  },
};
export const SearchIcon2 = Template.bind({});
SearchIcon2.args = {
  sx: {
    fontSize: 40,
    color: "blue",
  },
};
