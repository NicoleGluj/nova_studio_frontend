import { Link } from "react-router-dom"
import { Layout } from "../components/Layout"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const AboutUs = () => {
  const pageRoot = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reveal = (
        selector,
        { y = 18, duration = 0.7, start = "top 92%" } = {}
      ) => {
        gsap.utils.toArray(selector).forEach((el) => {
          gsap.set(el, { willChange: "transform, opacity" })

          gsap.fromTo(
            el,
            { y, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration,
              ease: "power3.out",
              immediateRender: false,
              clearProps: "willChange",
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions: "play none none reverse"
              }
            }
          )
        })
      }

      // ✅ header (load)
      gsap.fromTo(
        ".about-header",
        { y: 10, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          ease: "power3.out",
          immediateRender: false
        }
      )

      // ✅ hero (como home: suave, blur leve)
      gsap.fromTo(
        ".about-hero-title",
        { y: 40, autoAlpha: 0, filter: "blur(10px)" },
        {
          y: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "filter",
          scrollTrigger: {
            trigger: ".about-hero-title",
            start: "top 92%",
            toggleActions: "play none none reverse"
          }
        }
      )

      gsap.fromTo(
        ".about-hero-subtitle",
        { y: 28, autoAlpha: 0, filter: "blur(8px)" },
        {
          y: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "filter",
          scrollTrigger: {
            trigger: ".about-hero-subtitle",
            start: "top 92%",
            toggleActions: "play none none reverse"
          }
        }
      )

      gsap.fromTo(
        ".about-hero-card",
        { y: 22, autoAlpha: 0, filter: "blur(6px)" },
        {
          y: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "filter",
          scrollTrigger: {
            trigger: ".about-hero-card",
            start: "top 92%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // ✅ DIFERENCIA (sección corta → un solo timeline por sección)
      const diffTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-diff-section",
          start: "top 92%",
          toggleActions: "play none none reverse"
        }
      })

      diffTl.fromTo(
        ".about-diff-title",
        { y: 30, autoAlpha: 0, filter: "blur(8px)" },
        {
          y: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 0.75,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "filter"
        }
      )

      diffTl.fromTo(
        ".about-diff-item",
        { x: -40, autoAlpha: 0, filter: "blur(6px)" },
        {
          x: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          immediateRender: false,
          clearProps: "filter"
        },
        "-=0.35"
      )

      // ✅ CTA (sin scrub de títulos, solo reveal)
      reveal(".about-cta-title", { y: 26, duration: 2, start: "top 92%" })
      reveal(".about-cta-btn", { y: 16, duration: 2, start: "top 92%" })

      // ✅ refresca triggers (importante en rutas cortas / SPA)
      ScrollTrigger.refresh()
    }, pageRoot)

    return () => ctx.revert()
  }, [])



  return (
    <Layout>
      <div ref={pageRoot}>
        <section className="about-page bg-[#0B0B14] min-h-screen">
          <section className="pt-25 pb-10 px-10">
            <h2 className="about-header text-white py-5 px-5 text-2xl border-2 w-full rounded-3xl font-regular uppercase">Quienes somos</h2>
          </section>

          <section className="bg-[#0B0B14] px-10 gap-6 lg:gap-20  items-stretch flex flex-col lg:flex-row">
            <div className="text-white flex flex-col  gap-4 sm:gap-4 justify-center">
              <h2 className="about-hero-title text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight">
                Diseñamos experiencias digitales con propósito.
              </h2>
              <p className=" about-hero-subtitle text-justify text-sm sm:text-[18px] lg:text-lg 2xl:text-2xl leading-relaxed text-white/80 font-light">
                Somos un estudio creativo enfocado en diseño y desarrollo frontend, donde cada proyecto nace de una idea clara y se construye con atención al detalle.
              </p>
            </div>
            <div className="flex justify-center items-center gap-10 ">
              <p className="about-hero-card border border-white/70 rounded-4xl p-6 text-white font-light text-justify h-full lg:max-w-225 flex justify-center items-center lg:text-lg 2xl:text-xl">
                NOVA Studio nace con la idea de crear experiencias digitales que no solo se vean bien, sino que funcionen.Creemos que el diseño es una herramienta estratégica, y que la tecnología debe estar al servicio de las personas.
              </p>
            </div>
          </section>

          <section className="about-diff-section flex flex-col bg-[#0B0B14] px-10 border-b border-b-white text-white">
            <h2 className="about-diff-title text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-tight text-white mt-15 font-light italic">
              Que nos <span className="font-medium">diferencia</span>
            </h2>
            <p className="about-diff-item mt-5 border border-white/20 p-4 rounded-4xl text-white px-7 italic text-sm sm:text-[18px] lg:text-xl 2xl:text-2xl">
              Diseño centrado en el usuario
            </p>
            <p className="about-diff-item mt-5 border border-white/20 p-4 rounded-4xl text-white px-7 italic text-sm sm:text-[18px] lg:text-xl 2xl:text-2xl">
              Interfaces claras, modernas y funcionales
            </p>
            <p className="about-diff-item mt-5 border border-white/20 p-4 rounded-4xl text-white px-7 italic text-sm sm:text-[18px] lg:text-xl 2xl:text-2xl">
              Desarrollo frontend optimizado y escalable
            </p>
            <p className="about-diff-item mt-5 border border-white/20 p-4 rounded-4xl text-white px-7 italic text-sm sm:text-[18px] lg:text-xl 2xl:text-2xl mb-10">
              Comunicación simple y procesos transparentes
            </p>
          </section>

          <section className="about-cta-section flex flex-col items-center bg-[#0B0B14] px-10 text-white">
            <h2 className="about-cta-title text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-tight mt-20 text-center">
              Diseñamos para marcas que quieren crecer, diferenciarse y construir experiencias digitales memorables.
            </h2>
            <Link
              className="about-cta-btn py-2 px-8 rounded-3xl border-2 font-medium lg:text-xl mt-10 mb-20 text-center w-max"
              to={"/"}>Ver proyectos </Link>
          </section>
        </section >
      </div>
    </Layout>
  )
}