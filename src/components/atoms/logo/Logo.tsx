import React from "react";
import { useNavigate } from "react-router-dom";
interface LogoProp {
  image: string;
  style?: {
    height?: string;
    width?: string;
    marginTop?: string;
    marginLeft?: string;
  };
}
const Logo = ({ image, style }: LogoProp) => {
  const navigate = useNavigate();
  return (
    <img
      data-testid="logoTest"
      src={image}
      alt="Logo"
      style={style}
      onClick={() => {
        navigate("/");
      }}
    />
  );
};

export default Logo;
