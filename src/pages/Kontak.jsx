import { useEffect, useState } from 'react';
import { MessageCircle, Mail, Clock, MapPin, QrCode } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import pelayananData from '../data/pelayananData.json';

const WHATSAPP_NUMBER = '6281234567890';
const EMAIL = 'layanan@siapdesa-bantaeng.id';

export default function Kontak() {
  // URL Buku Tamu dibangun otomatis dari domain tempat situs ini berjalan,
  // jadi tetap benar di localhost, GitHub Pages, atau domain kustom manapun.
  const [bukuTamuUrl, setBukuTamuUrl] = useState('');
  useEffect(() => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    setBukuTamuUrl(`${window.location.origin}${base}/buku-tamu`);
  }, []);

  return (
    <div className="pt-32 pb-24 px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Kontak"
          title="Hubungi Kantor Desa"
          subtitle="Kami siap membantu pertanyaan seputar administrasi dan pelayanan desa."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <Reveal delay={0.05} className="lg:col-span-3">
            <div className="card-premium overflow-hidden h-full min-h-[340px]">
              <iframe
                title="Lokasi Kantor Desa - Kabupaten Bantaeng"
                src="https://www.google.com/maps?q=Kabupaten%20Bantaeng%2C%20Sulawesi%20Selatan&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 340 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Contact cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Reveal delay={0.1}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="card-premium flex items-center gap-4 p-5 hover:!-translate-y-1"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-green-500 text-white">
                  <MessageCircle size={22} />
                </span>
                <div>
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">+{WHATSAPP_NUMBER.replace(/(\d{2})(\d{3})(\d{4})(\d{4})/, '$1 $2-$3-$4')}</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <a href={`mailto:${EMAIL}`} className="card-premium flex items-center gap-4 p-5 hover:!-translate-y-1">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-desa-blue-500 text-white">
                  <Mail size={22} />
                </span>
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{EMAIL}</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card-premium p-5">
                <div className="flex items-center gap-4 mb-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-desa-green-500 text-white">
                    <Clock size={22} />
                  </span>
                  <p className="font-semibold text-sm">Jam Pelayanan</p>
                </div>
                <div className="space-y-2">
                  {pelayananData.jamOperasional.map((j) => (
                    <div key={j.hari} className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                      <span>{j.hari}</span>
                      <span className="font-medium">{j.jam}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="card-premium flex items-start gap-4 p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-desa-blue-50 dark:bg-white/10 text-desa-blue-600 dark:text-desa-blue-300">
                  <MapPin size={22} />
                </span>
                <div>
                  <p className="font-semibold text-sm">Alamat</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Kantor Desa, Kabupaten Bantaeng, Sulawesi Selatan, Indonesia
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* QR Code to Buku Tamu */}
        <Reveal delay={0.1} className="mt-8">
          <div className="card-premium p-8 flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-br from-desa-green-500 to-desa-blue-500 !border-none text-white">
            <div className="rounded-2xl bg-white p-3 shrink-0">
              {bukuTamuUrl && (
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(bukuTamuUrl)}`}
                  alt="QR Code menuju halaman Buku Tamu"
                  width={160}
                  height={160}
                />
              )}
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <QrCode size={20} />
                <p className="font-bold">Pindai untuk Isi Buku Tamu</p>
              </div>
              <p className="mt-2 text-sm text-white/90 max-w-md">
                Arahkan kamera ponsel Anda ke kode QR di samping untuk langsung
                membuka formulir Buku Tamu digital SIAP DESA.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
