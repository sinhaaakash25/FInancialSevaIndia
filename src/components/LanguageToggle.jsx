import { useTranslation } from 'react-i18next';

export default function LanguageToggle({ className = '' }) {
  const { i18n } = useTranslation();

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  return (
    <div className={`inline-flex rounded-full border border-navy/15 bg-white p-0.5 font-mono-tag text-xs ${className}`}>
      {['en', 'hi'].map((lng) => (
        <button
          key={lng}
          onClick={() => setLang(lng)}
          aria-pressed={i18n.language === lng}
          className={`rounded-full px-3 py-1.5 transition-colors ${
            i18n.language === lng
              ? 'bg-navy text-paper'
              : 'text-navy/60 hover:text-navy'
          }`}
        >
          {lng === 'en' ? 'EN' : 'हि'}
        </button>
      ))}
    </div>
  );
}
