import { Header } from "../components/Header"
import bgHero from "../assets/bg-hero.jpg"
import equilibrioHome from "../assets/equilibrio-home.png"
import { Link } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { RotatingCarouselCards } from "../components/Carrousel"

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
      <section className="relative h-screen p-10 border-b border-white">
        <Header />
        <div className="absolute inset-0 -z-10">
          <img
            className=" h-full w-full object-cover object-[75%]"
            src={bgHero}
            alt="" />
        </div>
        <div className="relative z-10 h-full flex items-center  text-white max-w-150 lg:max-w-250">
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="font-light text-5xl md:text-6xl lg:text-7xl">
                Impulsamos marcas a traves del <span className="font-semibold">diseño</span> y la <span className="font-semibold">tecnologia</span></h1>
            </div>
            <div>
              <p className="font-light md:text-lg lg:text-2xl">
                Somos un estudio creativo especializado en diseño web, desarrollo frontend y experiencias digitales que conectan con las personas.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-3">
              <Link
                className="py-2 px-8 rounded-3xl border-2 font-medium "
                to={"/"}>Ver proyectos </Link>
              <Link
                className=" py-2 px-8 rounded-3xl border-2 font-medium "
                to={"/"}>Trabajemos juntos</Link>
            </div>
          </div>
        </div>
      </section >
      <section className="bg-[#0B0B14] min-h-screen px-10 py-20 grid sm:grid-cols-2 gap-10 items-stretch">
        <div className="text-white flex flex-col gap-4 justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
            Diseño estratégico con foco en el{" "}
            <span className="font-semibold">usuario</span>.
          </h2>
          <p className="text-justify text-sm md:text-lg leading-relaxed text-white/80">
            En NOVA Studio ayudamos a marcas y emprendedores a construir una presencia digital
            sólida, coherente y memorable. Combinamos diseño, tecnología y estrategia para crear
            sitios web funcionales, estéticos y alineados con los objetivos de cada proyecto.
            <br /><br />
            Creemos en procesos simples, comunicación clara y soluciones digitales que realmente aporten valor.
          </p>
        </div>
        <div className="flex items-stretch justify-center">
          <img
            className="w-full h-full object-contain"
            src={equilibrioHome}
            alt="Equilibrio"
          />
        </div>
      </section>

      <section>
        <RotatingCarouselCards />
      </section>

    </>
  )
}