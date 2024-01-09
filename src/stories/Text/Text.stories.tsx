import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls } from "@storybook/blocks";

import Text from "./text";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    componentSubtitle: "'Component Text",
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Subtitle />

          <PrimaryDocBlock />
          <Controls />

          <Stories />
        </>
      ),
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

// Heading

export const Example: Story = {
  args: {
    tag: 'h1',
    family: "Lato",
    weight: "900",
    color: "#383838",
    type: 'subtitle2',
    children: <>Text as an example</>,
  }
};
