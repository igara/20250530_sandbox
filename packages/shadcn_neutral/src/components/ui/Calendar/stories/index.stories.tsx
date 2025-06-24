import * as React from 'react';
import {
  Calendar,
} from '../';

const meta = {
  title: 'UI/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    captionLayout: {
      control: {
        type: 'select',
        options: [
          'label',
          'dropdown',
          'dropdown-months',
          'dropdown-years',
        ],
      },
    },
    buttonVariant: {
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
    showOutsideDays: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

export const Default = {
  args: {
    captionLayout: 'label',
    showOutsideDays: true,
    buttonVariant: 'ghost',
  },
};

export const WithDropdownCaption = {
  args: {
    captionLayout: 'dropdown',
    showOutsideDays: true,
    buttonVariant: 'ghost',
  },
};

export const WithoutOutsideDays = {
  args: {
    captionLayout: 'label',
    showOutsideDays: false,
    buttonVariant: 'ghost',
  },
};

export const WithSelectedDate = {
  args: {
    captionLayout: 'label',
    showOutsideDays: true,
    buttonVariant: 'ghost',
    selected: new Date(),
  },
};

export const WithDateRange = {
  render: (args) => {
    const [
      selectedRange,
      setSelectedRange,
    ] = React.useState({
      from: new Date(),
      to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    });

    return (
      <Calendar
        {...args}
        mode="range"
        selected={selectedRange}
        onSelect={setSelectedRange}
      />
    );
  },
  args: {
    captionLayout: 'label',
    showOutsideDays: true,
    buttonVariant: 'ghost',
  },
};

export const WithMultipleSelection = {
  render: (args) => {
    const [
      selectedDates,
      setSelectedDates,
    ] = React.useState([
      new Date(),
      new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    ]);

    return (
      <Calendar
        {...args}
        mode="multiple"
        selected={selectedDates}
        onSelect={setSelectedDates}
      />
    );
  },
  args: {
    captionLayout: 'label',
    showOutsideDays: true,
    buttonVariant: 'ghost',
  },
};

export const WithDisabledDates = {
  args: {
    captionLayout: 'label',
    showOutsideDays: true,
    buttonVariant: 'ghost',
    disabled: [
      // Disable weekends
      {
        dayOfWeek: [
          0,
          6,
        ],
      },
      // Disable past dates
      {
        before: new Date(),
      },
    ],
  },
};

export const WithMinMaxDates = {
  args: {
    captionLayout: 'label',
    showOutsideDays: true,
    buttonVariant: 'ghost',
    fromDate: new Date(),
    toDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
  },
};

export const MultipleMonths = {
  args: {
    captionLayout: 'label',
    showOutsideDays: true,
    buttonVariant: 'ghost',
    numberOfMonths: 2,
  },
};

export const WithWeekNumbers = {
  args: {
    captionLayout: 'label',
    showOutsideDays: true,
    buttonVariant: 'ghost',
    showWeekNumber: true,
  },
};

export const WithCustomClassNames = {
  args: {
    captionLayout: 'label',
    showOutsideDays: true,
    buttonVariant: 'ghost',
    className: 'border rounded-lg shadow-lg',
  },
};

export const Controlled = {
  render: (args) => {
    const [
      selectedDate,
      setSelectedDate,
    ] = React.useState<Date | undefined>(undefined);

    return (
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground">
          Selected date: {selectedDate?.toLocaleDateString?.() || 'None'}
        </div>
        <Calendar
          {...args}
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
        />
      </div>
    );
  },
  args: {
    captionLayout: 'label',
    showOutsideDays: true,
    buttonVariant: 'ghost',
  },
};
