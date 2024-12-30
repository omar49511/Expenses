import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LoginForm from "./LoginForm.tsx";

describe("Login Form", (): void => {
  it("should render the login form", (): void => {
    render(<LoginForm></LoginForm>);
  });

  it("should render the login form", () => {
    render(<LoginForm />);

    // Verificar que los elementos del formulario existan
    expect(screen.getByLabelText(/email/i)).not.toBeNull();
    expect(screen.getByLabelText(/password/i)).not.toBeNull();
    expect(screen.getByRole("button", { name: /login/i })).not.toBeNull();
    expect(
      screen.getByRole("button", { name: /create account/i })
    ).not.toBeNull();
    expect(screen.getByText(/forgot password/i)).not.toBeNull();
  });
});
