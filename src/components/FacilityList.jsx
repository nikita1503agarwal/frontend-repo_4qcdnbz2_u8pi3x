import { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'

export default function FacilityList() {
  const [facilities, setFacilities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/facilities`)
        const data = await res.json()
        setFacilities(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="facilities" className="py-16 sm:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Fasilitas Pengelolaan</h2>
        <p className="mt-2 text-slate-300">Lokasi TPS3R, bank sampah, dan fasilitas daur ulang yang terhubung dengan Sampurna.</p>

        {loading ? (
          <p className="text-slate-400 mt-6">Memuat data fasilitas…</p>
        ) : facilities.length === 0 ? (
          <p className="text-slate-400 mt-6">Belum ada data fasilitas. Hubungi kami untuk integrasi.</p>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center"><MapPin className="text-emerald-400" size={20} /></div>
                  <div>
                    <h3 className="text-white font-semibold">{f.name}</h3>
                    <p className="text-slate-300 text-sm">{f.address}{f.city ? `, ${f.city}` : ''}</p>
                    {f.accepted_waste_types && f.accepted_waste_types.length > 0 && (
                      <p className="text-slate-400 text-xs mt-1">Menerima: {f.accepted_waste_types.join(', ')}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
