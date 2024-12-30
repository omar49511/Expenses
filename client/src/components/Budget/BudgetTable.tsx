import React from "react";
import TableRow from "../TableRow/TableRow";
import "./BudgetTable.css";

interface Item {
  id: number;
  subcategory: string;
  amount: number; // Permite flexibilidad en las columnas
}

interface Column {
  key: keyof Item; // Restringe las claves a las de `Item`
  label: string;
}

interface ReusableTableProps {
  title: string; // Título de la tabla
  data: Item[]; // Datos para las filas
  colorTheme?: "blue" | "red" | "yellow"; // Temas de color disponibles
  columns: Column[]; // Columnas dinámicas con etiqueta y clave
  onEdit: (id: number) => void; // Función de editar
  onDelete: (id: number) => void; // Función de eliminar
}

const BudgetTable: React.FC<ReusableTableProps> = ({
  title,
  data,
  colorTheme,
  columns,
  onEdit,
  onDelete,
}) => {
  const totalAmount = data.reduce((acc, item) => acc + (item.amount || 0), 0);

  return (
    <div className={`reusable-table`}>
      {/* Encabezado */}
      <div className={`table-title back-${colorTheme}`}>
        <h2>{title}</h2>
      </div>

      {/* Contenido de la tabla */}
      <div className="table-content">
        {/* Encabezado dinámico */}
        <div className={`table-header ${colorTheme}`}>
          {columns.map((column) => (
            <span key={column.key}>{column.label}</span>
          ))}
        </div>

        {/* Filas de datos */}
        <div className="scrollable-container">
          {data.map((item) => (
            <TableRow
              key={item.id}
              id={item.id}
              label={item.subcategory}
              amount={`$${item.amount.toLocaleString()}`}
              onEdit={() => onEdit(item.id)}
              onDelete={() => onDelete(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Total */}
      <div className="table-footer">
        <div className={`total-row ${colorTheme}`}>
          <span>Total</span>
          <span>${totalAmount.toLocaleString()}</span>
        </div>
        <button className={`add-button hover-${colorTheme}`}>+</button>
      </div>
    </div>
  );
};

export default BudgetTable;
