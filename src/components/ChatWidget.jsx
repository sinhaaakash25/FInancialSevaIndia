import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send, RotateCcw } from 'lucide-react';
import ChatMessage from './ChatMessage';
import PlanCard from './PlanCard';
import {
  STEPS, NEED_OPTIONS, AGE_OPTIONS, BUDGET_OPTIONS,
  recommendPlans, isValidIndianPhone,
} from '../chatbot/engine';
import { sendLead } from '../utils/sendLead';

const initialState = {
  step: STEPS.GREET,
  name: '',
  need: '',
  age: '',
  budget: '',
  phone: '',
};

export default function ChatWidget() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [state, setState] = useState(initialState);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener('open-bindu-chat', openChat);
    return () => window.removeEventListener('open-bindu-chat', openChat);
  }, []);

  useEffect(() => {
    if (open && messages.length === 0) {
      pushBindu(t('chat.msg.greet'));
      setState((s) => ({ ...s, step: STEPS.ASK_NAME }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  function pushBindu(content, type = 'text') {
    setMessages((m) => [...m, { from: 'bindu', type, content }]);
  }
  function pushUser(content) {
    setMessages((m) => [...m, { from: 'user', type: 'text', content }]);
  }

  function restart() {
    setState(initialState);
    setMessages([]);
    setTimeout(() => {
      pushBindu(t('chat.msg.greet'));
      setState((s) => ({ ...s, step: STEPS.ASK_NAME }));
    }, 100);
  }

  function submitName(e) {
    e.preventDefault();
    const name = input.trim();
    if (!name) return;
    pushUser(name);
    setInput('');
    setState((s) => ({ ...s, name, step: STEPS.ASK_NEED }));
    setTimeout(() => pushBindu(t('chat.msg.askNeed', { name })), 250);
  }

  function chooseNeed(key, label) {
    pushUser(label);
    setState((s) => ({ ...s, need: key, step: STEPS.ASK_AGE }));
    setTimeout(() => pushBindu(t('chat.msg.askAge')), 250);
  }

  function chooseAge(key, label) {
    pushUser(label);
    setState((s) => ({ ...s, age: key, step: STEPS.ASK_BUDGET }));
    setTimeout(() => pushBindu(t('chat.msg.askBudget')), 250);
  }

  function chooseBudget(key, label) {
    pushUser(label);
    const nextState = { ...state, budget: key };
    setState((s) => ({ ...s, budget: key, step: STEPS.RESULTS }));
    setTimeout(() => pushBindu(t('chat.msg.thinking')), 200);
    setTimeout(() => {
      const results = recommendPlans(nextState);
      if (results.length) {
        pushBindu(t('chat.msg.results', { name: nextState.name || '' }));
        pushBindu(results, 'plans');
      } else {
        pushBindu(t('chat.msg.noResults', { name: nextState.name || '' }));
      }
      setState((s) => ({ ...s, step: STEPS.ASK_CONTACT }));
      setTimeout(() => pushBindu(t('chat.msg.askContact')), 400);
    }, 900);
  }

  function handleContactChoice(wantsContact) {
    pushUser(wantsContact ? t('chat.option.yes') : t('chat.option.no'));
    if (wantsContact) {
      setState((s) => ({ ...s, step: STEPS.ASK_PHONE }));
    } else {
      pushBindu(t('chat.msg.declineContact'));
      setState((s) => ({ ...s, step: STEPS.DONE }));
    }
  }

  async function submitPhone(e) {
    e.preventDefault();
    const phone = input.trim();
    if (!isValidIndianPhone(phone)) {
      pushUser(phone);
      setInput('');
      pushBindu(t('chat.msg.invalidPhone'));
      return;
    }
    pushUser(phone);
    setInput('');
    setSending(true);
    setState((s) => ({ ...s, phone, step: STEPS.DONE }));
    const res = await sendLead({
      name: state.name,
      phone,
      need: state.need,
      message: `Age: ${state.age}, Budget: ${state.budget}`,
      source: 'Bindu chatbot',
    });
    setSending(false);
    if (res.ok) {
      pushBindu(t('chat.msg.phoneThanks', { phone }));
    } else {
      pushBindu(t('chat.msg.error'));
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {open && (
        <div className="mb-3 flex h-[32rem] w-[22rem] max-w-[92vw] flex-col overflow-hidden rounded-2xl border border-navy/10 bg-paper shadow-2xl sm:w-96">
          {/* Header */}
          <div className="flex items-center justify-between bg-navy px-4 py-3 text-paper">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-marigold font-display text-base italic font-bold text-navy">
                B
              </div>
              <div>
                <div className="font-display text-sm font-semibold leading-tight">{t('chat.name')}</div>
                <div className="text-[0.7rem] text-paper/60 leading-tight">{t('chat.role')}</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={restart} aria-label={t('chat.restart')} className="rounded-full p-1.5 hover:bg-white/10">
                <RotateCcw size={15} />
              </button>
              <button onClick={() => setOpen(false)} aria-label={t('chat.close')} className="rounded-full p-1.5 hover:bg-white/10">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="scrollbar-thin flex-1 space-y-3 overflow-y-auto px-3.5 py-4">
            {messages.map((m, i) =>
              m.type === 'plans' ? (
                <div key={i} className="grid gap-2.5">
                  {m.content.map((plan) => (
                    <PlanCard key={plan.id} plan={plan} stamped />
                  ))}
                </div>
              ) : (
                <ChatMessage key={i} from={m.from}>{m.content}</ChatMessage>
              )
            )}

            {/* Inline quick replies based on step */}
            {state.step === STEPS.ASK_NEED && (
              <QuickReplies options={NEED_OPTIONS} onPick={(o) => chooseNeed(o.key, t(o.labelKey))} t={t} />
            )}
            {state.step === STEPS.ASK_AGE && (
              <QuickReplies options={AGE_OPTIONS} onPick={(o) => chooseAge(o.key, t(o.labelKey))} t={t} />
            )}
            {state.step === STEPS.ASK_BUDGET && (
              <QuickReplies options={BUDGET_OPTIONS} onPick={(o) => chooseBudget(o.key, t(o.labelKey))} t={t} />
            )}
            {state.step === STEPS.ASK_CONTACT && (
              <div className="flex gap-2">
                <button onClick={() => handleContactChoice(true)} className="rounded-full bg-marigold px-3.5 py-1.5 text-xs font-medium text-navy hover:opacity-90">
                  {t('chat.option.yes')}
                </button>
                <button onClick={() => handleContactChoice(false)} className="rounded-full border border-navy/20 px-3.5 py-1.5 text-xs font-medium text-navy hover:bg-navy/5">
                  {t('chat.option.no')}
                </button>
              </div>
            )}
            {state.step === STEPS.DONE && (
              <button onClick={restart} className="rounded-full border border-navy/20 px-3.5 py-1.5 text-xs font-medium text-navy hover:bg-navy/5">
                {t('chat.option.startOver')}
              </button>
            )}
          </div>

          {/* Text input only for name & phone steps */}
          {(state.step === STEPS.ASK_NAME || state.step === STEPS.ASK_PHONE) && (
            <form
              onSubmit={state.step === STEPS.ASK_NAME ? submitName : submitPhone}
              className="flex items-center gap-2 border-t border-navy/10 bg-white px-3 py-2.5"
            >
              <input
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('chat.inputPlaceholder')}
                inputMode={state.step === STEPS.ASK_PHONE ? 'numeric' : 'text'}
                className="flex-1 rounded-full border border-navy/15 bg-paper px-3.5 py-2 text-sm outline-none focus:border-marigold-dark"
              />
              <button
                type="submit"
                disabled={sending}
                aria-label={t('chat.send')}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-paper disabled:opacity-50"
              >
                <Send size={15} />
              </button>
            </form>
          )}
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-medium text-paper shadow-lg transition-transform hover:scale-105"
        aria-label={t('chat.launcher')}
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
        <span className="hidden sm:inline">{open ? t('chat.close') : t('chat.launcher')}</span>
      </button>
    </div>
  );
}

function QuickReplies({ options, onPick, t }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.key}
          onClick={() => onPick(o)}
          className="rounded-full border border-navy/20 bg-white px-3.5 py-1.5 text-xs font-medium text-navy transition-colors hover:border-marigold-dark hover:text-marigold-dark"
        >
          {t(o.labelKey)}
        </button>
      ))}
    </div>
  );
}
