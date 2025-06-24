import { NavLink } from "react-router";
import { clsx } from "clsx";
import { useState } from "react";
import IsMobileHook from "../../hooks/isMobileHook";
import HeaderToggle from "./headerToggle";
import HeaderModal from "./headerModal";
import MenuIcon from "/assets/images/menu.svg";
import ArrowIcon from "/assets/images/up-arrow.svg";
import styles from "./header.module.css";

const Header = () => {
  const isMobile = IsMobileHook();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const ModalClicked = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <header className={clsx(styles.header, "z-50 shadow-blue-200")}>
      <div className="container mx-auto flex items-center justify-between px-2 py-3">
        <HeaderToggle />
        {isMobile ? (
          <button onClick={ModalClicked}>
            <img
              className={clsx(styles["menu-button"], "h-8 rounded-full")}
              src={isModalVisible ? ArrowIcon : MenuIcon}></img>
          </button>
        ) : (
          <HeaderModal isMobile={isMobile} />
        )}
      </div>
      { isMobile && isModalVisible ?
      <div>
        <HeaderModal isMobile={isMobile} />
      </div> : <></>
      }

    </header>
  );
};

export default Header;
