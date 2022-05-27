import { ReactNode } from "react";
import { BookInterface } from "../components/atoms/buttons/FinishedReadingButton/FinishedReadingButton";
export interface Props {
  children?: ReactNode;
  setExplore?: any;
  explore?: boolean;
  sx?: {
    bgcolor?: string;
    fontSize?: number;
    color?: string;
    marginTop?: string;
    marginRight?: string;
    lineHeight?: string;
    margin?: string;
    position?: string;
    left?: string;
    right?: string;
    bottom?: string;
    top?: string;
    height?: string;
    cursor?: string;
  };
}

export interface TypographyProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
  children?: ReactNode;
  color?: string;
  width?: string;
  textAlign?: string | boolean;
  position?: string;
  left?: string;
  marginLeft?: string;
  marginBottom?: string;
  fontWeight?: number;
  lineHeight?: string;
}

export interface BookCardInterface {
  book?:
    | {
        id: number | string;
        img: string;
        bookName: string;
        bookAuthor: string;
        time: string;
        reads: string;
        status: string;
        type: string;
      }
    | any;
}
export interface BooksInterface {
  books?: {
    id: number;
    img: string;
    bookName: string;
    bookAuthor: string;
    time: string;
    reads: string;
    status: string;
    type: string;
  }[];
}
export interface UnderLinedButtonInterface {
  text1?: string;
  color?: string;
  className?: any;
}

export interface ButtonInterface {
  text: string;
  setFinishedReading?: any;
  setContinueReading?: any;
  data?: BookInterface;
  finishedBooks: BookInterface[];
  continueBooks: BookInterface[];
}
