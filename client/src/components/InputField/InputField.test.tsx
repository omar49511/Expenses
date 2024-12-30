import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import InputField from "./InputField.tsx";

describe("InputField", () => {
  it("should render the input field", () => {
    render(<InputField type="text" label="" onChange={() => {}} />);
    const input = screen.getByRole("textbox");
    expect(input).not.toBeNull();
  });

  it("should render the input field with the correct placeholder", () => {
    render(
      <InputField
        type="text"
        placeholder="Enter your message"
        label=""
        onChange={() => {}}
      />
    );
    const input = screen.getByPlaceholderText("Enter your message");
    expect(input).not.toBeNull();
  });

  it("should render the input field with the correct class", () => {
    render(<InputField type="text" label="" onChange={() => {}} />);
    const divContainer = screen.getByRole("textbox").closest("div");
    expect(divContainer).not.toBeNull();
    if (divContainer) {
      expect(divContainer.classList.contains("input-box")).toBe(true);
    }
  });

  it("should render the input field with the type text", () => {
    render(<InputField type="text" label="" onChange={() => {}} />);
    const input = screen.getByRole("textbox");
    expect(input.getAttribute("type")).toBe("text");
  });

  it("should render the input field with the type email", () => {
    render(<InputField type="email" label="Email Field" onChange={() => {}} />);
    const input = screen.getByRole("textbox");
    expect(input.getAttribute("type")).toBe("email");
  });

  it("should render the input field with the type password", () => {
    render(
      <InputField
        type="password"
        label="Password Field"
        name="password"
        onChange={() => {}}
      />
    );
    const input = screen.getByLabelText("Password Field"); // Ahora debería encontrar el input
    expect(input.getAttribute("type")).toBe("password");
  });
  it("should render in the input a button to show and hide the password", () => {
    render(
      <InputField
        type="password"
        label="Password Field"
        name="password"
        onChange={() => {}}
      />
    );
    const toggleButton = screen.getByRole("button");
    expect(toggleButton).not.toBeNull();
  });
  it("should toggle between password visibility when the toggle button is clicked", () => {
    render(
      <InputField
        label="Password"
        type="password"
        name="password"
        value=""
        onChange={() => {}}
      />
    );

    const input = screen.getByLabelText("Password");
    const toggleButton = screen.getByRole("button", { name: /show password/i });

    // Initial state: type is password
    expect(input.getAttribute("type")).toBe("password");

    // Click the toggle button to show password
    fireEvent.click(toggleButton);
    expect(input.getAttribute("type")).toBe("text");

    // Click again to hide password
    fireEvent.click(toggleButton);
    expect(input.getAttribute("type")).toBe("password");
  });
});
