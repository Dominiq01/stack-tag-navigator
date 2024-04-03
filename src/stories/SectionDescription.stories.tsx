import { Meta } from "@storybook/react";
import SectionDescription from "../components/ui/SectionDescription";

export default {
  title: "Components/SectionDescription",
  component: SectionDescription,
  parameters: {
    layout: "fullscreen center",
  },
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
} as Meta<typeof SectionDescription>;

export const Default = {
  args: {
    title: "Title",
    description: "Description",
  },
};


