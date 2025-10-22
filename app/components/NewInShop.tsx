import SectionHeader from './SectionHeader'

export default function NewInShop() {
  const bouquets = [
    { name: 'Classic Rose Bouquet', price: '$35.00', tag: 'Bestseller', image: '🌹' },
    { name: 'Orchid Harmony', price: '$45.00', tag: 'New', image: '🌺' },
    { name: 'Lily Delight', price: '$40.00', tag: 'New', image: '🌷' },
    { name: 'Mixed Bouquet', price: '$29.00', tag: 'Sale', image: '💐' },
  ]

  return (
    <section className="bg-beige pt-12 pb-12 px-4 sm:px-6">
      <div className="mx-auto max-w-content container-content">
        <SectionHeader
          eyebrow="Shop Special Collection"
          title="Best Sellers"
          subtitle="Whether you need a bouquet, vase, or custom arrangement, we have something for every taste and budget. Explore our most popular arrangements, crafted with love and delivered fresh to your doorstep."
        />
        <div className="relative">
          {/* left chevron */}
          <button aria-label="previous" className="hidden lg:flex absolute -left-8 top-28 z-10 h-9 w-9 items-center justify-center rounded-full border border-ink/20 text-ink/70 hover:text-ink bg-white/70 backdrop-blur">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>

          {/* products row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bouquets.map((b, i) => (
              <div key={i} className="text-center">
                <div className="relative">
                  {/* image placeholder */}
                  <div className="h-40 sm:h-44 flex items-end justify-center">
                    <div className="text-7xl">{b.image}</div>
                  </div>
                  {/* tag */}
                  <span className={`absolute -left-1 -top-1 text-[11px] leading-[1] px-2 py-1 rounded bg-[#F1A350] text-white ${b.tag==='Bestseller' ? '' : ''}`}>{b.tag}</span>
                </div>

                <h3 className="mt-6 font-semibold text-ink">{b.name}</h3>
                <p className="mt-2 text-[15px] text-ink/70 font-medium">{b.price}</p>
                <div className="mt-3 flex justify-center">
                  <button className="inline-flex items-center justify-center h-9 px-5 text-[11px] uppercase tracking-wide border border-ink/50 text-ink hover:bg-ink hover:text-white transition-colors">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* right chevron */}
          <button aria-label="next" className="hidden lg:flex absolute -right-8 top-28 z-10 h-9 w-9 items-center justify-center rounded-full border border-ink/20 text-ink/70 hover:text-ink bg-white/70 backdrop-blur">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
