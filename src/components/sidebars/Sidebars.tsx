import React from "react";
import { isEmptyArray, isNil } from "../../shared/helpers/utils.helper";

import { SidebarItem } from "./Sidebar.type";
import SidebarsClasses from "./Sidebars.module.css";

export default function Sidebar(props: { items: SidebarItem[] }) {
  const { items } = props;

  return (
    <aside className={SidebarsClasses.sidebars}>
      {items.map((item) => (
        <div className={SidebarsClasses.sidebar}>
          <div className={`${SidebarsClasses.sidebarHeader} top-border-radius`}>
            <a href={item.pageUrl}>{item.title}</a>
          </div>
          <div className={`${SidebarsClasses.sidebarContent} p-5`}>
            {!isNil(item.content) && !isNil(item.contentList) && throwError()}
            {!isNil(item.content) && item.content}
            {!isNil(item.contentList) && !isEmptyArray(item.contentList!) && (
              <ul className={SidebarsClasses.sidebarContentList}>
                {item.contentList!.map((contentList) => (
                  <li
                    className={`${SidebarsClasses.sidebarContentListItem} mb-5 pb-5`}
                  >
                    <a href={contentList.pageUrl}>{contentList.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </aside>
  );
}

function throwError(): never {
  throw new Error(
    "You cannot specify content and contentList at the same time"
  );
}
