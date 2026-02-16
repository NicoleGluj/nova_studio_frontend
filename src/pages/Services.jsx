import { Layout } from "../components/Layout"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const Services = () => {
  const pageRoot = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ Header (load)
      gsap.fromTo(
        ".services-header",
        { y: 10, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          ease: "power3.out",
          immediateRender: false
        }
      )

      // ✅ Intro (title + paragraph)
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".services-intro",
          start: "top 92%",
          toggleActions: "play none none reverse"
        }
      })

      introTl
        .fromTo(
          ".services-title",
          { y: 40, autoAlpha: 0, filter: "blur(10px)" },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            immediateRender: false,
            clearProps: "filter"
          }
        )
        .fromTo(
          ".services-subtitle",
          { y: 26, autoAlpha: 0, filter: "blur(8px)" },
          {
            y: 0,
            autoAlpha: 2,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            immediateRender: false,
            clearProps: "filter"
          },
          "-=1"
        )

      // ✅ Cards (1 timeline por sección → ideal páginas cortas)
      const cardsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".services-cards",
          start: "top 92%",
          toggleActions: "play none none reverse"
        }
      })

      // Entradas de todas las cards con stagger
      cardsTl.fromTo(
        ".service-card",
        { x: -50, autoAlpha: 0, filter: "blur(6px)" },
        {
          x: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.12,
          immediateRender: false,
          clearProps: "filter"
        }
      )

      // ✅ Micro detalle: números con “pop” suave (opcional, queda pro)
      cardsTl.fromTo(
        ".service-num",
        { scale: 0.98, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 0.35,
          ease: "power2.out",
          stagger: 0.12,
          immediateRender: false
        },
        0.05
      )

      // refresh SPA
      ScrollTrigger.refresh()
    }, pageRoot)

    return () => ctx.revert()
  }, [])


  return (
    <Layout>
      <div ref={pageRoot}>
        <section className="services-page bg-[#0B0B14] min-h-screen">
          <section className="pt-25 pb-10 px-10 ">
            <h2 className="services-header text-white py-5 px-5 text-2xl border-2 w-full rounded-3xl font-regular uppercase">
              Nuestros servicios
            </h2>
          </section>

          <section className="px-10 pb-24 items-start lg:-mb-30">
            <div className="services-cards pb-24 items-start gap-5 lg:gap-7 grid lg:grid-cols-2">
              <div className="services-intro text-white flex flex-col gap-6">
                <h3 className="services-title text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight">
                  Llevamos tu marca al siguiente nivel
                </h3>
                <p className="services-subtitle text-justify text-sm sm:text-[18px] lg:text-lg 2xl:text-2xl leading-relaxed text-white/80 font-light">
                  Combinamos diseño, tecnología y estrategia para crear experiencias digitales memorables. Este es el proceso que nos permite transformar ideas en proyectos con impacto.
                </p>
              </div>

              <div className="service-card border border-white/20 rounded-4xl p-6 sm:p-6 flex flex-col sm:flex-row text-white gap-2 sm:gap-10 h-full">
                <div className="flex gap-10 items-center sm:min-w-72.5">
                  <h2 className="service-num text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
                    01
                  </h2>
                  <h3 className="text-xl lg:text-xl 2xl:text-2xl ">
                    UX / UI DESIGN
                  </h3>
                </div>
                <p className="mt-2 text-justify text-sm lg:text-[15px] 2xl:text-lg leading-relaxed text-white/80 font-light sm:border-l-2 sm:pl-10 flex flex-col items-center justify-center">
                  Wireframes y prototipos <br />
                  Diseño visual de interfaces <br />
                  Sistemas de diseño <br />
                  Experiencia de usuario centrada en personas
                </p>
              </div>

              <div className="service-card border border-white/20 rounded-4xl p-6 sm:p-6 flex flex-col sm:flex-row text-white gap-2 sm:gap-10 ">
                <div className="flex gap-10 items-center max-w-72.5">
                  <h2 className="service-num text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
                    02
                  </h2>
                  <h3 className="text-xl lg:text-xl 2xl:text-2xl ">
                    FRONTEND DEVELOPMENT
                  </h3>
                </div>
                <p className="mt-2 text-justify text-sm lg:text-[15px] 2xl:text-lg leading-relaxed text-white/80 font-light sm:border-l-2 sm:pl-10">
                  Desarrollo web moderno<br />
                  Componentes reutilizables<br />
                  Animaciones e interacciones<br />
                  Optimización y performance
                </p>
              </div>

              <div className="service-card border border-white/20 rounded-4xl p-6 sm:p-6 flex flex-col sm:flex-row text-white gap-2 sm:gap-10">
                <div className="flex gap-10 items-center max-w-72.5">
                  <h2 className="service-num text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
                    03
                  </h2>
                  <h3 className="text-xl lg:text-xl 2xl:text-2xl">
                    BRANDING DIGITAL
                  </h3>
                </div>
                <p className="mt-2 text-justify text-sm lg:text-[15px] 2xl:text-lg leading-relaxed text-white/80 font-light sm:border-l-2 sm:pl-10">
                  Identidad visual digital <br />
                  Dirección creativa <br />
                  Aplicación de marca en web <br />
                  Lenguaje visual y tono
                </p>
              </div>

              <div className="service-card border border-white/20 rounded-4xl p-6 sm:p-6 flex flex-col sm:flex-row text-white gap-2 sm:gap-10">
                <div className="flex gap-10 items-center max-w-72.5">
                  <h2 className="service-num text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
                    04
                  </h2>
                  <h3 className="text-xl lg:text-xl 2xl:text-2xl">
                    EXPERIENCIAS INTERACTIVAS
                  </h3>
                </div>
                <p className="mt-2 text-justify text-sm lg:text-[15px] 2xl:text-lg leading-relaxed text-white/80 font-light sm:border-l-2 sm:pl-10">
                  Animaciones web <br />
                  Scroll interactivo <br />
                  Microinteracciones <br />
                  Experiencias inmersivas
                </p>
              </div>

              <div className="service-card border border-white/20 rounded-4xl p-6 sm:p-6 flex flex-col sm:flex-row text-white gap-2 sm:gap-10 -mb-30">
                <div className="flex gap-10 items-center max-w-72.5">
                  <h2 className="service-num text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
                    05
                  </h2>
                  <h3 className="text-xl lg:text-xl 2xl:text-2xl">
                    OPTIMIZACIÓN & EVOLUCIÓN
                  </h3>
                </div>
                <p className="mt-2 text-justify text-sm lg:text-[15px] 2xl:text-lg leading-relaxed text-white/80 font-light sm:border-l-2 sm:pl-10">
                  Mejora de performance <br />
                  Ajustes UX/UI <br />
                  Optimización visual <br />
                  Evolución de productos digitales
                </p>
              </div>
            </div>
          </section>
        </section >
      </div>
    </Layout>
  )
}