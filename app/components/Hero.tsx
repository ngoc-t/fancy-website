export default function Hero() {
  return (
    <section className="bg-beige pt-10 sm:pt-16 pb-20 px-4 sm:px-6">
      <div className="mx-auto max-w-content container-content flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <p className="eyebrow">Welcome to Fancy Florist</p>
          <h1 className="mt-3 text-display lg:text-display-lg serif-font font-bold text-ink tracking-tight">
            Beautiful Flowers for Any Occasion
          </h1>
          <p className="mt-4 text-[15px] text-stone-600 max-w-sm">
            Discover the freshest flowers and exclusive designs to brighten every moment.
          </p>
          <p className="mt-2 text-[14px] text-stone-500 max-w-sm">
            FREE next day delivery when you order by 6pm.
          </p>
          <div className="mt-7">
            <button className="btn-outline">ORDER FLOWERS</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center relative">
          {/* decorative rings */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-olive/30"></div>
          <div className="absolute w-96 h-96 rounded-full border border-olive/20"></div>
          <div className="relative w-80 h-80 sm:w-[360px] sm:h-[360px] rounded-full bg-white shadow-[0_40px_100px_rgba(0,0,0,0.05)] flex items-center justify-center overflow-hidden">
            <div className="w-[85%] h-[85%] rounded-2xl bg-gradient-to-br from-[#f7e7e3] to-[#e9f0e5] flex items-center justify-center">
              <div className="text-7xl">💐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
