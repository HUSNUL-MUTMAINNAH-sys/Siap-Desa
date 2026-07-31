import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, MapPinned, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { submitBukuTamu } from '../utils/googleScript.js';

const initialForm = { nama: '', alamat: '', noHp: '', keperluan: '' };

export default function BukuTamu() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nama || !form.alamat || !form.noHp || !form.keperluan) return;

    setStatus('loading');
    try {
      await submitBukuTamu(form);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
    }
  };

  const fields = [
    { name: 'nama', label: 'Nama Lengkap', icon: User, placeholder: 'Contoh: Andi Saputra', type: 'text' },
    { name: 'alamat', label: 'Alamat', icon: MapPinned, placeholder: 'Dusun / RT-RW, Desa', type: 'text' },
    { name: 'noHp', label: 'Nomor HP', icon: Phone, placeholder: '08xx-xxxx-xxxx', type: 'tel' },
  ];

  return (
    <div className="pt-32 pb-24 px-5 md:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="Buku Tamu Digital"
          title="Isi Buku Tamu Sebelum Berkunjung"
          subtitle="Data yang Anda kirimkan akan tersimpan otomatis ke sistem pencatatan kunjungan Kantor Desa."
        />

        <Reveal delay={0.15} className="mt-12">
          <form onSubmit={handleSubmit} className="card-premium p-7 md:p-9 space-y-5">
            {fields.map((f) => (
              <div key={f.name}>
                <label htmlFor={f.name} className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                  {f.label}
                </label>
                <div className="relative">
                  <f.icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required
                    value={form[f.name]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 py-3 pl-11 pr-4 text-sm text-desa-ink dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-desa-green-400 transition-shadow"
                  />
                </div>
              </div>
            ))}

            <div>
              <label htmlFor="keperluan" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                Keperluan
              </label>
              <div className="relative">
                <MessageSquare size={18} className="absolute left-4 top-4 text-slate-400" />
                <textarea
                  id="keperluan"
                  name="keperluan"
                  required
                  rows={4}
                  value={form.keperluan}
                  onChange={handleChange}
                  placeholder="Contoh: Mengurus Surat Keterangan Domisili"
                  className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 py-3 pl-11 pr-4 text-sm text-desa-ink dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-desa-green-400 transition-shadow resize-none"
                />
              </div>
            </div>

            <button type="submit" disabled={status === 'loading'} className="btn-primary w-full !py-3.5 disabled:opacity-60">
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Mengirim...
                </>
              ) : (
                <>
                  <Send size={18} /> Kirim Buku Tamu
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-xl bg-desa-green-50 dark:bg-white/5 px-4 py-3 text-sm text-desa-green-700 dark:text-desa-green-300"
              >
                <CheckCircle2 size={18} /> Terima kasih! Data Anda berhasil dikirim.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-xl bg-red-50 dark:bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-300"
              >
                <AlertCircle size={18} /> Gagal mengirim. Periksa koneksi internet dan coba lagi.
              </motion.p>
            )}
          </form>
        </Reveal>
      </div>
    </div>
  );
}
