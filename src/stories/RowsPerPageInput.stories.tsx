import { Meta } from "@storybook/react";
import { MockContextProvider } from "./MockContext";
import RowsPerPageInput from "../components/ui/RowsPerPageInput";

export default {
  title: "Components/RowsPerPageInput",
  component: RowsPerPageInput,
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
    tags: {
      control: "array",
    },
    rowsPerPage: {
      control: "number",
    },
  },
} as Meta<typeof RowsPerPageInput>;

export const Default = {
  args: {
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
      {
        id: 4,
        name: "tag3",
        count: 30,
      },
      {
        id: 5,
        name: "tag3",
        count: 30,
      },
    ],
    rowsPerPage: 2,
  },
};
