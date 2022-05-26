import React from "react";
import { UnderLinedButtonInterface } from "../../../interfaces/interface";

const UnderLinedButton = ({
  text1,
  color,
  className,
}: UnderLinedButtonInterface) => {
  return (
    <div className={className}>
      <button data-testid="underlinedButtonTest" style={{ color: color }}>
        {text1}
      </button>
    </div>
  );
};

export default UnderLinedButton;
