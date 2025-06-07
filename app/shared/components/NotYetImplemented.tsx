// import { Heading1 } from "./textWrapper";
import GlitchText from "../animatedComponent/glitchedText/glitchedText";
import BodyWrapper from "./bodyWrapper/bodyWrapper";

const NotYetImplemented = (props: any) => {
  return (
    <BodyWrapper>
      <GlitchText speed={3} enableShadows={false} enableOnHover={false} className="bg-black">
        {props.name} is not yet implemented
      </GlitchText>
    </BodyWrapper>
  );
};

export default NotYetImplemented;
