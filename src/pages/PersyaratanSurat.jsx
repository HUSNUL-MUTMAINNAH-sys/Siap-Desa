import * as Icons from 'lucide-react';
import { Clock, Wallet, Download, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/ui/Reveal.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import suratData from '../data/suratData.json';

export default function PersyaratanSurat() {
  return (
    <div className="pt-32 pb-24 px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Persyaratan Surat"
          title="Siapkan Berkas Sebelum ke Kantor Desa"
          subtitle="Pilih jenis surat di bawah untuk melihat persyaratan lengkap, estimasi waktu pengerjaan, biaya, dan template dokumen."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {suratData.map((surat, i) => {
            const Icon = Icons[surat.icon] || Icons.FileText;
            return (
              <Reveal key={surat.id} delay={(i % 2) * 0.1}>
                <article className="card-premium p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-desa-green-500 to-desa-blue-500 text-white shadow-premium">
                        <Icon size={26} />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-desa-ink dark:text-white">{surat.nama}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{surat.deskripsi}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-desa-blue-50 dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-desa-blue-700 dark:text-desa-blue-300">
                      <Clock size={13} /> {surat.estimasi}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-desa-green-50 dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-desa-green-700 dark:text-desa-green-300">
                      <Wallet size={13} /> {surat.biaya}
                    </span>
                  </div>

                  <div className="mt-5 flex-1">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2.5">
                      Persyaratan:
                    </p>
                    <ul className="space-y-2">
                      {surat.persyaratan.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-desa-green-500" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={surat.template}
                    download
                    className="mt-6 btn-secondary !py-2.5 text-sm w-fit"
                  >
                    <Download size={16} /> Unduh Template
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
