import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import NewInShop from './components/NewInShop'
import PromotionalBanner from './components/PromotionalBanner'
import OccasionIcons from './components/OccasionIcons'
import Services from './components/Services'
import NaturalBouquets from './components/NaturalBouquets'
import ProductGrid from './components/ProductGrid'
import Gallery from './components/Gallery'
import Collections from './components/Collections'
import Testimonials from './components/Testimonials'
import Instagram from './components/Instagram'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-beige pt-24">
      <Header />
      <Hero />
      <Features />
      <About />
      <NewInShop />
      <PromotionalBanner />
      <OccasionIcons />
      <Services />
      <NaturalBouquets />
      <ProductGrid />
      <Gallery />
      <Collections />
      <Testimonials />
      <Instagram />
      <Footer />
    </main>
  )
}
