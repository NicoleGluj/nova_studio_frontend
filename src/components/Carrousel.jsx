import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"

const services = [
  {
    title: "Branding Digital",
    text: "Construimos identidades visuales digitales que transmiten el propósito y la personalidad de cada marca.",
  },
  {
    title: "Diseño UX/UI",
    text: "Diseñamos interfaces intuitivas, atractivas y centradas en la experiencia del usuario, priorizando claridad, usabilidad y coherencia visual.",
  },
  {
    title: "Desarrollo Frontend",
    text: "Creamos sitios web modernos, rápidos y responsivos utilizando tecnologías actuales, cuidando cada detalle del diseño y la performance.",
  },
  {
    title: "Estrategia Digital",
    text: "Definimos dirección, mensajes y prioridades para que tu presencia digital sea coherente, medible y sostenible.",
  },
]

export const RotatingCarouselCards = () => {
  const viewportRef = useRef(null)
  const cardRef = useRef(null)

  const items = useMemo(() => [...services, ...services, ...services], [])
  const base = services.length

  const [index, setIndex] = useState(base)
  const [dims, setDims] = useState({ vw: 0, cw: 0, gap: 24, pl: 0 })
  const [anim, setAnim] = useState(true)

  useLayoutEffect(() => {
    const el = viewportRef.current
    const card = cardRef.current
    if (!el || !card) return

    const compute = () => {
      const rect = el.getBoundingClientRect()
      const vw = rect.width
      const cw = card.getBoundingClientRect().width

      const styles = window.getComputedStyle(el)
      const pl = parseFloat(styles.paddingLeft || "0") || 0

      // medir gap real (primeras 2 cards renderizadas)
      const cards = el.querySelectorAll("[data-card]")
      let gap = 24
      if (cards.length >= 2) {
        const r1 = cards[0].getBoundingClientRect()
        const r2 = cards[1].getBoundingClientRect()
        gap = Math.max(0, r2.left - r1.right)
      }

      setDims({ vw, cw, gap, pl })
    }

    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    ro.observe(card)

    window.addEventListener("resize", compute)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", compute)
    }
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setAnim(true)
      setIndex((i) => i + 1)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const min = base
    const max = base * 2 - 1

    if (index > max) {
      const t = setTimeout(() => {
        setAnim(false)
        setIndex(min)
      }, 520)
      return () => clearTimeout(t)
    }

    if (index < min) {
      const t = setTimeout(() => {
        setAnim(false)
        setIndex(max)
      }, 0)
      return () => clearTimeout(t)
    }
  }, [index, base])

  useEffect(() => {
    if (!anim) {
      const t = setTimeout(() => setAnim(true), 30)
      return () => clearTimeout(t)
    }
  }, [anim])

  const { vw, cw, gap, pl } = dims
  const step = cw + gap

  // ✅ CENTRADO PERFECTO: restamos padding-left porque el track arranca después del padding
  const translateX =
    vw && cw ? Math.round(-(index * step) + (vw / 2 - pl - cw / 2)) : 0

  return (
    <section className="bg-[#0B0B14] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          ref={viewportRef}
          className="relative w-screen left-1/2 -translate-x-1/2 overflow-x-hidden px-16 sm:px-24"
        >
          <div
            className={[
              "flex items-stretch",
              anim
                ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                : "transition-none",
            ].join(" ")}
            style={{
              transform: `translateX(${translateX}px)`,
              gap: "24px",
            }}
          >
            {items.map((card, i) => {
              const isCenter = i === index
              return (
                <article
                  key={`${card.title}-${i}`}
                  data-card
                  ref={i === 0 ? cardRef : null}
                  className={[
                    "shrink-0 rounded-xl p-6",
                    "w-[82vw] sm:w-[420px] lg:w-[320px] xl:w-[340px]",
                    "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isCenter
                      ? "border border-white/40 opacity-100"
                      : "border border-white/15 opacity-60",
                  ].join(" ")}
                >
                  <h3
                    className={[
                      "font-medium mb-3",
                      isCenter ? "text-white" : "text-white/70",
                    ].join(" ")}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={[
                      "text-sm leading-relaxed",
                      isCenter ? "text-white/80" : "text-white/50",
                    ].join(" ")}
                  >
                    {card.text}
                  </p>
                </article>
              )
            })}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0B0B14] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0B0B14] to-transparent" />
        </div>
      </div>
    </section>
  )
}
