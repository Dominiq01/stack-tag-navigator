import { Meta } from "@storybook/react";
import ErrorDisplay from "../components/ui/ErrorDisplay";

export default {
  title: "Components/ErrorDisplay",
  component: ErrorDisplay,
  parameters: {
    layout: "fullscreen center",
  },
  argTypes: {
    errorMessage: { control: "text" },
  },
} as Meta<typeof ErrorDisplay>;

export const Default = {
  args: {
    errorMessage: "Something went wrong",
  },
};

export const CustomMessage = {
  args: {
    errorMessage: "Failed to load user data",
  },
};
