import { useState } from 'react'

export function PickupForm() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/pickups`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setStatus({ ok: true, id: data.id })
      else setStatus({ ok: false, message: data.detail || 'Gagal mengirim' })
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form id="pickup" onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-slate-900/60 p-5 space-y-3">
      <h3 className="text-white font-semibold text-lg">Permintaan Penjemputan</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <input name="name" required placeholder="Nama" className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
        <input name="email" type="email" placeholder="Email" className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
        <input name="phone" placeholder="Telepon" className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
        <input name="address" required placeholder="Alamat" className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
        <input name="city" placeholder="Kota/Kecamatan" className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
        <input name="waste_type" required placeholder="Jenis sampah (organik, anorganik, e-waste...)" className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
        <input name="preferred_date" type="date" className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
        <input name="notes" placeholder="Catatan" className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
      </div>
      <button disabled={loading} className="px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-600 text-white font-semibold disabled:opacity-60">
        {loading ? 'Mengirim…' : 'Kirim Permintaan'}
      </button>
      {status && (
        <p className={`text-sm ${status.ok ? 'text-emerald-400' : 'text-red-400'}`}>
          {status.ok ? `Berhasil dikirim. ID: ${status.id}` : status.message}
        </p>
      )}
    </form>
  )
}

export function ContactForm() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setStatus({ ok: true, id: data.id })
      else setStatus({ ok: false, message: data.detail || 'Gagal mengirim' })
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-slate-900/60 p-5 space-y-3">
      <h3 className="text-white font-semibold text-lg">Hubungi Kami</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <input name="name" required placeholder="Nama" className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
        <input name="email" required type="email" placeholder="Email" className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
        <input name="subject" required placeholder="Subjek" className="sm:col-span-2 px-3 py-2 rounded bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
        <textarea name="message" required placeholder="Pesan" className="sm:col-span-2 px-3 py-2 rounded bg-white/5 border border-white/10 text-white placeholder:text-slate-400 min-h-[120px]" />
      </div>
      <button disabled={loading} className="px-4 py-2 rounded bg-white text-slate-900 font-semibold disabled:opacity-60">
        {loading ? 'Mengirim…' : 'Kirim Pesan'}
      </button>
      {status && (
        <p className={`text-sm ${status.ok ? 'text-emerald-400' : 'text-red-400'}`}>
          {status.ok ? `Berhasil dikirim. ID: ${status.id}` : status.message}
        </p>
      )}
    </form>
  )
}
