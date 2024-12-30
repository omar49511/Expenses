import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import "./TableRow.css";

interface TableRowProps {
  id: number;
  label: string;
  amount: string;
  onEdit: () => void;
  onDelete: () => void;
}

const TableRow: React.FC<TableRowProps> = ({
  label,
  amount,
  onEdit,
  onDelete,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="table-row">
      <span className="table-cell">{label}</span>
      <span className="table-cell amount">{amount}</span>
      <div className="menu-button" ref={buttonRef} onClick={toggleDropdown}>
        ⋮
      </div>
      {dropdownOpen &&
        buttonRef.current &&
        createPortal(
          <Dropdown
            anchor={buttonRef.current}
            onClose={closeDropdown}
            onEdit={onEdit}
            onDelete={onDelete}
          />,
          document.body
        )}
    </div>
  );
};

interface DropdownProps {
  anchor: HTMLDivElement;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  anchor,
  onClose,
  onEdit,
  onDelete,
}) => {
  const rect = anchor.getBoundingClientRect();

  return (
    <div
      className="dropdown-menu"
      style={{
        position: "absolute",
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      }}
    >
      <button onClick={onEdit} className="dropdown-option">
        Edit
      </button>
      <button onClick={onDelete} className="dropdown-option">
        Delete
      </button>
      <button onClick={onClose} className="dropdown-option close">
        Close
      </button>
    </div>
  );
};

export default TableRow;
