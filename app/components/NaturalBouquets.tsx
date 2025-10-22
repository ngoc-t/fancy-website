export default function NaturalBouquets() {
  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-lg script-font text-dark-gray">Custom Orders</p>
          <h2 className="text-4xl serif-font font-bold text-dark-gray">Made Just for You</h2>
          <div className="w-20 h-px bg-dark-gray"></div>
          <p className="text-light-gray leading-relaxed">
            Can't find exactly what you're looking for? Let us create a custom arrangement just for you.
          </p>
          <p className="text-light-gray leading-relaxed">
            From everyday bouquets to custom event styling, Fancy Florist offers:
          </p>
          <ul className="text-light-gray leading-relaxed space-y-2">
            <li>• Custom Orders: Can't find what you want? We'll design it for you.</li>
            <li>• Gift Baskets: Gourmet treats paired with floral beauty.</li>
            <li>• Event Packages: Full-service styling for weddings, parties, & corporate events.</li>
          </ul>
          <div className="mt-6">
            <button className="inline-flex items-center justify-center h-10 px-6 text-[11px] tracking-wide uppercase bg-ink text-white hover:opacity-90">
              Contact us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-80 h-96 bg-gradient-to-br from-pink-200 to-red-200 rounded-full flex items-center justify-center">
            <div className="text-6xl">🌻</div>
          </div>
        </div>
      </div>
    </section>
  )
}
