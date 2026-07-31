import Reveal from './Reveal.jsx';

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';
  return (
    <Reveal className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl md:text-4xl font-bold text-desa-ink dark:text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">{subtitle}</p>
      )}
    </Reveal>
  );
}
