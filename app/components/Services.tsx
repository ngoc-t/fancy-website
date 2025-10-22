export default function Services() {
  const services = [
    {
      title: "Orchids",
      image: "🌺",
      description: "Exotic elegance for special moments."
    },
    {
      title: "Roses",
      image: "🌹",
      description: "Classic beauty for every occasion."
    },
    {
      title: "Tulips",
      image: "🌷",
      description: "Vibrant colors to brighten your day."
    },
    {
      title: "Lilies",
      image: "🌸",
      description: "Graceful and fragrant, perfect for any setting."
    },
    {
      title: "Dahlia",
      image: "🌻",
      description: "Bold and beautiful, a statement of style."
    },
    {
      title: "Jasmine",
      image: "🌼",
      description: "Delicate and aromatic, a touch of romance."
    }
  ]

  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <p className="text-lg script-font text-dark-gray">Shop by Flower Type</p>
          <h2 className="text-4xl serif-font font-bold text-dark-gray">Fresh Flower Collection</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            From seasonal flowers celebrating the best of each season to exotic flowers with unique and stunning blooms for a standout touch, and wildflowers with natural charm and vibrant color for a rustic feel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-full h-64 bg-gradient-to-br from-green-200 to-blue-200 rounded-lg flex items-center justify-center text-6xl">
                {service.image}
              </div>
              <h3 className="text-xl font-semibold text-dark-gray">{service.title}</h3>
              <p className="text-sm text-light-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
