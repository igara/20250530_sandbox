import {
  Button,
} from '../';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'default',
          'destructive',
          'outline',
          'secondary',
          'ghost',
          'link',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: [
          'default',
          'sm',
          'lg',
          'icon',
        ],
      },
    },
    asChild: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'default',
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
  size: 'default',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  size: 'default',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'default',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'default',
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  size: 'default',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'default',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'default',
  size: 'lg',
};
