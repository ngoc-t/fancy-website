export default function Instagram() {
  const instagramImages = [
    "🌸", "🌺", "🌼", "🌻", "🌷", "💐"
  ]

  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <p className="text-lg script-font text-dark-gray">Follow Us</p>
          <h2 className="text-4xl serif-font font-bold text-dark-gray">Stay Connected</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            Follow us on social media for the latest updates, exclusive offers, and floral inspiration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramImages.map((image, index) => (
            <div key={index} className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center text-3xl">
              {image}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
