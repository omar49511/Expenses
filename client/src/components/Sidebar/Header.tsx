import "./Header.css";
import "../../index.css";
import { RiCloudFill, RiMenuLine } from "react-icons/ri";

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarVisible: boolean;
}

export default function Header({
  toggleSidebar,
  isSidebarVisible,
}: HeaderProps) {
  return (
    <header
      className={`header ${isSidebarVisible ? "left-pd" : ""}`}
      id="header"
    >
      <div className="header__container">
        <a href="" className="header__logo">
          <RiCloudFill className="logo" />
          <span>Expenses app</span>
        </a>
        <button
          className="header__toggle"
          id="header-toggle"
          onClick={toggleSidebar}
        >
          <RiMenuLine />
        </button>
      </div>
    </header>
  );
}
