import MenuClasses from "./Menu.module.css";

export default function Menu(props: {
  items: { text: string; pageUrl: string; isActive?: boolean }[];
}) {
  return (
    <nav className={MenuClasses.menu}>
      <div className={`${MenuClasses.navMenu} mb-5`}>
        <ul className={MenuClasses.navMenuList}>
          {props.items.map((item) => (
            <li>
              <a
                href={item.pageUrl}
                className={`${MenuClasses.navMenuLink} ${
                  item.isActive ? MenuClasses.active : ""
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
