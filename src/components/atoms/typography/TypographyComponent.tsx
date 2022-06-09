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
  className,
  fontFamily,
}: TypographyProps) => {
  return (
    <Typography
      variant={variant}
      color={color}
      textAlign="left"
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      width={width}
      lineHeight={lineHeight}
      className={className}
    >
      {children}
    </Typography>
  );
};
