// import { Heading1 } from "./textWrapper";
import clsx from "clsx";
import GlitchText from "../animatedComponent/glitchedText/glitchedText";
import IsMobileHook from "../hooks/isMobileHook";
import BodyWrapper from "./bodyWrapper/bodyWrapper";

const NotYetImplemented = (props: any) => {
  const isMobile = IsMobileHook();

  return (
    <div className={clsx("bg-white items-center justify-center flex flex-row",isMobile ? "h-[150vw]" : "h-[50vw]")}>
      <BodyWrapper isMobile={isMobile}>
        <GlitchText speed={3} enableShadows={false} enableOnHover={false} className="bg-black">
          {props.name} is not yet implemented
        </GlitchText>
      </BodyWrapper>
    </div>
  );
};

export default NotYetImplemented;
