import { useState } from "react";
import Header from "./components/Sidebar/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ButtonAdd from "./components/Button/ButtonAdd";
import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Budget,
  History,
  Notifications,
  Settings,
  AddExpense,
} from "./pages/index";

export default function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <Header
        toggleSidebar={toggleSidebar}
        isSidebarVisible={isSidebarVisible}
      />
      <Sidebar isVisible={isSidebarVisible} />
      <main
        className={`main-content container ${
          isSidebarVisible ? "left-pd" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/history" element={<History />} />
          <Route path="/new-expense" element={<AddExpense />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </main>
      <ButtonAdd></ButtonAdd>
    </>
  );
}
