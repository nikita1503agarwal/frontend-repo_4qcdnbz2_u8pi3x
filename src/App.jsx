import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import FacilityList from './components/FacilityList'
import Articles from './components/Articles'
import CTA from './components/CTA'
import { PickupForm, ContactForm } from './components/Forms'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FacilityList />
        <section id="services" className="py-16 sm:py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
            <PickupForm />
            <ContactForm />
          </div>
        </section>
        <Articles />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Sampurna. Semua hak dilindungi.</p>
          <p>Didukung oleh data dan kemitraan pemerintah daerah.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
