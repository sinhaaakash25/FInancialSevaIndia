import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getPlansByCategory } from '../data/plans';

export default function CategoryTile({ category }) {
  const { t } = useTranslation();
  const count = getPlansByCategory(category.id).length;

  return (
    <Link
      to={`/plans?category=${category.id}`}
      className="ledger-rules flex flex-col justify-between rounded-2xl border border-navy/10 bg-white/60 p-5 transition-transform hover:-translate-y-0.5"
    >
      <div>
        <h3 className="font-display text-base font-semibold text-navy">{t(category.labelKey)}</h3>
        <p className="mt-1 text-sm text-ink/60">{t(`${category.labelKey}.desc`)}</p>
      </div>
      <div className="mt-4 font-mono-tag text-xs text-ink/40">{count} {count === 1 ? 'plan' : 'plans'}</div>
    </Link>
  );
}
