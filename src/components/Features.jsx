import { BarChart3, Truck, ShieldCheck, Database, Smartphone, Users } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <BarChart3 className="text-emerald-400" size={22} />,
      title: 'Analitik Real‑Time',
      desc: 'Pantau tingkat daur ulang, volume sampah, dan pengalihan TPA untuk setiap kecamatan.'
    },
    {
      icon: <Truck className="text-emerald-400" size={22} />,
      title: 'Penjadwalan Penjemputan',
      desc: 'Permintaan penjemputan warga langsung terintegrasi ke rute operasional.'
    },
    {
      icon: <ShieldCheck className="text-emerald-400" size={22} />,
      title: 'Keamanan & Kepatuhan',
      desc: 'Standar keamanan data dan kepatuhan regulasi pemerintah.'
    },
    {
      icon: <Database className="text-emerald-400" size={22} />,
      title: 'Integrasi Data',
      desc: 'Terhubung dengan sistem eksisting dan perangkat IoT timbangan.'
    },
    {
      icon: <Smartphone className="text-emerald-400" size={22} />,
      title: 'Edukasi Warga',
      desc: 'Artikel edukatif dan panduan penyortiran yang mudah dipahami.'
    },
    {
      icon: <Users className="text-emerald-400" size={22} />,
      title: 'Partisipasi Publik',
      desc: 'Tingkatkan partisipasi warga melalui program insentif dan pelaporan.'
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Mengapa Sampurna?</h2>
        <p className="mt-2 text-slate-300 max-w-3xl">Dirancang untuk pemerintahan yang ingin mencapai tata kelola sampah yang sempurna—terukur, transparan, dan berkelanjutan.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
