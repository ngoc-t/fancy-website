type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="text-center mb-12 sm:mb-14">
      {eyebrow && (
        <div className="script-font text-[18px] text-ink/45">{eyebrow}</div>
      )}
      <h2 className="mt-1 font-serif text-ink text-[34px] sm:text-[44px] leading-tight">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-[2px] w-14 bg-ink/20"></div>
      {subtitle && (
        <>
          <p className="mt-5 text-[16px] text-ink/60 max-w-3xl mx-auto">
            {subtitle}
          </p>
          {/* short line below subheading */}
          <div className="mx-auto mt-3 h-[2px] w-12 bg-ink/10"></div>
        </>
      )}
    </div>
  )
}


