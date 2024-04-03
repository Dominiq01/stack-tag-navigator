import { Meta } from "@storybook/react";
import { MockContextProvider } from "./MockContext";
import TagBrowser from "../components/tags/TagBrowser";

export default {
  title: "Components/TagBrowser",
  component: TagBrowser,
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
} as Meta<typeof TagBrowser>;

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
      {
        id: 4,
        name: "tag4",
        count: 40,
      },
      {
        id: 5,
        name: "tag5",
        count: 50,
      },
      {
        id: 6,
        name: "tag6",
        count: 60,
      },
      {
        id: 7,
        name: "tag7",
        count: 70,
      },
      {
        id: 8,
        name: "tag8",
        count: 80,
      },
      {
        id: 9,
        name: "tag9",
        count: 90,
      },
      {
        id: 10,
        name: "tag10",
        count: 100,
      },
    ],
    order: "desc",
    page: 1,
    totalPages: 1,
  },
};

export const Loading = {
  args: {
    isLoading: true,
  },
};
