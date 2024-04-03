import { Meta } from "@storybook/react";
import Pagination from "../components/ui/Pagination";
import { MockContextProvider } from "./MockContext";

export default {
  title: "Components/Pagination",
  component: Pagination,
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
    totalPages: {
      control: "number",
    },
    page: {
      control: "number",
    },
    isLoading: {
      control: "boolean",
    },
  },
} as Meta<typeof Pagination>;

export const Default = {};

export const Loading = {
  args: {
    isLoading: true,
  },
};

export const ManyPages = {
  args: {
    totalPages: 50,
    page: 25,
  },
};
