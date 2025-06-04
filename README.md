# 20250530_sandbox

## git-hooksの有効化

コミットの前にlint実行を行うようになります

1. `npm i`
  npm run prepare経由にhuskyが有効化になると思います
2. `echo "export PATH=\"$(dirname $(which node)):\$PATH\"" > ~/.huskyrc`
  https://qiita.com/mog_03/items/c46d1976e2c2d43f44bc
  GUIを使用している場合はこちらも必要かもです

