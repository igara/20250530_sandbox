import {
  ImageFile,
} from '../index';

export default {
  title: 'UI/File/ImageFile',
  component: ImageFile,
  parameters: {
    layout: 'centered',
  },
  tags: [
    'autodocs',
  ],
  argTypes: {
    onImageSelect: {
      action: 'imageSelected',
    },
    onImagePreviewLoad: {
      action: 'previewLoaded',
    },
    onChange: {
      action: 'inputChanged',
    },
    maxFileSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
    acceptedTypes: {
      control: 'object',
      description: 'Array of accepted MIME types',
    },
    showPreview: {
      control: 'boolean',
      description: 'Whether to show image preview',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    showPreview: true,
  },
};

export const WithoutPreview = {
  args: {
    showPreview: false,
  },
};

export const CustomFileSize = {
  args: {
    maxFileSize: 1024 * 1024, // 1MB
    showPreview: true,
  },
};

export const LimitedTypes = {
  args: {
    acceptedTypes: [
      'image/jpeg',
      'image/png',
    ],
    showPreview: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
    showPreview: true,
  },
};

export const WithError = {
  args: {
    errorMessage: 'ファイルのアップロードに失敗しました',
    showPreview: true,
  },
};

export const CustomStyling = {
  args: {
    showPreview: true,
    previewClassName: 'border-2 border-primary',
    dragDropClassName: 'bg-accent/10',
  },
};
