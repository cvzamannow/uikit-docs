import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls } from "@storybook/blocks";

import Button from "./Footer";
import Footer from "./Footer";

const meta = {
  title: "Components/Footer",
  component: Button,
  parameters: {
    layout: "fullscreen",
    componentSubtitle: "'Conponent Footer",
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
} as Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterOnly: Story = {
  args: {
    card: false
  },
};

export const FooterCard: Story = {
  args: {
    card: true
  },
};




