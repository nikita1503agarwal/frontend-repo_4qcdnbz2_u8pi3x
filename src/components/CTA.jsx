export default function CTA() {
  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Siap Menghadirkan Kota yang Lebih Bersih?</h2>
              <p className="mt-2 text-slate-200">Tim kami siap bermitra dengan pemerintah untuk implementasi cepat, pelatihan, dan dukungan berkelanjutan.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#pickup" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-slate-900 font-semibold shadow">
                Jadwalkan Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
