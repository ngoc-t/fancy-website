export default function PromotionalBanner() {
  return (
    <section className="px-4 sm:px-6 pb-14">
      <div className="mx-auto max-w-content container-content">
        <div className="relative rounded-sm bg-olive/95 overflow-hidden">
          <div className="px-8 sm:px-10 py-10 sm:py-14 lg:py-16 lg:pl-12 lg:pr-72">
            <p className="text-white/90 text-[28px] sm:text-[30px] leading-tight">
              Elegant <span className="script-font italic">compositions</span> from <span className="underline decoration-white/40 underline-offset-4">$29</span>
            </p>
            <p className="mt-5 text-white/85 text-[15px] max-w-xl">
              We offer bouquets at fair prices. Order fresh and unique flower arrangements only at Fancy Florist.
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center justify-center h-10 px-6 text-[11px] tracking-wide uppercase bg-ink text-white hover:opacity-90">
                Order flowers
              </button>
            </div>
          </div>

          {/* right image */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-72">
            <div className="h-full w-full flex items-end justify-center">
              <div className="text-[120px] pb-6">💐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
