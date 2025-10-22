export default function OccasionIcons() {
  const items = [
    {
      title: 'Birthday',
      desc: 'Bright, cheerful bouquets to mark every special year.',
      icon: (
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink/60">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
    },
    {
      title: 'Anniversary',
      desc: 'Express your love with elegant flowers.',
      icon: (
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink/60">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
    },
    {
      title: 'Get Well Soon',
      desc: 'Brighten their day with cheerful arrangements.',
      icon: (
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink/60">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
    },
    {
      title: 'Thank You',
      desc: 'Show your appreciation with thoughtful floral gifts.',
      icon: (
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink/60">
          <path d="M14 9V5a3 3 0 0 0-6 0v4"/>
          <rect x="2" y="9" width="20" height="11" rx="2" ry="2"/>
          <circle cx="12" cy="15" r="1"/>
        </svg>
      ),
    },
    {
      title: 'Congratulations',
      desc: 'Celebrate achievements with stunning bouquets.',
      icon: (
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink/60">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22,4 12,14.01 9,11.01"/>
        </svg>
      ),
    },
    {
      title: 'Wedding',
      desc: 'Timeless floral artistry to make your big day unforgettable.',
      icon: (
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink/60">
          <circle cx="12" cy="7" r="3"/>
          <path d="M4 22a8 8 0 0116 0"/>
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-beige px-4 sm:px-6 pt-10 pb-6">
      <div className="mx-auto max-w-content container-content">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-12 text-center">
          {items.map((it, i) => (
            <div key={i}>
              <div className="flex items-center justify-center mb-3">
                {it.icon}
              </div>
              <h3 className="text-[18px] font-serif text-ink/90">{it.title}</h3>
              <div className="mx-auto mt-3 h-[2px] w-16 bg-ink/15" />
              <p className="mt-3 text-[13px] leading-relaxed text-ink/60 max-w-[220px] mx-auto">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


