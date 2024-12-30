import { useState } from "react";
import BudgetCard from "../components/Budget/BudgetCard";
import "./Budget.css";
import BudgetTable from "../components/Budget/BudgetTable";

export default function Budget() {
  // Datos de ejemplo para los componentes de presupuesto

  const [totalIncome] = useState(100); // Ingresos totales

  // LOS VALORES DE 50 DEBEN SER DINÁMICOS
  const remainingAmount = totalIncome - (50 + 50);

  const data = [
    { id: 1, subcategory: "Salary", amount: 12000 },
    { id: 2, subcategory: "Freelance", amount: 8000 },
    { id: 3, subcategory: "Investments", amount: 5000 },
  ];

  const handleEdit = (id: number) => {
    console.log(`Edit item with ID: ${id}`);
    alert(`Edit item with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete item with ID: ${id}`);
    alert(`Delete item with ID: ${id}`);
  };

  return (
    <>
      <h1>Budget</h1>
      <div className="budget-container">
        <div className="table-section">
          <BudgetTable
            title="Income"
            data={data}
            columns={[
              { key: "subcategory", label: "Subcategories" },
              { key: "amount", label: "Amount" },
            ]}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <BudgetTable
            title="Expenses Essentials"
            data={data}
            colorTheme="yellow"
            columns={[
              { key: "subcategory", label: "Subcategories" },
              { key: "amount", label: "Amount" },
            ]}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <BudgetTable
            title="Expenses Discretional"
            data={data}
            colorTheme="yellow"
            columns={[
              { key: "subcategory", label: "Subcategories" },
              { key: "amount", label: "Amount" },
            ]}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <BudgetTable
            title="Debt"
            data={data}
            colorTheme="red"
            columns={[
              { key: "subcategory", label: "Subcategories" },
              { key: "amount", label: "Amount" },
            ]}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <BudgetTable
            title="Savings"
            data={data}
            colorTheme="blue"
            columns={[
              { key: "subcategory", label: "Subcategories" },
              { key: "amount", label: "Amount" },
            ]}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <BudgetTable
            title="Investment"
            data={data}
            colorTheme="blue"
            columns={[
              { key: "subcategory", label: "Subcategories" },
              { key: "amount", label: "Amount" },
            ]}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
        <div className="cards-section">
          <div className="cards-budget-container">
            <BudgetCard
              title="Remanente"
              amount={remainingAmount}
              color={remainingAmount === 0 ? "green" : "red"} // Cambia el color dinámicamente
              showIcon
              icon={remainingAmount === 0 ? "✌" : "👀"} // Cambia el ícono dinámicamente
            />
            <BudgetCard
              title="Expenses"
              amount={(50 / totalIncome) * 100}
              color="yellow"
              showIcon={false}
              isPercentage
            />
            <BudgetCard
              title="Savings and investments"
              amount={(50 / totalIncome) * 100}
              color="blue"
              showIcon={false}
              isPercentage
            />
          </div>
        </div>
      </div>
    </>
  );
}
