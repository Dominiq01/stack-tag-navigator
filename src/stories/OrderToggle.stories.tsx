import { Meta } from "@storybook/react";
import OrderToggle from "../components/ui/OrderToggle";
import { MockContextProvider } from "./MockContext";

export default {
  title: "Components/OrderToggle",
  component: OrderToggle,
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
    order: {
      control: "radio",
      options: ["asc", "desc"],
    },
  },
} as Meta<typeof OrderToggle>;

export const AscendingOrder = {
  args: {
    order: "asc",
  },
};

export const DescendingOrder = {
  args: {
    order: "desc",
  },
};
