import {
  Label,
} from '../';
import {
  Input,
} from '../../Input';

export default {
  title: 'UI/Label',
  component: Label,
  argTypes: {
    children: {
      control: 'text',
    },
    htmlFor: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Labelコンポーネントは、フォーム要素にラベルを付けるために使用されます。Radix UI Labelプリミティブをベースに作成されています。',
      },
    },
  },
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'ラベル',
};

export const WithInput = () => (
  <div className="space-y-2">
    <Label htmlFor="email">メールアドレス</Label>
    <Input id="email" type="email" placeholder="example@domain.com" />
  </div>
);

export const WithRequiredField = () => (
  <div className="space-y-2">
    <Label htmlFor="name">
      お名前 <span className="text-red-500">*</span>
    </Label>
    <Input id="name" type="text" placeholder="田中太郎" required />
  </div>
);

export const WithDisabledInput = () => (
  <div className="space-y-2" data-disabled="true">
    <Label htmlFor="disabled-input">無効化されたフィールド</Label>
    <Input id="disabled-input" type="text" placeholder="入力できません" disabled />
  </div>
);

export const WithCheckbox = () => (
  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      id="terms"
      className="h-4 w-4 rounded border border-gray-300"
    />
    <Label htmlFor="terms">利用規約に同意する</Label>
  </div>
);

export const WithRadioGroup = () => (
  <div className="space-y-3">
    <Label>性別を選択してください</Label>
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          className="h-4 w-4"
        />
        <Label htmlFor="male">男性</Label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          className="h-4 w-4"
        />
        <Label htmlFor="female">女性</Label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="other"
          name="gender"
          value="other"
          className="h-4 w-4"
        />
        <Label htmlFor="other">その他</Label>
      </div>
    </div>
  </div>
);

export const LongText = Template.bind({});
LongText.args = {
  children: 'これは非常に長いラベルテキストの例で、レイアウトがどのように動作するかを確認するために使用されます。',
};

export const CustomStyling = () => (
  <Label className="text-lg font-bold text-blue-600">
    カスタムスタイリング
  </Label>
);
