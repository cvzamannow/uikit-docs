import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"
import Select from "./Select";


const Meta = {
  title: "Components/Form (Beta🧪)/Select",
  component: Select,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    componentSubtitle: "'Component Form",
    docs: {
      page: () => <>
        <Title />
        <Description />
        <Subtitle />

        <PrimaryDocBlock />
        <Controls />

        <Stories />
      </>,
    },
  },
} as Meta<typeof Select>;

export default Meta;
type Story = StoryObj<typeof Meta>;



export const FormSelect: Story = {
  args: {
    data: [
    ],
    isError: false,
    name: "Select",
    icon: <svg></svg>,
    placeHolder: "Select your text",
    onInput: true,
    onChange: () => {},
    id: "1"
  },
};