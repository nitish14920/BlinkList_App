import Link from "@mui/material/Link";
import { Props } from "../../../interfaces/interface";

const Anchor = ({ children, sx, setExplore, explore }: Props) => {
  const handleExplore = () => {
    console.log(explore);
    explore ? setExplore(false) : setExplore(true);
    console.log("clicked");
  };
  return (
    <Link
      data-testid="anchorTest"
      onClick={handleExplore}
      href="#"
      underline="hover"
      sx={sx}
    >
      {children}
    </Link>
  );
};

export default Anchor;
