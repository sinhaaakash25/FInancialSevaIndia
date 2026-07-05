import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import { CATEGORIES, PLANS, RIDERS } from '../data/plans';
import PlanCard from '../components/PlanCard';

export default function Plans() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'hi' ? 'hi' : 'en';
  const [params, setParams] = useSearchParams();
  const activeCategory = params.get('category') || 'all';
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return PLANS.filter((p) => {
      const inCategory = activeCategory === 'all' || p.category === activeCategory;
      const q = query.trim().toLowerCase();
      const inQuery =
        !q ||
        p.name.en.toLowerCase().includes(q) ||
        p.name.hi.includes(q) ||
        p.tagline[lang].toLowerCase().includes(q) ||
        p.idealFor.some((n) => n.toLowerCase().includes(q));
      return inCategory && inQuery;
    });
  }, [activeCategory, query, lang]);

  function setCategory(id) {
    if (id === 'all') {
      params.delete('category');
    } else {
      params.set('category', id);
    }
    setParams(params, { replace: true });
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-navy">{t('plans.title')}</h1>
      <p className="mt-2 max-w-xl text-ink/65">{t('plans.subtitle')}</p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('plans.search.placeholder')}
            className="w-full rounded-full border border-navy/15 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-marigold-dark"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <FilterChip active={activeCategory === 'all'} onClick={() => setCategory('all')}>
            {t('plans.filter.all')}
          </FilterChip>
          {CATEGORIES.filter((c) => c.id !== 'rider').map((c) => (
            <FilterChip key={c.id} active={activeCategory === c.id} onClick={() => setCategory(c.id)}>
              {t(c.labelKey)}
            </FilterChip>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-ink/50">{t('plans.empty')}</p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      )}

      {activeCategory === 'all' && !query && (
        <div className="mt-16 rounded-2xl border border-navy/10 bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-navy">{t('riders.title')}</h2>
          <p className="mt-1 text-sm text-ink/60">{t('riders.subtitle')}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {RIDERS.map((r) => (
              <div key={r.id} className="rounded-xl border border-navy/10 p-3.5">
                <div className="font-mono-tag text-[0.65rem] text-ink/40">UIN {r.uin}</div>
                <div className="mt-1 font-display text-sm font-semibold text-navy">{r.name[lang]}</div>
                <p className="mt-1 text-xs text-ink/60">{r.note[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FilterChip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
        active ? 'border-navy bg-navy text-paper' : 'border-navy/20 bg-white text-navy/70 hover:border-navy/40'
      }`}
    >
      {children}
    </button>
  );
}
