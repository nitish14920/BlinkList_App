// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import BookCard from "./BookCard";
import { MemoryRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Molecules",
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof BookCard> = (args) => (
  <MemoryRouter>
    <BookCard {...args}>Typography</BookCard>
  </MemoryRouter>
);

//👇 Each story then reuses that template
export const BookCard1 = Template.bind({});
BookCard1.args = {
  book: {
    bookAuthor: "Erica Keswin",
    bookName: "Bring Your Human to Work",
    id: 1,
    img: "2.png",
    reads: "2k reads",
    status: "finished",
    time: "13-minute read",
    type: "trending",
  },
};
export const BookCard2 = Template.bind({});
BookCard2.args = {
  book: {
    id: 1,
    img: "3.png",
    bookName: "Bring Your Human to Work",
    bookAuthor: "Erica Keswin",
    time: "13-minute read",
    reads: "2k reads",
    status: "finished",
    type: "trending",
  },
};
