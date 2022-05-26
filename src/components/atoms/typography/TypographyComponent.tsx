import { Typography } from "@mui/material";

import { TypographyProps } from "../../../interfaces/interface";

export const TypographyComponent = ({
  variant,
  children,
  color,
  marginLeft,
  marginBottom,
  fontWeight,
  width,
  lineHeight,
}: TypographyProps) => {
  return (
    <Typography
      variant={variant}
      color={color}
      textAlign="left"
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      fontFamily={"Cera Pro"}
      fontWeight={fontWeight}
      width={width}
      lineHeight={lineHeight}
    >
      {children}
    </Typography>
  );
};
