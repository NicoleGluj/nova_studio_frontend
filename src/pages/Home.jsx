import { Header } from "../components/Header"
import bgHero from "../assets/bg-hero.jpg"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
      <section className="relative h-screen p-10">
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
    </>
  )
}