// src/stories/GridStory.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"
import PaddingContainer from "./paddingContainer";
import { ContentContainer } from "./paddingContainer.style";


const meta = {
  title: "Components/PaddingContainer",
  component: PaddingContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    componentSubtitle: "'Component Container",
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
} satisfies Meta<typeof PaddingContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: [
        <ContentContainer>Content</ContentContainer>
    ],
  },
};