import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"

import CardSolution from "./CardSolution";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Card-Solution",
  component: CardSolution,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    componentSubtitle: "'Component Card",
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
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof CardSolution>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CardSolutions: Story = {
  args: {
    icon: <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.9998 1.66675L10.0002 18.3334H30.0002L19.9998 1.66675ZM19.9998 8.14558L24.1128 15.0001H15.8874L19.9998 8.14558ZM11.2502 33.3334C8.71886 33.3334 6.66683 31.2814 6.66683 28.7501C6.66683 26.2187 8.71886 24.1667 11.2502 24.1667C13.7815 24.1667 15.8335 26.2187 15.8335 28.7501C15.8335 31.2814 13.7815 33.3334 11.2502 33.3334ZM11.2502 36.6667C15.6224 36.6667 19.1668 33.1224 19.1668 28.7501C19.1668 24.3777 15.6224 20.8334 11.2502 20.8334C6.87791 20.8334 3.3335 24.3777 3.3335 28.7501C3.3335 33.1224 6.87791 36.6667 11.2502 36.6667ZM25.0002 25.8334V32.5001H31.6668V25.8334H25.0002ZM21.6668 35.8334V22.5001H35.0002V35.8334H21.6668Z"
      fill="#2D2D2D"
    />
  </svg>,
    tittle: "UI/UX Design",
    description:"We deliver a seamless and intuitive user experience that maximizes user engagement and satisfaction."
      ,
  }
};