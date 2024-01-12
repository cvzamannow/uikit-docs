import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"
import Input from "./Input";


const Meta = {
  title: "Components/Form (Beta🧪)/Input",
  component: Input,
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
} as Meta<typeof Input>;

export default Meta;
type Story = StoryObj<typeof Meta>;



export const InputOnly: Story = {
  args: {
    icon: "icon",
    name: "roid",
    type: "d",
    placeHolder: "ano",
    isError: false,
    onInput: true,
    onChange: () => {},
    id: "1",
  },
};