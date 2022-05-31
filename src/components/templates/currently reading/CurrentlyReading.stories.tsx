// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import CurrentlyReading from "./CurrentlyReading";
import { MemoryRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Templates",
  component: CurrentlyReading,
} as ComponentMeta<typeof CurrentlyReading>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CurrentlyReading> = (args) => (
  <MemoryRouter>
    <CurrentlyReading {...args}></CurrentlyReading>
  </MemoryRouter>
);

//👇 Each story then reuses that template
export const CurrentlyReading1 = Template.bind({});
CurrentlyReading1.args = {
  continueReading: [
    {
      bookAuthor: "Erica Keswin",
      bookName: "Bring Your Human to Work",
      id: 1,
      img: "2.png",
      reads: "2k reads",
      status: "finished",
      time: "13-minute read",
      type: "trending",
    },
    {
      bookAuthor: "Erica Keswin",
      bookName: "Bring Your Human to Work",
      id: 1,
      img: "3.png",
      reads: "2k reads",
      status: "finished",
      time: "13-minute read",
      type: "trending",
    },
    {
      bookAuthor: "Erica Keswin",
      bookName: "Bring Your Human to Work",
      id: 1,
      img: "5.png",
      reads: "2k reads",
      status: "finished",
      time: "13-minute read",
      type: "trending",
    },
  ],
};
