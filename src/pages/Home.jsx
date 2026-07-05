import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { CATEGORIES, PLANS } from '../data/plans';
import CategoryTile from '../components/CategoryTile';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero */}
      <section className="ledger-rules border-b border-navy/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <span className="font-mono-tag inline-block rounded-full border border-navy/20 bg-white px-3 py-1 text-[0.7rem] uppercase text-navy/60">
            {t('home.hero.eyebrow')}
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.1] text-navy sm:text-5xl">
            {t('home.hero.title')}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink/70">{t('home.hero.subtitle')}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/plans" className="flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-medium text-paper hover:opacity-90">
              {t('home.hero.cta.explore')} <ArrowRight size={16} />
            </Link>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-bindu-chat'))}
              className="flex items-center gap-2 rounded-full border border-navy/20 bg-white px-5 py-3 text-sm font-medium text-navy hover:bg-navy/5"
            >
              <MessageCircle size={16} /> {t('home.hero.cta.chat')}
            </button>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-navy/10 pt-6">
            <Stat value={PLANS.length} label={t('home.hero.stat.plans')} />
            <Stat value={CATEGORIES.length - 1} label={t('home.hero.stat.categories')} />
            <Stat value="2" label={t('home.hero.stat.lang')} />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold text-navy">{t('home.categories.title')}</h2>
          <Link to="/plans" className="text-sm font-medium text-marigold-dark hover:underline">
            {t('home.categories.viewAll')}
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.filter((c) => c.id !== 'rider').map((c) => (
            <CategoryTile key={c.id} category={c} />
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="border-y border-navy/10 bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-navy">{t('home.why.title')}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="font-mono-tag text-xs text-marigold-dark">0{i}</div>
                <h3 className="mt-2 font-display text-base font-semibold text-navy">{t(`home.why.${i}.title`)}</h3>
                <p className="mt-1.5 text-sm text-ink/65">{t(`home.why.${i}.body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat CTA */}
      <section id="chat-hint" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-navy px-6 py-10 text-center text-paper sm:px-14">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">{t('home.cta.title')}</h2>
          <p className="mx-auto mt-3 max-w-lg text-paper/70">{t('home.cta.body')}</p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-bindu-chat'))}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-marigold px-5 py-3 text-sm font-medium text-navy transition-transform hover:scale-105"
          >
            <MessageCircle size={16} /> {t('home.cta.button')}
          </button>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-navy">{value}+</div>
      <div className="text-xs text-ink/55">{label}</div>
    </div>
  );
}
