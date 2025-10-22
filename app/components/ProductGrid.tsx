import SectionHeader from './SectionHeader'

export default function ProductGrid() {
  const products = [
    { name: "Classic Rose Bouquet", price: "$35.00", tag: "Bestseller", image: "🌹", description: "Elegant and timeless, perfect for any occasion." },
    { name: "Orchid Harmony", price: "$45.00", tag: "New", image: "🌺", description: "Exotic and vibrant, a stunning statement piece." },
    { name: "Lily Delight", price: "$40.00", tag: "New", image: "🌷", description: "Fragrant and graceful, a touch of sophistication." },
    { name: "Mixed Bouquet", price: "$29.00", tag: "Sale", image: "💐", description: "Fresh and colorful, great value for money." }
  ]

  return (
    <section className="bg-beige pt-12 pb-16 px-4 sm:px-6">
      <div className="mx-auto max-w-content container-content">
        <SectionHeader
          eyebrow="Our Products"
          title="Fresh Flowers – Vibrant blooms handpicked daily for maximum beauty."
          subtitle="Luxury Arrangements - Hand-tied masterpieces for any occasion. Artificial Floral Arrangements - Lifelike, lasting beauty for timeless decor. Gift Baskets - Elegant baskets with flowers and gourmet treats. Seasonal Arrangements - Curated blooms celebrating each season's charm."
        />

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-8 mb-12">
          <button className="px-6 py-2 border-b-2 border-dark-gray text-dark-gray font-semibold">Free Delivery</button>
          <button className="px-6 py-2 text-light-gray hover:text-dark-gray">Hand-Tied</button>
          <button className="px-6 py-2 text-light-gray hover:text-dark-gray">Exclusive Design</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="h-44 flex items-end justify-center">
                  <div className="text-7xl">{product.image}</div>
                </div>
                <span className="absolute -left-1 -top-1 text-[11px] leading-[1] px-2 py-1 rounded bg-[#F1A350] text-white">{product.tag}</span>
              </div>
              <h3 className="mt-6 font-semibold text-ink">{product.name}</h3>
              <p className="mt-2 text-sm text-ink/60">{product.description}</p>
              <div className="mt-2 flex items-center justify-center space-x-2">
                <p className="text-ink/70 font-medium">{product.price}</p>
              </div>
              <div className="mt-3 flex justify-center">
                <button className="inline-flex items-center justify-center h-9 px-5 text-[11px] uppercase tracking-wide border border-ink/50 text-ink hover:bg-ink hover:text-white transition-colors">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
