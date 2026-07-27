# CLARTE BRASS ホームページ

ブランドバイブル Part1 をもとにした一次ドラフトです。画像なし・文字と余白のみで世界観を表現しています。

## ファイル構成

- `index.html` — ページ本体
- `style.css` — デザイン(配色・タイポグラフィ・余白)
- `script.js` — スクロール時のフェードイン演出
- `assets/images/` — 今後、ロゴや商品写真を入れる場所

## 残タスク

- [ ] お問い合わせフォームの送信先を設定する
  1. https://formspree.io で無料アカウントを作成
  2. フォームを新規作成し、発行されたURL(`https://formspree.io/f/xxxxxxx`)をコピー
  3. `index.html` 内の `action="https://formspree.io/f/YOUR_FORM_ID"` を書き換える
- [ ] ロゴ・商品写真を `assets/images/` に追加し、`index.html` の該当箇所に反映
- [ ] Part2〜7(ビジュアルアイデンティティ・商品情報など)が揃い次第、配色やコンテンツを調整

## 無料で公開する方法(GitHub Pages)

1. GitHubでこのフォルダのリポジトリを作成する(例: `clarte-brass-site`)
2. このフォルダの中身をリポジトリにpushする
3. GitHubのリポジトリ画面で `Settings` → `Pages` を開く
4. `Branch` を `main` / `/(root)` に設定して `Save`
5. 数分後、`https://ユーザー名.github.io/リポジトリ名/` で公開される
6. 独自ドメインを使いたい場合は同じ `Pages` 設定画面から追加可能

具体的な手順は、リポジトリを用意する段階でサポートします。
