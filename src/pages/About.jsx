import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-navy">{t('about.title')}</h1>
      <p className="mt-5 leading-relaxed text-ink/75">{t('about.body1')}</p>
      <p className="mt-4 leading-relaxed text-ink/75">{t('about.body2')}</p>
      <p className="mt-4 leading-relaxed text-ink/75">{t('about.body3')}</p>
    </div>
  );
}
