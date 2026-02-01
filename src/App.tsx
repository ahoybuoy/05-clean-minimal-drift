import { Container } from './components/layout/Container'
import { Navbar } from './components/navigation/Navbar'
import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
