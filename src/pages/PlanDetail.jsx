import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ExternalLink, PhoneCall } from 'lucide-react';
import { getPlanById } from '../data/plans';

export default function PlanDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'hi' ? 'hi' : 'en';
  const plan = getPlanById(id);

  if (!plan) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <p className="text-ink/60">{t('plan.notFound')}</p>
        <Link to="/plans" className="mt-4 inline-block text-marigold-dark hover:underline">
          {t('plan.backToPlans')}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link to="/plans" className="flex items-center gap-1.5 text-sm font-medium text-navy/60 hover:text-navy">
        <ArrowLeft size={15} /> {t('plan.backToPlans')}
      </Link>

      <div className="ledger-rules mt-6 rounded-2xl border border-navy/10 bg-white p-6 sm:p-8">
        <span className="font-mono-tag inline-block rounded-full bg-navy/8 px-2.5 py-1 text-[0.65rem] uppercase text-navy">
          {t(`cat.${plan.category}`)}
        </span>
        <h1 className="mt-4 font-display text-2xl font-bold leading-snug text-navy sm:text-3xl">
          {plan.name[lang]}
        </h1>
        <p className="mt-2 text-lg text-ink/70">{plan.tagline[lang]}</p>

        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-navy/10 pt-6 sm:grid-cols-4">
          <Field label={t('plan.planNo')} value={plan.planNo} />
          <Field label={t('plan.uin')} value={plan.uin} mono />
          <Field label={t('plan.minSumAssured')} value={plan.minSumAssured} />
          <Field label={t('plan.category')} value={t(`cat.${plan.category}`)} />
        </div>

        <p className="mt-6 leading-relaxed text-ink/80">{plan.description[lang]}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {plan.idealFor.map((need) => (
            <span key={need} className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-navy/70">
              {t(`need.${need}`)}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-navy/10 pt-6 sm:flex-row">
          <Link
            to="/contact"
            state={{ planName: plan.name.en }}
            className="flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-medium text-paper hover:opacity-90"
          >
            <PhoneCall size={15} /> {t('plan.talkToUs')}
          </Link>
          <a
            href={plan.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-navy/20 px-5 py-3 text-sm font-medium text-navy hover:bg-navy/5"
          >
            {t('plan.officialLink')} <ExternalLink size={14} />
          </a>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-ink/45">{t('plan.disclaimer')}</p>
      </div>
    </div>
  );
}

function Field({ label, value, mono }) {
  return (
    <div>
      <div className="text-[0.65rem] uppercase text-ink/40">{label}</div>
      <div className={`mt-0.5 text-sm font-semibold text-navy ${mono ? 'font-mono-tag' : ''}`}>{value}</div>
    </div>
  );
}
