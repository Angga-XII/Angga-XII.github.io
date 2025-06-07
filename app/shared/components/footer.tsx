import type { Mode } from "../utils/modeInterface";
import { version } from "../../../package.json";
import { clsx } from "clsx";
import IsMobileHook from "../hooks/isMobileHook";

const Footer = (props: Mode) => {
  const isMobile = IsMobileHook();

  return (
    <footer className="bg-black px-[5%] font-mono font-bold text-white">
      {`Dev - v${version}`}
    </footer>
  );
};

export default Footer;
