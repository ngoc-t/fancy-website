export default function Gallery() {
  const galleryImages = [
    "👩‍🌾🐕", "🌸", "🌺", "🏪", "👩‍🌾", "🌼"
  ]

  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className={`bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center text-4xl p-8 ${
              index === 0 ? 'md:col-span-2' : ''
            }`}>
              {image}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
