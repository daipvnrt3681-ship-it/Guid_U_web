// ============================================================
// Guide U サイト設定（AppLegalConfig 準拠）
// URLはここを差し替えるだけで全ページに反映されます
// ============================================================
const CONFIG = {
  // アプリストアURL（未確定のため空。確定したら設定 → ボタンが有効化されます）
  STORE_IOS: "",
  STORE_ANDROID: "",

  // 事前登録 Google Form
  FORM_PREREG_STUDENT: "https://docs.google.com/forms/d/e/1FAIpQLSeads67l6vfPUW0x_S3dW7KANWx1_GZcyYcVoCRmiBkasCDUg/viewform?usp=header",   // 高校生用（保護者の方も共用）
  FORM_PREREG_PARENT:  "https://docs.google.com/forms/d/e/1FAIpQLSfKLoUmaCfFeBRaMi4L8E5T5prxBFVR3jcBiDtbHvZ8jX2msA/viewform?usp=dialog",   // 保護者用
  FORM_PREREG_MENTOR:  "https://docs.google.com/forms/d/e/1FAIpQLSfT7PpXWj5rlSPYjiHOVOiPrM5Z5QeFrRbe8isSlabqMg658A/viewform?usp=publish-editor", // 大学生用

  // 公式SNS
  INSTAGRAM: "https://www.instagram.com/guide.u__?igsh=MWZtZ2xuaTBnY3lhZw==",

  // お問い合わせ（運営への質問もこちら）
  FORM_QA: "https://docs.google.com/forms/d/e/1FAIpQLSfTI0HBKBGvKGxxr5atZcghKzHreEHdXWMryjY-VQ1YJQDzIQ/viewform?usp=header",

  // 法務リンク（正本はNotion。サイト側は要約＋全文リンクのみ）
  LEGAL: {
    terms:   "https://indecisive-ounce-cfd.notion.site/Study-PdcA-2d9e6b868ea6800b90c0ca256e4b8d75",       // 利用規約（改定 2026-07-21）
    privacy: "https://indecisive-ounce-cfd.notion.site/2d9e6b868ea680f09a05ebaa9bb2b70f",                   // プライバシーポリシー（改定 2026-07-21）
    tokusho: "https://indecisive-ounce-cfd.notion.site/368e6b868ea6807e80c5cc4934d2148c",                   // 特定商取引法に基づく表記
    booking: "https://indecisive-ounce-cfd.notion.site/368e6b868ea680ae9127e12f2bdfe415",                   // 予約・キャンセル・返金（改定 2026-07-21）
  },
};
