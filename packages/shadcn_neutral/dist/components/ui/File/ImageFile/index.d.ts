import * as React from 'react';
interface ImageFileProps extends Omit<React.ComponentProps<'input'>, 'type' | 'onChange'> {
    onImageSelect?: (file: File | null) => void;
    onImagePreviewLoad?: (imageUrl: string | null) => void;
    maxFileSize?: number;
    acceptedTypes?: string[];
    showPreview?: boolean;
    previewClassName?: string;
    dragDropClassName?: string;
    errorMessage?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare function ImageFile({ onImageSelect, onImagePreviewLoad, maxFileSize, // デフォルト5MB
acceptedTypes, showPreview, previewClassName, dragDropClassName, errorMessage, disabled, onChange, // onChangeを明示的に取り出す
...props }: ImageFileProps): import("react/jsx-runtime").JSX.Element;
export { ImageFile, type ImageFileProps, };
//# sourceMappingURL=index.d.ts.map