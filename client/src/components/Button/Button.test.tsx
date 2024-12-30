import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "./Button.tsx";

describe("InputField", () => {
  it("should render the button", () => {
    const baseColor = "hsl(120, 60%, 50%)"; // Verde
    render(<Button text="Click Me" baseColor={baseColor} />);
    const button = screen.getByRole("button");
    expect(button).not.toBeNull();
  });
  it("should render the correct text inside the button", () => {
    const baseColor = "hsl(120, 60%, 50%)"; // Verde
    render(<Button text="Click Me" baseColor={baseColor} />);
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("Click Me");
  });
  it("should render an icon when provided", () => {
    const TestIcon = <div data-testid="icon">Test Icon</div>;
    const baseColor = "hsl(120, 60%, 50%)"; // Verde
    render(<Button text="Click Me" icon={TestIcon} baseColor={baseColor} />);

    // Verificamos que el ícono esté presente en el botón
    const icon = screen.getByTestId("icon");
    expect(icon).not.toBeNull();
  });
  it("should change to the appropriate hover color", () => {
    const baseColor = "hsl(120, 60%, 50%)"; // Verde
    const hoverColor = "hsl(120, 60%, 70%)"; // Hover más claro

    render(<Button text="Hover Me" baseColor={baseColor} />);
    const button = screen.getByRole("button");

    // Verifica el color base inicial
    expect(button.style.backgroundColor).toBe(baseColor);

    // Simula el hover
    fireEvent.mouseEnter(button);

    // Verifica si el color cambia al de hover
    expect(button.style.backgroundColor).toBe(hoverColor);

    // Simula dejar de hacer hover
    fireEvent.mouseLeave(button);

    // Verifica si el color vuelve al original
    expect(button.style.backgroundColor).toBe(baseColor);
  });
  it("should apply different sizes", () => {
    const baseColor = "hsl(120, 60%, 50%)";
    render(<Button baseColor={baseColor} size="large" />);
    const button = screen.getByRole("button");
    expect(button.style.padding).toBe("2rem 4rem"); // asume un estilo específico para el tamaño 'large'
  });
});
