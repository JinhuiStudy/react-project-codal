import { TodoInput } from "./input";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "ATOMS/TodoInput",
  component: TodoInput,

  argTypes: {
    primary: { control: "boolean" },
  },
} as ComponentMeta<typeof TodoInput>;

const Template: ComponentStory<typeof TodoInput> = (args) => (
  <TodoInput {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  placeholder: "Have To Do",
  size: undefined,
};

export const Small = Template.bind({});

Small.args = {
  placeholder: "Have To Do",
  size: "small",
};
