import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Submit",
    baseColor: "hsl(120, 60%, 50%)",
  },
};
export const Secondary: Story = {
  args: {
    text: "Submit",
    icon: "fa",
    size: "medium",
    baseColor: "hsl(120, 60%, 50%)",
  },
};
