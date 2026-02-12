import { Layout } from "../components/Layout"

export const Services = () => {
  return (
    <Layout>
      <section className="bg-[#0B0B14] min-h-screen">
        <section className="py-25 px-10 ">
          <h2 className="text-white py-5 px-5 text-2xl border-2 w-full rounded-3xl font-regular uppercase">Nuestros servicios</h2>
        </section>
        <section className="bg-[#0B0B14] px-10 gap-10  items-stretch text-white">
          <div className=" gap-4 flex flex-col border-l-2 border-l-white px-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold ">
                01 — UX / UI DESIGN
              </h2>
              <p className="mt-2 text-sm sm:text-lg">
                - Wireframes y prototipos <br />
                - Diseño visual de interfaces <br />
                - Sistemas de diseño <br />
                - Experiencia de usuario centrada en personas
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                02 — FRONTEND DEVELOPMENT
              </h2>
              <p className="mt-2 text-sm sm:text-lg">
                - Desarrollo web moderno<br />
                - Componentes reutilizables<br />
                - Animaciones e interacciones<br />
                - Optimización y performance
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold ">
                03 — BRANDING DIGITAL
              </h2>
              <p className="mt-2 text-sm sm:text-lg">
                - Identidad visual digital <br />
                - Dirección creativa <br />
                - Aplicación de marca en web <br />
                - Lenguaje visual y tono
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold ">
                04 — EXPERIENCIAS INTERACTIVAS
              </h2>
              <p className="mt-2 text-sm sm:text-lg">
                - Animaciones web <br />
                - Scroll interactivo <br />
                - Microinteracciones <br />
                - Experiencias inmersivas
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold ">
                05 — OPTIMIZACIÓN & EVOLUCIÓN
              </h2>
              <p className="mt-2 text-sm sm:text-lg">
                - Mejora de performance <br />
                - Ajustes UX/UI <br />
                - Optimización visual <br />
                - Evolución de productos digitales
              </p>
            </div>
          </div>
        </section>
        <div className="h-20 bg-[#0B0B14]"></div>
      </section >
    </Layout>
  )
}