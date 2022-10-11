import React from "react";
import { isEmptyArray, isNil } from "../../shared/helpers/utils.helper";

import NavbarClasses from "./Navbar.module.css";
import { NavbarItem, NavbarProps } from "./Navbar.type";

export default function Navbar(props: NavbarProps) {
  const { items } = props;
  return (
    <aside className={NavbarClasses.navbar}>
      <ul>
        {items.map((item) => (
          <li>
            <a href={item.pageUrl} className="top-border-radius">
              {item.text}
            </a>
            {!isNil(item.children) &&
              !isEmptyArray(item.children!) &&
              generateUlRecursively(item as Required<NavbarItem>)}
          </li>
        ))}
      </ul>
    </aside>
  );
}

function generateUlRecursively(item: Required<NavbarItem>) {
  return (
    <ul className="pl-25">
      {item.children.map((child) => generateLiRecursively(child))}
    </ul>
  );
}

function generateLiRecursively(item: NavbarItem) {
  return (
    <li>
      <a href={item.pageUrl} className="my-10">
        {item.text}
      </a>
      {!isNil(item.children) &&
        !isEmptyArray(item.children!) &&
        generateUlRecursively(item as Required<NavbarItem>)}
    </li>
  );
}
