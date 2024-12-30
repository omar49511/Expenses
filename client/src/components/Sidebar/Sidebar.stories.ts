import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Sidebar",
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Submit",
    baseColor: "hsl(120, 60%, 50%)",
  },
};
