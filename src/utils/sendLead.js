// Sends a lead (name/phone/need) without needing your own backend.
// Uses Web3Forms (https://web3forms.com) — free, no signup cost, just an access key
// that emails submissions straight to your inbox. Set VITE_WEB3FORMS_KEY in .env
// (see .env.example). If it's not set, we fall back to opening a pre-filled email.

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export async function sendLead({ name, phone, email, need, message, source }) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
  const ownerEmail = import.meta.env.VITE_LEAD_EMAIL || '';

  const payload = {
    name: name || 'Not provided',
    phone: phone || 'Not provided',
    email: email || 'Not provided',
    need: need || 'Not specified',
    message: message || '',
    source: source || 'website',
    subject: `New lead from SurakshaPath: ${name || 'Visitor'}`,
  };

  if (!accessKey) {
    // No key configured — fall back to a mailto draft so nothing is silently lost.
    openMailtoFallback(payload, ownerEmail);
    return { ok: true, method: 'mailto' };
  }

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_key: accessKey, ...payload }),
    });
    const data = await res.json();
    if (data.success) return { ok: true, method: 'web3forms' };
    throw new Error(data.message || 'Web3Forms submission failed');
  } catch (err) {
    openMailtoFallback(payload, ownerEmail);
    return { ok: false, method: 'mailto-fallback', error: err.message };
  }
}

function openMailtoFallback(payload, ownerEmail) {
  const body = encodeURIComponent(
    `Name: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nNeed: ${payload.need}\nMessage: ${payload.message}\nSource: ${payload.source}`
  );
  const subject = encodeURIComponent(payload.subject);
  const to = ownerEmail || '';
  if (typeof window !== 'undefined') {
    window.open(`mailto:${to}?subject=${subject}&body=${body}`, '_blank');
  }
}
