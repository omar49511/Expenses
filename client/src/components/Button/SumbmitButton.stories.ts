import type { Meta, StoryObj } from "@storybook/react";
import { SubmitButton } from "./SubmitButton";

const meta: Meta<typeof SubmitButton> = {
  title: "SubmitButton",
  component: SubmitButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "jajja",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};
