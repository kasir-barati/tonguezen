import React from "react";

import HeaderClasses from "./Header.module.css";

export default function Header() {
  return (
    <header className={`${HeaderClasses.header} mb-5`}>
      <span>Kasir Barati</span>
    </header>
  );
}
