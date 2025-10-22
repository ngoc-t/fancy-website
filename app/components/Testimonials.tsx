export default function Testimonials() {
  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-4 mb-12">
          <p className="text-lg script-font text-dark-gray">Testimonials</p>
          <h2 className="text-4xl serif-font font-bold text-dark-gray">What Our Customers Say</h2>
          <p className="text-light-gray">Hear from our satisfied customers about their Fancy Florist experience.</p>
        </div>

        <div className="bg-white rounded-lg p-8 space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mx-auto flex items-center justify-center text-2xl">
            👩
          </div>
          <h3 className="text-xl font-semibold text-dark-gray">Sarah Johnson</h3>
          <blockquote className="text-lg italic serif-font text-dark-gray leading-relaxed">
            "Fancy Florist delivered the most beautiful arrangement for my anniversary. The flowers were fresh, the design was unique, and the delivery was perfect. Highly recommended!"
          </blockquote>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="p-2 border border-dark-gray rounded-full hover:bg-dark-gray hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 border border-dark-gray rounded-full hover:bg-dark-gray hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
