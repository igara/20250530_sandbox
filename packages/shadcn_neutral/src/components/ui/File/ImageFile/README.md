# ImageFile コンポーネント

画像ファイルのアップロードとプレビュー機能を提供するコンポーネントです。

## 特徴

- 🖼️ **画像プレビュー**: アップロードした画像をすぐに確認
- 🎯 **ドラッグ&ドロップ**: ファイルをドラッグして直感的にアップロード
- 📏 **ファイルサイズ制限**: 設定可能な最大ファイルサイズ
- 🎨 **ファイル形式制限**: サポートする画像形式を指定可能
- ✅ **バリデーション**: ファイル形式とサイズの自動検証
- 🚫 **エラーハンドリング**: わかりやすいエラーメッセージ

## 使用方法

### 基本的な使用

```tsx
import { ImageFile } from '@/components/ui/Input/File/ImageFile';

function App() {
  const handleImageSelect = (file: File | null) => {
    console.log('選択されたファイル:', file);
  };

  const handlePreviewLoad = (imageUrl: string | null) => {
    console.log('プレビューURL:', imageUrl);
  };

  return (
    <ImageFile
      onImageSelect={handleImageSelect}
      onImagePreviewLoad={handlePreviewLoad}
    />
  );
}
```

### カスタマイズ例

```tsx
// ファイルサイズとタイプを制限
<ImageFile
  maxFileSize={2 * 1024 * 1024} // 2MB
  acceptedTypes={['image/jpeg', 'image/png']}
  onImageSelect={handleImageSelect}
/>

// プレビューを無効化
<ImageFile
  showPreview={false}
  onImageSelect={handleImageSelect}
/>

// カスタムスタイル
<ImageFile
  previewClassName="border-4 border-blue-500"
  dragDropClassName="bg-blue-50"
  onImageSelect={handleImageSelect}
/>
```

## Props

| プロパティ | 型 | デフォルト | 説明 |
|-----------|-----|-----------|------|
| `onImageSelect` | `(file: File \| null) => void` | - | ファイル選択時のコールバック |
| `onImagePreviewLoad` | `(imageUrl: string \| null) => void` | - | プレビュー画像読み込み時のコールバック |
| `maxFileSize` | `number` | `5242880` (5MB) | 最大ファイルサイズ（バイト） |
| `acceptedTypes` | `string[]` | `['image/jpeg', 'image/png', 'image/gif', 'image/webp']` | 許可する画像形式 |
| `showPreview` | `boolean` | `true` | プレビュー表示の有無 |
| `previewClassName` | `string` | - | プレビュー画像のカスタムクラス |
| `dragDropClassName` | `string` | - | ドロップエリアのカスタムクラス |
| `errorMessage` | `string` | - | 外部から設定するエラーメッセージ |
| `disabled` | `boolean` | `false` | 無効状態 |

その他、HTML input要素の属性も継承します（`type`と`onChange`を除く）。

## 使用例

### フォームでの使用

```tsx
import { useState } from 'react';
import { ImageFile } from '@/components/ui/Input/File/ImageFile';

function ProfileForm() {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAvatarSelect = (file: File | null) => {
    setAvatar(file);
    setError(null);
  };

  const handleSubmit = async () => {
    if (!avatar) {
      setError('プロフィール画像を選択してください');
      return;
    }

    // ファイルをアップロード
    const formData = new FormData();
    formData.append('avatar', avatar);
    
    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
    } catch (err) {
      setError('アップロードに失敗しました');
    }
  };

  return (
    <form>
      <div>
        <label>プロフィール画像</label>
        <ImageFile
          onImageSelect={handleAvatarSelect}
          errorMessage={error}
          maxFileSize={1024 * 1024} // 1MB
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        保存
      </button>
    </form>
  );
}
```

### 複数画像の管理

```tsx
import { useState } from 'react';
import { ImageFile } from '@/components/ui/Input/File/ImageFile';

function GalleryUpload() {
  const [images, setImages] = useState<File[]>([]);

  const handleImageAdd = (file: File | null) => {
    if (file) {
      setImages(prev => [...prev, file]);
    }
  };

  return (
    <div>
      <ImageFile onImageSelect={handleImageAdd} />
      <div className="mt-4">
        <h3>選択された画像: {images.length}件</h3>
        {images.map((image, index) => (
          <div key={index}>
            {image.name} ({Math.round(image.size / 1024)}KB)
          </div>
        ))}
      </div>
    </div>
  );
}
```

## 技術仕様

- **依存関係**: `lucide-react`, 基底の`Input`コンポーネント
- **対応ブラウザ**: モダンブラウザ（File API, FileReader API対応）
- **アクセシビリティ**: キーボード操作、スクリーンリーダー対応
- **レスポンシブ**: モバイル・デスクトップ両対応
