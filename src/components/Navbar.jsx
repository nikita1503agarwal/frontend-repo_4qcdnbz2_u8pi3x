import { useState } from 'react'
import { Menu, X, Leaf, Recycle, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'Tentang' },
    { href: '#services', label: 'Layanan' },
    { href: '#facilities', label: 'Fasilitas' },
    { href: '#articles', label: 'Edukasi' },
    { href: '#contact', label: 'Kontak' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-bold text-lg">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-emerald-500/20 text-emerald-400"><Recycle size={18} /></span>
          Sampurna
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-200/90 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="#pickup" className="px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors">Jadwalkan Penjemputan</a>
          <a href="#contact" className="px-3 py-2 rounded-md border border-white/10 text-slate-200 hover:bg-white/5 text-sm">Hubungi Kami</a>
        </div>
        <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200/90 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#pickup" onClick={() => setOpen(false)} className="block text-emerald-400 font-semibold">Jadwalkan Penjemputan</a>
          </div>
        </div>
      )}
    </header>
  )
}
