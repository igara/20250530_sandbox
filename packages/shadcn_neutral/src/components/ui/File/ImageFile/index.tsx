import * as React from 'react';
import {
  X,
  Upload,
  Image as ImageIcon,
} from 'lucide-react';

import {
  cn,
} from '@/lib/utils/index';
import {
  Input,
} from '../../index';

interface ImageFileProps extends Omit<React.ComponentProps<'input'>, 'type' | 'onChange'> {
  onImageSelect?: (file: File | null) => void;
  onImagePreviewLoad?: (imageUrl: string | null) => void;
  maxFileSize?: number; // バイト単位
  acceptedTypes?: string[];
  showPreview?: boolean;
  previewClassName?: string;
  dragDropClassName?: string;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // 標準のonChangeハンドラー
}

function ImageFile({
  onImageSelect,
  onImagePreviewLoad,
  maxFileSize = 5 * 1024 * 1024, // デフォルト5MB
  acceptedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
  ],
  showPreview = true,
  previewClassName,
  dragDropClassName,
  errorMessage,
  disabled,
  onChange, // onChangeを明示的に取り出す
  ...props
}: ImageFileProps) {
  const [
    previewUrl,
    setPreviewUrl,
  ] = React.useState<string | null>(null);
  const [
    isDragOver,
    setIsDragOver,
  ] = React.useState(false);
  const [
    error,
    setError,
  ] = React.useState<string | null>(null);
  const [
    selectedFile,
    setSelectedFile,
  ] = React.useState<File | null>(null);
  const [
    isProcessing,
    setIsProcessing,
  ] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    if (!acceptedTypes.includes(file.type)) {
      return `サポートされていないファイル形式です。対応形式: ${acceptedTypes.join(', ')}`;
    }

    if (file.size > maxFileSize) {
      const maxSizeMB = Math.round(maxFileSize / (1024 * 1024) * 100) / 100;
      return `ファイルサイズが大きすぎます。最大サイズ: ${maxSizeMB}MB`;
    }

    return null;
  };

  const handleFileSelect = (file: File | null) => {
    // 既に処理中の場合は無視
    if (isProcessing) {
      return;
    }

    setIsProcessing(true);
    setError(null);

    if (!file) {
      setSelectedFile(null);
      setPreviewUrl(null);
      onImageSelect?.(null);
      onImagePreviewLoad?.(null);
      setIsProcessing(false);
      return;
    }

    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      setIsProcessing(false);
      return;
    }

    setSelectedFile(file);
    onImageSelect?.(file);

    // プレビュー画像を生成
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      setPreviewUrl(imageUrl);
      onImagePreviewLoad?.(imageUrl);
      setIsProcessing(false);
    };
    reader.onerror = () => {
      setError('画像の読み込みに失敗しました');
      setIsProcessing(false);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileSelect(file);

    // 外部のonChangeハンドラーも呼び出す
    onChange?.(e);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    if (disabled) return;

    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));

    if (imageFile) {
      handleFileSelect(imageFile);
    }
  };

  const handleRemoveImage = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setIsProcessing(false); // 処理フラグもリセット
    handleFileSelect(null);
  };

  const handleClickToUpload = (e: React.MouseEvent) => {
    // Input要素からのクリックイベントの場合は何もしない
    if (e.target === inputRef.current) {
      return;
    }

    if (!disabled && inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="w-full space-y-2">
      {/* ドラッグ&ドロップエリア */}
      <div
        className={cn(
          `
            relative flex min-h-[120px] cursor-pointer flex-col items-center
            justify-center rounded-lg border-2 border-dashed p-6
            transition-colors duration-200
          `,
          isDragOver && !disabled
            ? 'border-primary bg-primary/5'
            : `
              border-muted-foreground/25
              hover:border-muted-foreground/50
            `,
          disabled && 'cursor-not-allowed opacity-50',
          error && 'border-destructive bg-destructive/5',
          dragDropClassName,
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClickToUpload}
      >
        {/* 隠れたファイル入力 */}
        <Input
          ref={inputRef}
          type="file"
          accept={acceptedTypes.join(',')}
          onChange={handleInputChange}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          disabled={disabled}
          {...props}
        />

        {/* プレビュー表示 */}
        {showPreview && previewUrl ? (
          <div className="relative">
            <img
              src={previewUrl}
              alt="プレビュー"
              className={cn(
                'max-h-32 max-w-full rounded-md object-contain',
                previewClassName,
              )}
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveImage();
              }}
              className={cn(
                `
                  absolute -top-2 -right-2 flex h-6 w-6 items-center
                  justify-center rounded-full bg-destructive transition-colors
                  hover:bg-destructive/90
                `,
                disabled && 'pointer-events-none opacity-50',
              )}
              disabled={disabled}
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ) : (
          /* アップロードプレースホルダー */
          <div className="space-y-2 text-center">
            <div className="mx-auto h-12 w-12 text-muted-foreground">
              {selectedFile ? (
                <ImageIcon className="h-full w-full" />
              ) : (
                <Upload className="h-full w-full" />
              )}
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">
                {selectedFile ? selectedFile.name : 'クリックして画像を選択'}
              </p>
              <p className="text-xs text-muted-foreground">
                またはファイルをドラッグ&ドロップ
              </p>
              <p className="text-xs text-muted-foreground">
                最大 {Math.round(maxFileSize / (1024 * 1024) * 100) / 100}MB
              </p>
            </div>
          </div>
        )}
      </div>

      {/* エラーメッセージ */}
      {(error || errorMessage) && (
        <p className="text-sm text-destructive">
          {error || errorMessage}
        </p>
      )}

      {/* ファイル情報 */}
      {selectedFile && !error && (
        <div className="space-y-1 text-xs text-muted-foreground">
          <p>ファイル名: {selectedFile.name}</p>
          <p>サイズ: {Math.round(selectedFile.size / 1024 * 100) / 100} KB</p>
          <p>形式: {selectedFile.type}</p>
        </div>
      )}
    </div>
  );
}

export {
  ImageFile,
  type ImageFileProps,
};
