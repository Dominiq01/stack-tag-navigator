import { Meta } from "@storybook/react";
import SortSelect from "../components/ui/SortSelect";
import { MockContextProvider } from "./MockContext";

export default {
  title: "Components/SortSelect",
  component: SortSelect,
  decorators: [
    (Story, context) => (
      <MockContextProvider initialValues={{ ...context.args }}>
        <Story />
      </MockContextProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen center",
  },
  argTypes: {
    sortBy: {
      control: "radio",
      options: ["popular", "name", "activity"],
    },
  },
} as Meta<typeof SortSelect>;

export const Default = {
  args: {
    sortBy: "popular",
  },
};
export const SortByName = {
  args: {
    sortBy: "name",
  },
};
export const SortByActivity = {
  args: {
    sortBy: "activity",
  },
};
