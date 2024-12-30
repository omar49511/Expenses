import {
  RiPieChartFill,
  RiSettings3Fill,
  RiNotification3Fill,
  RiMoonClearFill,
  RiLogoutBoxRFill,
} from "react-icons/ri";
import { FaPiggyBank, FaHistory, FaPlusSquare } from "react-icons/fa";
import "./Sidebar.css";
import "../../index.css";
import { useState } from "react";
import profilePhoto from "../../assets/33.jpg";

import { Link } from "react-router-dom";

interface SidebarProps {
  isVisible: boolean;
}

interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactNode; // Icono puede ser un componente React
  selected: string;
  setSelected: (title: string) => void; // Callback que recibe el título
}

const Item: React.FC<ItemProps> = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}) => {
  return (
    <li>
      <Link
        to={to}
        className={`sidebar__link ${selected === title ? "active-link" : ""}`}
        onClick={() => setSelected(title)}
      >
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default function Sidebar({ isVisible }: SidebarProps) {
  // Estado para controlar el enlace activo
  const [activeLink, setActiveLink] = useState<string>("dashboard");

  return (
    <nav className={`sidebar ${isVisible ? "show-sidebar" : ""}`} id="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__user">
          <div className="sidebar__img">
            <img src={profilePhoto} alt="" />
          </div>
          <div className="sidebar__info">
            <h3>John Doe</h3>
            <span>John@gmail.com</span>
          </div>
        </div>
        <div className="sidebar__content">
          <div>
            <h3 className="sidebar__title">MANAGE</h3>
            <ul className="sidebar__list">
              <Item
                title="Dashboard"
                to="/"
                icon={<RiPieChartFill className="icon" />}
                selected={activeLink}
                setSelected={setActiveLink}
              />
              <Item
                title="Budget"
                to="/budget"
                icon={<FaPiggyBank className="icon" />}
                selected={activeLink}
                setSelected={setActiveLink}
              />
              <Item
                title="History"
                to="/history"
                icon={<FaHistory className="icon" />}
                selected={activeLink}
                setSelected={setActiveLink}
              />
              <Item
                title="New Expense"
                to="/new-expense"
                icon={<FaPlusSquare className="icon" />}
                selected={activeLink}
                setSelected={setActiveLink}
              />
            </ul>
          </div>
          <div>
            <h3 className="sidebar__title">SETTINGS</h3>
            <ul className="sidebar__list">
              <Item
                title="Settings"
                to="/settings"
                icon={<RiSettings3Fill className="icon" />}
                selected={activeLink}
                setSelected={setActiveLink}
              />
              <Item
                title="Notifications"
                to="/notifications"
                icon={<RiNotification3Fill className="icon" />}
                selected={activeLink}
                setSelected={setActiveLink}
              />
            </ul>
          </div>
        </div>
        <div className="sidebar__actions">
          <button className="sidebar__link">
            <RiMoonClearFill
              className="sidebar__theme icon"
              id="theme-button"
            />
            <span>Theme</span>
          </button>
          <button className="sidebar__link">
            <RiLogoutBoxRFill className="icon" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
