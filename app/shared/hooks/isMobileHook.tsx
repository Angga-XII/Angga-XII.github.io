import { useState, useEffect, createContext } from "react";
import { useMediaQuery } from "react-responsive";


const IsClientCtx = createContext(false);

const IsMobileHook = () => {
  const [isClient, setIsClient] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  const isMobile:Boolean = useMediaQuery({maxWidth: 768})

  useEffect(() => {
    setIsClient(true)
  }, []);


  return isClient ? isMobile : false;
};

export default IsMobileHook;
