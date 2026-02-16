import bgHero from "../assets/bg-hero.jpg"
import { Link } from "react-router-dom"
import { RotatingCarouselCards } from "../components/Carrousel"
import { Layout } from "../components/Layout"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const Home = () => {

  const pageRoot = useRef(null)
  const heroRoot = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out" }
      })

      heroTl
        .from(".hero-title", {
          y: 120,
          opacity: 0,
          filter: "blur(10px)",
          duration: 1.2
        })
        .from(
          ".hero-subtitle",
          {
            y: 60,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.9
          },
          "-=0.7"
        )
        .from(
          ".hero-buttons a",
          {
            y: 20,
            opacity: 0,
            stagger: 0.12,
            duration: 0.6
          },
          "-=0.4"
        )

      gsap.to(".hero-content", {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      })

      gsap.to(".hero-bg", {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      })

      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        })
      })

      gsap.utils.toArray(".step-row").forEach((row) => {
        const num = row.querySelector(".step-num")
        const title = row.querySelector(".step-title")
        const text = row.querySelector(".step-text")
        const line = row.querySelector(".step-line")

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        })

        tl.from([num, title], {
          x: -40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08
        }).from(
          text,
          {
            y: 20,
            opacity: 0,
            filter: "blur(6px)",
            duration: 0.7
          },
          "-=0.4"
        )

        if (line) {
          tl.from(
            line,
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.6,
              ease: "power3.out"
            },
            "-=0.6"
          )
        }
      })

      gsap.from(".cta-title", {
        y: 40,
        opacity: 0,
        filter: "blur(8px)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

      gsap.from(".cta-btn", {
        opacity: 0,
        y: 20,
        scale: 0.98,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })

      gsap.to(".cta-title", {
        y: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    }, pageRoot)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRoot}>
      <Layout>
        <section className="hero-section relative h-screen p-10 border-b border-white">
          <div className="hero-bg absolute inset-0 -z-10">
            <img
              className=" h-full w-full object-cover object-[75%]"
              src={bgHero}
              alt="" />
          </div>
          <div
            ref={heroRoot}
            className="hero-content relative z-10 h-full flex items-center  text-white max-w-150 lg:max-w-250">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="hero-title font-light text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
                  Impulsamos marcas a traves del <span className="font-semibold">diseño</span> y la <span className="font-semibold">tecnologia</span></h1>
              </div>
              <div>
                <p className="hero-subtitle font-light md:text-lg lg:text-2xl 2xl:text-3xl">
                  Somos un estudio creativo especializado en diseño web, desarrollo frontend y experiencias digitales que conectan con las personas.</p>
              </div>
              <div className="hero-buttons flex flex-col md:flex-row gap-5 mt-3">
                <Link
                  className="py-2 px-8 rounded-3xl border-2 font-medium 2xl:text-xl"
                  to={"/services"}>Nuestros servicios </Link>
                <Link
                  className=" py-2 px-8 rounded-3xl border-2 font-medium 2xl:text-xl"
                  to={"/"}>Trabajemos juntos</Link>
              </div>
            </div>
          </div>
        </section >

        <section className="bg-[#0B0B14] pt-20 pb-10 sm:pb-15 px-10">
          <div className="text-white flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center items-center">
            <div className="lg:min-w-[45%] 2xl:min-w-[40%]">
              <h2 className="reveal-up text-[45px] md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight">
                Diseño estratégico con foco en el
                <span className="font-semibold"> usuario</span>.
              </h2>
            </div>
            <div>
              <p className="reveal-up text-justify text-sm sm:text-[18px] lg:text-lg 2xl:text-2xl leading-relaxed text-white/80 font-light">
                En NOVA Studio ayudamos a marcas y emprendedores a construir una presencia digital
                sólida, coherente y memorable. Combinamos diseño, tecnología y estrategia para crear
                sitios web funcionales, estéticos y alineados con los objetivos de cada proyecto.
                <br /><br />
                Creemos en procesos simples, comunicación clara y soluciones digitales que realmente aporten valor.
              </p>
            </div>
          </div>
        </section>

        <section>
          <RotatingCarouselCards />
        </section>

        <section className="bg-[#0B0B14] pt-30 pb-20 px-10 ">
          <div className="text-white">
            <div >
              <h2 className="reveal-up text-3xl lg:text-4xl 2xl:text-5xl font-light mb-10 uppercase">
                Nuestros pasos
              </h2>
            </div>
            <div className="step-row flex flex-col lg:items-center sm:flex-row text-white gap-2 sm:gap-10 border-b border-white/40 pb-7">
              <div className="flex gap-10 items-center min-w-[30%] lg:min-w-[20%]">
                <h2 className="step-num text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
                  01
                </h2>
                <h3 className="step-title text-xl lg:text-2xl 2xl:text-3xl uppercase">
                  Analisis
                </h3>
              </div>
              <p className="step-text text-justify text-sm lg:text-2xl 2xl:text-3xl leading-relaxed text-white/80 font-light sm:pl-10">
                Entendemos tu marca, tus objetivos y tus usuarios para definir una estrategia clara.
              </p>
            </div>
            <div className="step-row flex flex-col lg:items-center sm:flex-row  text-white gap-2 sm:gap-10 border-b border-white/40 pb-7 pt-7">
              <div className="flex gap-10 items-center min-w-[30%] lg:min-w-[20%]">
                <h2 className="step-num text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
                  02
                </h2>
                <h3 className="step-title text-xl lg:text-2xl 2xl:text-3xl uppercase">
                  Diseño
                </h3>
              </div>
              <p className="step-text text-justify text-sm lg:text-2xl 2xl:text-3xl leading-relaxed text-white/80 font-light sm:pl-10">
                Creamos una propuesta visual alineada a tu identidad y enfocada en la experiencia.
              </p>
            </div>
            <div className="step-row flex flex-col lg:items-center sm:flex-row  text-white gap-2 sm:gap-10 border-b border-white/40 pb-7 pt-7">
              <div className="flex gap-10 items-center min-w-[30%]  lg:min-w-[20%]">
                <h2 className="step-num text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
                  03
                </h2>
                <h3 className="step-title text-xl lg:text-2xl 2xl:text-3xl uppercase">
                  Desarrollo
                </h3>
              </div>
              <p className="step-text text-justify text-sm lg:text-2xl 2xl:text-3xl leading-relaxed text-white/80 font-light sm:pl-10">
                Transformamos el diseño en un producto digital funcional, moderno y optimizado.
              </p>
            </div>
            <div className="step-row flex flex-col lg:items-center sm:flex-row  text-white gap-2 sm:gap-10 border-b border-white/40 pb-7 pt-7">
              <div className="flex gap-10 items-center min-w-[30%] lg:min-w-[20%]">
                <h2 className="step-num text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
                  04
                </h2>
                <h3 className="step-title text-xl lg:text-2xl 2xl:text-3xl uppercase">
                  Entrega
                </h3>
              </div>
              <p className="step-text text-justify text-sm lg:text-2xl 2xl:text-3xl leading-relaxed text-white/80 font-light sm:pl-10">
                Ajustamos los últimos detalles y dejamos todo listo para salir al mundo.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section bg-[#0B0B14] pb-30 pt-10 px-10 items-stretch">
          <div className="text-white flex flex-col gap-10 justify-center">
            <h2 className="cta-title text-4xl md:text-4xl lg:text-6xl leading-tight">
              El buen diseño no solo se ve bien.<br />Funciona, comunica y genera         <span className="font-semibold">resultados</span>.
            </h2>
            <Link
              className="cta-btn py-2 px-5 rounded-3xl border border-white/80 font-medium text-xl lg:text-2xl 2xl:text-3xl mt-4"
              to={"/"}>Contactanos </Link>
          </div>
        </section >
      </Layout >
    </div>
  )
}