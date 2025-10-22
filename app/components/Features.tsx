export default function Features() {
  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery 24/7",
      description: "Forgot about an important date? Call us & get flowers delivered now."
    },
    {
      icon: "🌿",
      title: "Only Fresh Flowers",
      description: "What you see is exactly what you get."
    },
    {
      icon: "🎨",
      title: "Unique Floral Designs",
      description: "Exclusive arrangements you won't find anywhere else."
    },
    {
      icon: "✨",
      title: "Made Just for You",
      description: "Tell us what you need, we'll craft something unforgettable."
    }
  ]

  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-dark-gray">{feature.title}</h3>
              <p className="text-sm text-light-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
