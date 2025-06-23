import {
  Input,
} from '../';

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'text',
          'email',
          'password',
          'number',
          'tel',
          'url',
          'search',
          'date',
          'time',
          'file',
        ],
      },
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A flexible input component with support for various input types and states.',
      },
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  placeholder: 'Enter your email...',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Enter your password...',
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  placeholder: 'Enter a number...',
};

export const Search = Template.bind({});
Search.args = {
  type: 'search',
  placeholder: 'Search...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled input',
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  value: 'Read only value',
  readOnly: true,
};

export const Required = Template.bind({});
Required.args = {
  placeholder: 'Required field',
  required: true,
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'Sample input value',
  placeholder: 'This has a value',
};

export const File = Template.bind({});
File.args = {
  type: 'file',
};

export const Date = Template.bind({});
Date.args = {
  type: 'date',
};

export const Time = Template.bind({});
Time.args = {
  type: 'time',
};

// Error state example
export const ErrorState = Template.bind({});
ErrorState.args = {
  placeholder: 'Input with error',
  'aria-invalid': true,
};

// Different sizes with custom className
export const CustomStyling = Template.bind({});
CustomStyling.args = {
  placeholder: 'Custom styled input',
  className: 'border-blue-500 focus:ring-blue-500',
};
