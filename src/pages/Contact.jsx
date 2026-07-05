import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PhoneCall, Send } from 'lucide-react';
import { sendLead } from '../utils/sendLead';

const CONTACT_PHONE = '+91-90000-00000'; // TODO: replace with your real number

export default function Contact() {
  const { t } = useTranslation();
  const location = useLocation();
  const prefillNeed = location.state?.planName || '';

  const [form, setForm] = useState({ name: '', phone: '', email: '', need: prefillNeed, message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const res = await sendLead({ ...form, source: 'Contact page' });
    setStatus(res.ok ? 'success' : 'error');
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-navy">{t('contact.title')}</h1>
      <p className="mt-2 text-ink/65">{t('contact.subtitle')}</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <Field label={t('contact.name')} required>
          <input required value={form.name} onChange={update('name')} className="input" />
        </Field>
        <Field label={t('contact.phone')} required>
          <input required inputMode="tel" value={form.phone} onChange={update('phone')} className="input" />
        </Field>
        <Field label={t('contact.email')}>
          <input type="email" value={form.email} onChange={update('email')} className="input" />
        </Field>
        <Field label={t('contact.need')}>
          <input value={form.need} onChange={update('need')} className="input" />
        </Field>
        <Field label={t('contact.message')}>
          <textarea value={form.message} onChange={update('message')} rows={3} className="input resize-none" />
        </Field>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-medium text-paper hover:opacity-90 disabled:opacity-60"
        >
          <Send size={15} /> {status === 'sending' ? t('contact.submitting') : t('contact.submit')}
        </button>

        {status === 'success' && <p className="text-sm text-green">{t('contact.success')}</p>}
        {status === 'error' && <p className="text-sm text-maroon">{t('contact.error')}</p>}
      </form>

      <div className="mt-8 flex items-center gap-2 border-t border-navy/10 pt-6 text-sm text-ink/60">
        <PhoneCall size={15} />
        {t('contact.or.call')} <a href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, '')}`} className="font-medium text-navy hover:underline">{CONTACT_PHONE}</a>
      </div>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy/80">
        {label} {required && <span className="text-maroon">*</span>}
      </span>
      {children}
    </label>
  );
}
