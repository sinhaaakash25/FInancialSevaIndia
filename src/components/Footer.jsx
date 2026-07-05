import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-navy/10 bg-navy text-paper/80">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="font-display text-xl italic font-bold text-paper">{t('brand')}</div>
            <p className="mt-2 text-sm text-paper/60">{t('brand.tag')}</p>
          </div>
          <div>
            <div className="font-mono-tag text-xs uppercase text-marigold">{t('footer.quickLinks')}</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/plans" className="hover:text-paper">{t('nav.plans')}</Link></li>
              <li><Link to="/about" className="hover:text-paper">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-paper">{t('footer.contactUs')}</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-mono-tag text-xs uppercase text-marigold">Ref.</div>
            <p className="mt-3 text-sm text-paper/60">licindia.in</p>
          </div>
        </div>
        <div className="mt-8 border-t border-paper/10 pt-6 text-xs leading-relaxed text-paper/50">
          <p>{t('footer.disclaimer')}</p>
          <p className="mt-1">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
