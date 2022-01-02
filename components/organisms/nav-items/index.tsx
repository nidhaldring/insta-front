import { useRouter } from "next/router";
import { useState } from "react";
import Add from "../../molecules/add";
import Explore from "../../molecules/explore";
import Home from "../../molecules/home";
import Notifs from "../../molecules/notifs";
import Send from "../../molecules/send";

const getActiveItemIndex = (path: string) => {
  if (path === "/") {
    return 0;
  }

  if (path === "/inbox") {
    return 1;
  }

  if (path === "/explore") {
    return 3;
  }

  return -1;
};

const NavItems = () => {
  const router = useRouter();
  const [activeItemIndex, setActiveItemIndex] = useState(
    getActiveItemIndex(router.pathname)
  );
  const items = [Home, Send, Add, Explore, Notifs];

  return (
    <ul className="flex gap-4">
      {items.map((Item, index) => (
        <li key={index} onClick={() => setActiveItemIndex(index)}>
          <Item active={activeItemIndex === index}></Item>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
