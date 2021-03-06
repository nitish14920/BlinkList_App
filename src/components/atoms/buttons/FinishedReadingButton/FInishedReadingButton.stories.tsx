// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import FinishedReadingButton from "./FinishedReadingButton";
import { MemoryRouter } from "react-router-dom";

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms",
  component: FinishedReadingButton,
} as ComponentMeta<typeof FinishedReadingButton>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: ComponentStory<typeof FinishedReadingButton> = (args) => (
  <MemoryRouter>
    <FinishedReadingButton {...args} />
  </MemoryRouter>
);

//๐ Each story then reuses that template
export const FinishedReadingButton1 = Template.bind({});
FinishedReadingButton1.args = {
  text: "Finished Reading",
};
