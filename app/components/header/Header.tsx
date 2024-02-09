"use client";
import { useState } from "react";
import styles from "./Header.module.scss";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
const MENU_ITEMS = [
  { id: "about", title: "ABOUT" },
  { id: "skills", title: "SKILLS" },
  { id: "experience", title: "EXPERIENCE" },
  { id: "education", title: "EDUCATION" },
  { id: "contact", title: "CONTACT" },
];

export default function Header() {
  const [show, setShow] = useState(true);
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>SVG</div>
      <MenuRoundedIcon
        onClick={() => setShow(!show)}
        className={styles.menuIcon}
      />
      <div className={show ? styles.navLinks : styles.navLinksShow}>
        <ul>
          {MENU_ITEMS.map((e, index) => (
            <li key={index}>
              <a href={`#${e.id}`}>{e.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
