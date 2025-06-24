import {
  DatePicker,
} from '../indes';

const meta = {
  title: 'UI/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: 'A date picker component with calendar popup and text input for date selection.',
      },
    },
  },
  tags: [
    'autodocs',
  ],
};

export default meta;

export const Default = {
  render: () => <DatePicker />,
};

export const WithCustomLabel = {
  render: () => (
    <div className="w-80">
      <DatePicker />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default DatePicker with subscription date label and preset date.',
      },
    },
  },
};

export const InContainer = {
  render: () => (
    <div className="max-w-sm rounded-lg border p-6">
      <h3 className="mb-4 text-lg font-semibold">Select Date</h3>
      <DatePicker />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'DatePicker component within a styled container.',
      },
    },
  },
};

export const Multiple = {
  render: () => (
    <div className="max-w-sm space-y-6">
      <div>
        <h4 className="mb-2 text-sm font-medium">Start Date</h4>
        <DatePicker />
      </div>
      <div>
        <h4 className="mb-2 text-sm font-medium">End Date</h4>
        <DatePicker />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple DatePicker components for date range selection.',
      },
    },
  },
};

export const Playground = {
  render: () => (
    <div className="space-y-4">
      <DatePicker />
      <p className="text-sm text-muted-foreground">
        Click the calendar icon or press the down arrow key in the input to open the calendar.
        You can also type a date directly into the input field.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test DatePicker functionality.',
      },
    },
  },
};
