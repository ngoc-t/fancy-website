export default function About() {
  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-80 h-96 bg-gradient-to-br from-green-200 to-blue-200 rounded-t-full flex items-center justify-center">
            <div className="text-6xl">👩‍🌾</div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-lg script-font text-dark-gray">About Us</p>
          <h2 className="text-4xl serif-font font-bold text-dark-gray">
            Flowers That Brighten Life
          </h2>
          <div className="w-20 h-px bg-dark-gray"></div>
          <p className="text-light-gray leading-relaxed">
            Fancy Florist is a boutique floral studio in Phnom Penh, specializing in luxury arrangements.
          </p>
          <p className="text-light-gray leading-relaxed">
            Every bouquet is handcrafted with premium, exquisite blooms and quiet attention to detail.
          </p>
          <p className="text-light-gray leading-relaxed">
            Designed to add meaning and beauty to special moments, impress your guests, or say what words can't.
          </p>
        </div>
      </div>
    </section>
  )
}
