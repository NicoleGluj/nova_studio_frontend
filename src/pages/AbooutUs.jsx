
import { Link } from "react-router-dom"
import { Layout } from "../components/Layout"

export const AboutUs = () => {
  return (
    <Layout>
      <section className="bg-[#0B0B14] min-h-screen">
        <section className="pt-25 pb-10 px-10">
          <h2 className="text-white py-5 px-5 text-2xl border-2 w-full rounded-3xl font-regular uppercase">Quienes somos</h2>
        </section>
        <section className="bg-[#0B0B14] py- px-10  gap-10  items-stretch">
          <div className="text-white flex flex-col gap-4 sm:gap-10 justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight">
              Diseñamos experiencias digitales con propósito.
            </h2>
            <p className="text-justify text-sm sm:text-[18px] lg:text-lg 2xl:text-2xl leading-relaxed text-white/80 font-light">
              Somos un estudio creativo enfocado en diseño y desarrollo frontend, donde cada proyecto nace de una idea clara y se construye con atención al detalle.
            </p>
          </div>
        </section>
        <section className="mt-15">
          <div className="flex justify-center items-center gap-10">
            <div className="w-20 h-px bg-white"> </div>
            <p className="text-white font-medium text-justify max-w-[250px] sm:max-w-[400px] lg:max-w-[750px]">
              NOVA Studio nace con la idea de crear experiencias digitales que no solo se vean bien, sino que funcionen.Creemos que el diseño es una herramienta estratégica, y que la tecnología debe estar al servicio de las personas.
            </p>
            <div className="w-20 h-px bg-white"> </div>
          </div>
        </section>
        <section className="flex flex-col bg-[#0B0B14] px-10 border-b  border-b-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-tight text-white mt-15 font-light italic">
            Que nos <span className="font-medium">diferencia</span>
          </h2>
          <p className="mt-5 border border-white p-4 rounded-4xl text-white px-7 italic text-sm sm:text-[18px] lg:text-xl 2xl:text-2xl">
            Diseño centrado en el usuario
          </p>
          <p className="mt-5 border border-white p-4 rounded-4xl text-white px-7 italic text-sm sm:text-[18px] lg:text-xl 2xl:text-2xl">
            Interfaces claras, modernas y funcionales
          </p>
          <p className="mt-5 border border-white p-4 rounded-4xl text-white px-7 italic text-sm sm:text-[18px] lg:text-xl 2xl:text-2xl">
            Desarrollo frontend optimizado y escalable
          </p>
          <p className="mt-5 border border-white p-4 rounded-4xl text-white px-7 italic text-sm sm:text-[18px] lg:text-xl 2xl:text-2xl mb-10">
            Comunicación simple y procesos transparentes
          </p>
        </section>
        <section className="flex flex-col items-center bg-[#0B0B14] px-10 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-tight mt-20 text-center">
            Diseñamos para marcas que quieren crecer, diferenciarse y construir experiencias digitales memorables.
          </h2>
          <Link
            className="py-2 px-8 rounded-3xl border-2 font-medium lg:text-xl mt-10 mb-20 text-center w-max"
            to={"/"}>Ver proyectos </Link>
        </section>
      </section >
    </Layout>
  )
}