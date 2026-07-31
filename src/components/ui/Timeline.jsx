import * as Icons from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function Timeline({ steps }) {
  return (
    <div className="relative">
      {/* connecting line */}
      <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-desa-green-400 via-desa-blue-400 to-desa-green-400 md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-10 md:space-y-0">
        {steps.map((step, i) => {
          const Icon = Icons[step.icon] || Icons.Circle;
          const isEven = i % 2 === 0;
          return (
            <Reveal key={step.id} delay={i * 0.1} className="relative md:grid md:grid-cols-2 md:gap-10 md:py-8">
              <div className={`flex items-start gap-5 md:col-span-1 ${isEven ? 'md:order-1 md:justify-self-end md:text-right md:flex-row-reverse' : 'md:order-2'}`}>
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-desa-green-500 to-desa-blue-500 text-white shadow-premium">
                  <Icon size={24} />
                </span>
                <div className="card-premium p-5 flex-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-desa-blue-600 dark:text-desa-blue-300 mb-1.5">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-desa-blue-50 dark:bg-white/10">{step.id}</span>
                    {step.durasi}
                  </div>
                  <h3 className="font-bold text-desa-ink dark:text-white">{step.judul}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">{step.deskripsi}</p>
                </div>
              </div>
              <div className="hidden md:block md:col-span-1" />
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
