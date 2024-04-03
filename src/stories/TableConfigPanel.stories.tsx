import { Meta } from "@storybook/react";
import { MockContextProvider } from "./MockContext";
import TableConfigPanel from "../components/ui/TableConfigPanel";

export default {
  title: "Components/TableConfigPanel",
  component: TableConfigPanel,
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
    isLoading: {
      control: "boolean",
    },
  },
} as Meta<typeof TableConfigPanel>;

export const Default = {
  args: {
    isLoading: false,
    sortBy: "popular",
    rowsPerPage: 10,
    tags: [
      {
        id: 1,
        name: "tag1",
        count: 10,
      },
      {
        id: 2,
        name: "tag2",
        count: 20,
      },
      {
        id: 3,
        name: "tag3",
        count: 30,
      },
    ],
    order: "desc",
  },
};

export const Loading = {
  args: {
    isLoading: true,
  },
};
