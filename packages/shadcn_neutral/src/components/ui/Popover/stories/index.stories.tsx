import * as React from 'react';
import {
  Button,
} from '../../Button';
import {
  Input,
} from '../../Input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from '../';

export default {
  title: 'UI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    modal: {
      control: 'boolean',
      description: 'Whether the popover should be modal',
    },
    open: {
      control: 'boolean',
      description: 'Whether the popover is open',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the popover is open by default',
    },
  },
};

const DefaultTemplate = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="leading-none font-medium">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="width">Width</label>
            <Input
              id="width"
              defaultValue="100%"
              className="col-span-2 h-8"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="maxWidth">Max. width</label>
            <Input
              id="maxWidth"
              defaultValue="300px"
              className="col-span-2 h-8"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="height">Height</label>
            <Input
              id="height"
              defaultValue="25px"
              className="col-span-2 h-8"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="maxHeight">Max. height</label>
            <Input
              id="maxHeight"
              defaultValue="none"
              className="col-span-2 h-8"
            />
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

export const Default = DefaultTemplate.bind({});

const SimpleContentTemplate = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button>Click me</Button>
    </PopoverTrigger>
    <PopoverContent>
      <p>This is a simple popover content.</p>
    </PopoverContent>
  </Popover>
);

export const SimpleContent = SimpleContentTemplate.bind({});

const AlignmentsTemplate = () => (
  <div className="flex gap-4">
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Align Start</Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <p>This popover is aligned to the start.</p>
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Align Center</Button>
      </PopoverTrigger>
      <PopoverContent align="center">
        <p>This popover is aligned to the center.</p>
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Align End</Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <p>This popover is aligned to the end.</p>
      </PopoverContent>
    </Popover>
  </div>
);

export const WithDifferentAlignments = AlignmentsTemplate.bind({});

const SideOffsetTemplate = () => (
  <div className="flex gap-4">
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Default Offset</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Default side offset (4px)</p>
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Large Offset</Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={20}>
        <p>Large side offset (20px)</p>
      </PopoverContent>
    </Popover>
  </div>
);

export const WithSideOffset = SideOffsetTemplate.bind({});

const CustomContentTemplate = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">User Profile</Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="flex gap-4">
        <div
          className={`
            flex h-12 w-12 items-center justify-center rounded-full border
          `}
        >
          <span className="text-sm font-semibold">JD</span>
        </div>
        <div className="flex-1 space-y-1">
          <h4 className="font-semibold">John Doe</h4>
          <p className="text-sm text-muted-foreground">john.doe@example.com</p>
          <div className="flex gap-2 pt-2">
            <Button size="sm" className="flex-1">Follow</Button>
            <Button size="sm" variant="outline" className="flex-1">Message</Button>
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

export const WithCustomContent = CustomContentTemplate.bind({});

const FormTemplate = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Settings</Button>
    </PopoverTrigger>
    <PopoverContent className="w-96">
      <div className="space-y-4">
        <div className="space-y-2">
          <h4 className="leading-none font-medium">Settings</h4>
          <p className="text-sm text-muted-foreground">
            Configure your preferences.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Display Name
            </label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button size="sm">Save</Button>
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

export const WithForm = FormTemplate.bind({});

const ControlledTemplate = () => {
  const [
    open,
    setOpen,
  ] = React.useState(false);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button onClick={() => setOpen(true)} disabled={open}>
          Open Popover
        </Button>
        <Button onClick={() => setOpen(false)} disabled={!open} variant="outline">
          Close Popover
        </Button>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost">Trigger (Controlled)</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-2">
            <h4 className="font-medium">Controlled Popover</h4>
            <p className="text-sm text-muted-foreground">
              This popover's open state is controlled externally.
            </p>
            <Button
              onClick={() => setOpen(false)}
              size="sm"
              className={
                'w-full'
              }
            >
              Close from inside
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export const Controlled = ControlledTemplate.bind({});

const AnchorTemplate = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground">
      The popover will be positioned relative to the anchor element below:
    </p>
    <Popover>
      <div className="flex items-center gap-4">
        <span>Click the button to open popover anchored to the text:</span>
        <PopoverAnchor>
          <span className="rounded bg-yellow-100 px-2 py-1">Anchor Point</span>
        </PopoverAnchor>
        <PopoverTrigger asChild>
          <Button size="sm">Open</Button>
        </PopoverTrigger>
      </div>
      <PopoverContent>
        <p>This popover is anchored to the highlighted text, not the button!</p>
      </PopoverContent>
    </Popover>
  </div>
);

export const WithAnchor = AnchorTemplate.bind({});
