import type { Mode } from "../utils/modeInterface";
import { version } from "../../../package.json";
import { clsx } from "clsx";
import IsMobileHook from "../hooks/isMobileHook";
import environmentType from "../hooks/EnvHook";

const Footer = (props: Mode) => {
  const isMobile = IsMobileHook();
  const envType = environmentType();
  return (
    <footer className="bg-black px-[5%] font-mono font-bold text-white">
      {`${envType} - v${version}`}
    </footer>
  );
};

export default Footer;
