import { useEffect, useState } from 'react'
import { BookOpen } from 'lucide-react'

export default function Articles() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/articles`)
        const data = await res.json()
        setArticles(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="articles" className="py-16 sm:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Edukasi Penyortiran</h2>
        <p className="mt-2 text-slate-300">Artikel singkat untuk membantu warga memilah sampah dengan benar.</p>

        {loading ? (
          <p className="text-slate-400 mt-6">Memuat artikel…</p>
        ) : articles.length === 0 ? (
          <p className="text-slate-400 mt-6">Belum ada artikel. Tim kami siap mengisi konten edukasi sesuai kebutuhan pemerintah daerah.</p>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <article key={i} className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3"><BookOpen className="text-emerald-400" size={20} /></div>
                <h3 className="text-white font-semibold">{a.title}</h3>
                <p className="text-slate-300 text-sm mt-1">{a.excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {a.tags?.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 text-slate-300">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
