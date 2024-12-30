import "./InputField.css";
import { useState } from "react";
type TypesInputs = "text" | "password" | "email";

interface InputFieldProps {
  label: string;
  name?: string;
  type: TypesInputs;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="input-box">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type === "password" && showPassword ? "text" : type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input"
      />
      {type === "password" && (
        <button
          className="visibility"
          type="button"
          onClick={handleToggleVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      )}
    </div>
  );
}
