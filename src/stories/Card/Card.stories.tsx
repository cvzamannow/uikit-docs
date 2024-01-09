import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"

import Card from "./Card";
import Button from "../Button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Card",
  component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CardGeneral: Story = {
  args: {
    background: "https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80",
    linearGradient: 'general',
    padding: "30px 20px 20px 20px",
    children:
    <>
      <p style={{ color: "white" }}>
        Earum rerum vero, nostrum, cupiditate repellat quod distinctio facilis repellendus iste ratione reprehenderit architecto est itaque, sequi molestias.
      </p>
      <Button
        content="Button"
        type="secondary"
        onClick={function noRefCheck(){}}
      />
      </>
      ,
    style: { 
      height: "378px", 
      width: "558px",
    },
  }
};

export const CardBlog: Story = {
  args: {
    background: "https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80",
    linearGradient: 'blog',
    padding: "30px 20px 20px 20px",
    children:
      <>
        <p style={{ color: "white" }}>
          Earum rerum vero, nostrum, cupiditate repellat quod distinctio facilis repellendus iste ratione reprehenderit architecto est itaque, sequi molestias.
        </p>
        <Button
          content="Button"
          type="secondary"
          onClick={function noRefCheck(){}}
        />
      </>
      ,
      style: {
        maxWidth: "366px",
        height: "529px"
       }
  }
};