import "./SubmitButton.css";

export interface SubmitButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}
export const SubmitButton = ({
  primary = false,
  backgroundColor,
  label,
  ...props
}: SubmitButtonProps) => {
  const mode = primary ? "SubmitButton--primary" : "SubmitButton--secondary";
  return (
    <button
      type="button"
      className={["SubmitButton", mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
