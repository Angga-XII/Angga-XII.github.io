import { clsx } from "clsx";

import { NavLink } from "react-router";

import type { Mode } from "../../utils/modeInterface";
import styles from "./header.module.css";

// const menuList: { title: string; url: string }[] = [
//   { title: "Home", url: "/" },
//   { title: "Blog", url: "/blog" },
//   { title: "Message", url: "/message" },
//   { title: "Explore", url: "/explore" },
// ];

const menuList = ["Profile", "Resume", "Portfolio", "Message"];

const HeaderModal = (props: Mode) => {
  return (
    <ul className={clsx(styles['link-list']," font-mono", props.isMobile ? "text-l flex-col" : "text-2xl flex-row space-x-6")}>
      {menuList.map((item) => (
        <li key={item}>
          <NavLink
            to={item === "Profile" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) => clsx(styles.link, isActive ? "border-b-2" : "")}>
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default HeaderModal;
