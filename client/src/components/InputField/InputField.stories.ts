import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField.tsx";

const meta: Meta<typeof InputField> = {
  title: "InputField",
  component: InputField,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: "Name:",
    name: "budget",
    type: "text",
    placeholder: "Write here...",
    onChange: () => {},
  },
};
export const Password: Story = {
  args: {
    label: "Contraseña",
    name: "budget",
    type: "password",
    onChange: () => {},
  },
};
export const Email: Story = {
  args: {
    label: "Correo",
    name: "budget",
    type: "email",
    onChange: () => {},
  },
};
