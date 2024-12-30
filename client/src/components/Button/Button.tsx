import { useState } from "react";

import { ReactNode } from "react";
import "./SubmitButton.css";

// Función para obtener un color más oscuro o más claro basado en HSL
const adjustColor = (color: string, adjustment: number): string => {
  const [h, s, l] = color.match(/\d+/g)!.map(Number); // Extrae los valores H, S, L
  return `hsl(${h}, ${s}%, ${Math.min(100, Math.max(0, l + adjustment))}%)`; // Ajusta el L
};

interface ButtonProps {
  text?: string;
  icon?: ReactNode;
  baseColor: string;
  size?: "small" | "medium" | "large";
  width?: "full" | "none";
  radius?: "full" | "normal";
}

export default function Button({
  text,
  icon,
  baseColor,
  size = "medium",
  width = "full",
  radius = "normal",
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Genera el color de hover basado en el color base (ajustando la luminosidad)
  const hoverColor = adjustColor(baseColor, 20); // Aquí ajusta +20 para hover más claro

  const padding = {
    small: "0.5rem 1rem",
    medium: "1rem 2rem",
    large: "2rem 4rem",
  };
  const w_full = {
    full: "100%",
    none: "",
  };
  const border = {
    full: "500px",
    normal: "4px",
  };
  return (
    <button
      className="button large"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? hoverColor : baseColor,
        color: "white", // Asegura que el texto sea legible
        width: w_full[width],
        padding: padding[size],
        border: "none",
        borderRadius: border[radius],
        cursor: "pointer",
        fontSize: "1.2rem",
      }}
    >
      {text}
      {icon}
    </button>
  );
}
