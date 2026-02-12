import bgHero from "../assets/bg-hero.jpg"
import flechaHome from "../assets/flecha-home.png"
import equilibrioHome from "../assets/equilibrio-home.png"
import metricasHome from "../assets/metricas-home.png"
import { Link } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { RotatingCarouselCards } from "../components/Carrousel"
import { Layout } from "../components/Layout"

export const Home = () => {
  const services = [
    {
      title: "Branding Digital",
      text: "Construimos identidades visuales digitales que transmiten propósito y la personalidad de cada marca.",
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
      text: "Acompañamos cada proyecto con una estrategia digital clara, alineada a objetivos reales y crecimiento sostenible.",
    },
  ]

  const [center, setCenter] = useState(1)

  const ordered = useMemo(() => {
    const arr = [...services]
    const shift = (center - 1 + arr.length) % arr.length
    return arr.slice(shift).concat(arr.slice(0, shift))
  }, [center])

  useEffect(() => {
    const id = setInterval(() => {
      setCenter((c) => (c + 1) % services.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <Layout>
        <section className="relative h-screen p-10 border-b border-white">
          <div className="absolute inset-0 -z-10">
            <img
              className=" h-full w-full object-cover object-[75%]"
              src={bgHero}
              alt="" />
          </div>
          <div className="relative z-10 h-full flex items-center  text-white max-w-150 lg:max-w-250">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="font-light text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
                  Impulsamos marcas a traves del <span className="font-semibold">diseño</span> y la <span className="font-semibold">tecnologia</span></h1>
              </div>
              <div>
                <p className="font-light md:text-lg lg:text-2xl 2xl:text-3xl">
                  Somos un estudio creativo especializado en diseño web, desarrollo frontend y experiencias digitales que conectan con las personas.</p>
              </div>
              <div className="flex flex-col md:flex-row gap-5 mt-3">
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
        <section className="bg-[#0B0B14] py-20 px-10 grid lg:grid-cols-2 gap-10  items-stretch">
          <div className="text-white flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-10 justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight">
              Diseño estratégico con foco en el
              <span className="font-semibold"> usuario</span>.
            </h2>
            <p className="text-justify text-sm sm:text-[18px] lg:text-lg 2xl:text-2xl leading-relaxed text-white/80 font-light">
              En NOVA Studio ayudamos a marcas y emprendedores a construir una presencia digital
              sólida, coherente y memorable. Combinamos diseño, tecnología y estrategia para crear
              sitios web funcionales, estéticos y alineados con los objetivos de cada proyecto.
              <br /><br />
              Creemos en procesos simples, comunicación clara y soluciones digitales que realmente aporten valor.
            </p>
          </div>
          <div className="flex items-stretch justify-center">
            <img
              className="sm:hidden lg:block w-full h-full object-contain -translate-x-2"
              src={equilibrioHome}
              alt="Equilibrio"
            />
          </div>
        </section>
        <section >
          <RotatingCarouselCards />
        </section>
        <section className="bg-[#0B0B14] py-10 sm:py-20  px-10 grid sm:grid-cols-2 gap-10 items-stretch">
          <div className="flex items-stretch justify-center lg:mb-20">
            <img
              className="hidden sm:block  object-contain "
              src={flechaHome}
              alt="Equilibrio"
            />
          </div>
          <div className="text-white flex flex-col gap-4 justify-center">
            <div className="border-b">
              <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-light mb-5 uppercase">
                Nuestros pasos
              </h2>
              <h2 className="text-lg lg:text-3xl font-medium mb-1">
                01 - Analisis
              </h2>
              <p className="font-light mb-4 text-sm lg:text-xl">
                Entendemos tu marca, tus objetivos y tus usuarios para definir una estrategia clara.
              </p>
            </div>
            <div className="border-b">
              <h2 className="text-lg lg:text-3xl font-medium mb-1">
                02 - Diseño
              </h2>
              <p className="font-light mb-4 text-sm lg:text-xl">
                Creamos una propuesta visual alineada a tu identidad y enfocada en la experiencia.            </p>
            </div>
            <div className="border-b">
              <h2 className="text-lg lg:text-3xl font-medium mb-1">
                03 - Desarrollo
              </h2>
              <p className="font-light mb-4 text-sm lg:text-xl">
                Transformamos el diseño en un producto digital funcional, moderno y optimizado.            </p>
            </div>
            <div className="border-b">
              <h2 className="text-lg lg:text-3xl font-medium mb-1">
                04 - Entrega
              </h2>
              <p className="font-light mb-4 text-sm lg:text-xl">
                Ajustamos los últimos detalles y dejamos todo listo para salir al mundo.            </p>
            </div>
          </div>
        </section>
        <section className="bg-[#0B0B14] py-10 2xl:py-1 px-10 grid sm:grid-cols-2 gap-15 items-stretch">
          <div className="text-white flex flex-col gap-4 justify-center">
            <h2 className="text-4xl md:text-4xl lg:text-6xl leading-tight">
              El buen diseño no solo se ve bien.<br />Funciona, comunica y genera         <span className="font-semibold">resultados</span>.
            </h2>
            <Link
              className="py-2 px-5 rounded-3xl border font-medium text-xl mt-4"
              to={"/"}>Contactanos </Link>
          </div>
          <div className="flex items-stretch justify-center">
            <img
              className="w-full h-full object-contain "
              src={metricasHome}
              alt="Equilibrio"
            />
          </div>
        </section >
      </Layout>
    </>
  )
}