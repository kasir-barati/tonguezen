import React from "react";

import MainClasses from "./Main.module.css";
import Navbar from "../navbar/Navbar";
import { NavbarItem } from "../navbar/Navbar.type";

export default function Main() {
  const navbarItems: NavbarItem[] = [
    {
      pageUrl: "#",
      text: "Books",
      children: [
        {
          pageUrl: "#",
          text: "Economy",
          children: [{ pageUrl: "#", text: "Zero Marginal Cost Society" }],
        },
        {
          text: "Technical",
          pageUrl: "#",
          children: [
            {
              text: "The Pragmatic Programmer",
              pageUrl: "#",
            },
            {
              text: "Node.js Design Patterns",
              pageUrl: "#",
            },
          ],
        },
      ],
    },
    {
      text: "Video Tutorials",
      pageUrl: "#",
      children: [{ text: "Something", pageUrl: "#" }],
    },
    {
      text: "Podcasts",
      pageUrl: "#",
      children: [{ text: "Something", pageUrl: "#" }],
    },
  ];

  return (
    <main className={`${MainClasses.main} mb-5`}>
      <Navbar items={navbarItems}></Navbar>
    </main>
  );
}
