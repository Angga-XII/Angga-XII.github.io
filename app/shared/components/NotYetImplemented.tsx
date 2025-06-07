// import { Heading1 } from "./textWrapper";
import GlitchText from "../animatedComponent/glitchedText/glitchedText";
import IsMobileHook from "../hooks/isMobileHook";
import BodyWrapper from "./bodyWrapper/bodyWrapper";

const NotYetImplemented = (props: any) => {
  const isMobile = IsMobileHook();

  return (
    <div className="py-100">
      <BodyWrapper isMobile={isMobile}>
        <GlitchText speed={3} enableShadows={false} enableOnHover={false} className="bg-black">
          {props.name} is not yet implemented
        </GlitchText>
      </BodyWrapper>
    </div>
  );
};

export default NotYetImplemented;
