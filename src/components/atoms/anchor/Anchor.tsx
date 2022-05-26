import { ThemeProvider } from "@mui/material";
import Link from "@mui/material/Link";
import { Props } from "../../../interfaces/interface";
import { theme2 } from "../../../theme";
const Anchor = ({ children, sx, setExplore, explore }: Props) => {
  const handleExplore = () => {
    console.log(explore);
    explore ? setExplore(false) : setExplore(true);
    console.log("clicked");
  };
  return (
    <ThemeProvider theme={theme2}>
      <Link
        data-testid="anchorTest"
        onClick={handleExplore}
        href="#"
        underline="hover"
        sx={sx}
      >
        {children}
      </Link>
    </ThemeProvider>
  );
};

export default Anchor;
