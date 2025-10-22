export default function Collections() {
  const collections = [
    {
      title: "Mother's Day Collection",
      description: "Show your love with our special mother's day arrangements",
      image: "🌷"
    },
    {
      title: "Valentine's Day Collection",
      description: "Romantic flowers for your special someone",
      image: "🌹"
    },
    {
      title: "Autumn Collection",
      description: "Warm autumn colors and seasonal flowers",
      image: "🍂"
    }
  ]

  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <p className="text-lg script-font text-dark-gray">Our Collections</p>
          <h2 className="text-4xl serif-font font-bold text-dark-gray">Special Flower Collections</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            Need to pick a gift for a specific event? We can help you even if you are short of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="space-y-4">
              <div className="w-full h-64 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center text-6xl">
                {collection.image}
              </div>
              <h3 className="text-xl font-semibold text-dark-gray">{collection.title}</h3>
              <p className="text-light-gray">{collection.description}</p>
              <button className="px-6 py-2 border border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white transition-colors rounded">
                View Collection
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
