import "./BudgetCard.css";
interface BudgetCardProps {
  title: string;
  amount: number;
  color?: string;
  icon?: string;
  showIcon?: boolean;
  isPercentage?: boolean;
}

export default function BudgetCard({
  title,
  amount,
  color = "gray", // Color predeterminado
  icon,
  showIcon = false,
  isPercentage = false,
}: BudgetCardProps) {
  const formattedAmount = isPercentage
    ? `${amount.toFixed(2)}%`
    : new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

  return (
    <section className={`card ${color}`} style={{ borderColor: color }}>
      <header className={`card-header header-${color}`}>
        <h2>{title}</h2>
      </header>
      <div className="card-content">
        <span className="amount">{formattedAmount}</span>
        {showIcon && <span className="icon">{icon}</span>}
      </div>
    </section>
  );
}
