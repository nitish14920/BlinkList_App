// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import ReadNowButton from "./ReadNowButton";
import { MemoryRouter } from "react-router-dom";

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms",
  component: ReadNowButton,
} as ComponentMeta<typeof ReadNowButton>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: ComponentStory<typeof ReadNowButton> = (args) => (
  <MemoryRouter>
    <ReadNowButton {...args} />
  </MemoryRouter>
);

//๐ Each story then reuses that template
export const ReadNowButton1 = Template.bind({});
ReadNowButton1.args = {
  text: "Finished Reading",
};
