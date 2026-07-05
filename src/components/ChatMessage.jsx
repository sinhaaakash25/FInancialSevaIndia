export default function ChatMessage({ from, children }) {
  const isBindu = from === 'bindu';
  return (
    <div className={`flex ${isBindu ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isBindu
            ? 'rounded-tl-sm bg-white text-ink shadow-sm'
            : 'rounded-tr-sm bg-navy text-paper'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
