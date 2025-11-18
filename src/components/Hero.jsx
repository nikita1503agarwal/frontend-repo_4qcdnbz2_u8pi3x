import { ArrowRight, Recycle, Leaf } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-20 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200 text-sm">
            <Recycle size={16} className="text-emerald-400" />
            Sampah Tersortir, Kota Lebih Sehat
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Sampurna — Solusi Terpadu Pengelolaan dan Penyortiran Sampah
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Platform komprehensif untuk pemerintah daerah dan BUMD dalam meningkatkan daur ulang,
            mengurangi emisi, dan mencapai kota bebas sampah. Data real‑time, edukasi warga, dan
            penjadwalan penjemputan menjadi satu.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pickup" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-md">
              Jadwalkan Penjemputan <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/10 text-slate-100 hover:bg-white/5">
              Hubungi Tim Kami
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <div className="grid grid-cols-3 gap-3 h-full">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="rounded-xl bg-slate-800/60 border border-white/10 flex items-center justify-center text-slate-300 text-sm">
                  {i % 2 === 0 ? 'Organik' : 'Anorganik'}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-400">Dashboard operasional, metrik daur ulang, dan manajemen fasilitas</p>
        </div>
      </div>
    </section>
  )
}
