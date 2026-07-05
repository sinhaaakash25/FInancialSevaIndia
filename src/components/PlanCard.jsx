import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

const CATEGORY_ACCENT = {
  term: 'text-maroon bg-maroon/10',
  endowment: 'text-navy bg-navy/8',
  wholeLife: 'text-navy bg-navy/8',
  moneyBack: 'text-marigold-dark bg-marigold/15',
  pension: 'text-green bg-green/10',
  ulip: 'text-green bg-green/10',
  rider: 'text-maroon bg-maroon/10',
};

export default function PlanCard({ plan, stamped = false }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'hi' ? 'hi' : 'en';
  const accent = CATEGORY_ACCENT[plan.category] || 'text-navy border-navy/25';

  return (
    <Link
      to={`/plans/${plan.id}`}
      className="group flex flex-col justify-between rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className={`rounded-full px-2.5 py-1 font-mono-tag text-[0.65rem] uppercase ${accent}`}>
            {t(`cat.${plan.category}`)}
          </span>
          {stamped && (
            <span className="stamp">{lang === 'hi' ? 'सुझाया' : 'matched'}</span>
          )}
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-navy">
          {plan.name[lang]}
        </h3>
        <p className="mt-1.5 text-sm text-ink/70">{plan.tagline[lang]}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-mono-tag text-[0.65rem] text-ink/40">
          {t('plan.planNo')} {plan.planNo}
        </span>
        <span className="flex items-center gap-1 text-sm font-medium text-marigold-dark opacity-0 transition-opacity group-hover:opacity-100">
          {t('plans.viewDetails')} <ArrowUpRight size={14} />
        </span>
      </div>
    </Link>
  );
}
