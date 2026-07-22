// Guide U 共通スクリプト（i18n + フォームリンク配線）
// 各ページで window.I18N_EN を定義した後に読み込むこと

// 日本語原文を保持
document.querySelectorAll('[data-i18n]').forEach(el => { el.dataset.ja = el.innerHTML; });
document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.dataset.jaPh = el.placeholder; });

let lang = localStorage.getItem('gu_lang') || 'ja';

function applyLang() {
  document.documentElement.lang = lang;
  const t = document.getElementById('langToggle');
  if (t) t.textContent = lang === 'ja' ? 'EN' : '日本語';
  const EN = window.I18N_EN || {};
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    el.innerHTML = lang === 'ja' ? el.dataset.ja : (EN[k] ?? el.dataset.ja);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.dataset.i18nPh;
    el.placeholder = lang === 'ja' ? el.dataset.jaPh : (EN[k] ?? el.dataset.jaPh);
  });
}
function toggleLang() {
  lang = lang === 'ja' ? 'en' : 'ja';
  localStorage.setItem('gu_lang', lang);
  applyLang();
}

// data-form="student|parent|mentor|qa|ios|android" の要素に CONFIG のURLを配線
const FORM_MAP = {
  student: () => CONFIG.FORM_PREREG_STUDENT,
  parent:  () => CONFIG.FORM_PREREG_PARENT,
  mentor:  () => CONFIG.FORM_PREREG_MENTOR,
  qa:      () => CONFIG.FORM_QA,
  ios:     () => CONFIG.STORE_IOS,
  android: () => CONFIG.STORE_ANDROID,
  terms:   () => CONFIG.LEGAL.terms,
  privacy: () => CONFIG.LEGAL.privacy,
  tokusho: () => CONFIG.LEGAL.tokusho,
  booking: () => CONFIG.LEGAL.booking,
  instagram: () => CONFIG.INSTAGRAM,
};
document.querySelectorAll('[data-form]').forEach(el => {
  const url = (FORM_MAP[el.dataset.form] || (() => ''))();
  if (url) {
    el.href = url;
    el.target = '_blank';
    el.rel = 'noopener';
  } else {
    el.addEventListener('click', e => {
      e.preventDefault();
      alert(lang === 'ja'
        ? 'フォームは準備中です。もうしばらくお待ちください。'
        : 'The form is being prepared. Please check back soon.');
    });
  }
});

applyLang();
