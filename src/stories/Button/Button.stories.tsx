import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls } from "@storybook/blocks";

import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    componentSubtitle: "'Conponent Button",
    docs: {
      page: () => (
        <>
          <Title></Title>
          <Description></Description>
          <Subtitle></Subtitle>
          <PrimaryDocBlock></PrimaryDocBlock>
          <Controls></Controls>
          <Stories></Stories>
        </>
      ),
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: <>Button</>,  
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: <>Button</>,
  },
};



