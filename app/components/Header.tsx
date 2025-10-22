export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-beige px-4 sm:px-6 py-6" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <div className="mx-auto max-w-content container-content flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-[22px] script-font font-bold text-ink leading-none">
            <div className="text-[10px] mb-1 text-center">🌸</div>
            Sami's Haven
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#" className="text-[12px] tracking-wide uppercase text-ink/80 hover:text-ink">Home</a>
          <a href="#" className="text-[12px] tracking-wide uppercase text-ink/80 hover:text-ink">Shop</a>
          <a href="#" className="text-[12px] tracking-wide uppercase text-ink/80 hover:text-ink">About</a>
          <a href="#" className="text-[12px] tracking-wide uppercase text-ink/80 hover:text-ink">Services</a>
          <a href="#" className="text-[12px] tracking-wide uppercase text-ink/80 hover:text-ink">Blog</a>
          <a href="#" className="text-[12px] tracking-wide uppercase text-ink/80 hover:text-ink">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-ink hover:text-olive">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-ink hover:text-olive">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
