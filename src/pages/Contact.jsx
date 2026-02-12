import { Layout } from "../components/Layout"

export const Contact = () => {
  return (
    <Layout>
      <section className="bg-[#0B0B14] min-h-screen">
        <div className="py-24 px-6 sm:px-10">
          <h2 className="text-white py-5 px-5 text-2xl border-2 w-full rounded-3xl font-regular uppercase">
            Contacto
          </h2>
        </div>

        <div className="px-6 sm:px-10 pb-24 grid gap-12 lg:grid-cols-2 items-start">
          <div className="text-white flex flex-col gap-6">
            <h3 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight">
              Hablemos de tu próximo proyecto.
            </h3>

            <p className="text-justify text-sm sm:text-[18px] lg:text-lg 2xl:text-2xl leading-relaxed text-white/80 font-light">
              Contanos qué necesitás y te respondemos a la brevedad. Podemos ayudarte con diseño UX/UI,
              desarrollo frontend y una estrategia clara para que tu marca crezca con una presencia digital sólida.
            </p>

            <div className="flex flex-col gap-3 text-white/80">
              <p className="border border-white/20 rounded-3xl px-6 py-4">
                <span className="text-white font-medium">Email:</span>{" "}
                <span className="font-light">hola@novastudio.com</span>
              </p>
              <p className="border border-white/20 rounded-3xl px-6 py-4">
                <span className="text-white font-medium">WhatsApp:</span>{" "}
                <span className="font-light">+54 11 0000-0000</span>
              </p>
              <p className="border border-white/20 rounded-3xl px-6 py-4">
                <span className="text-white font-medium">Ubicación:</span>{" "}
                <span className="font-light">Argentina (remoto)</span>
              </p>
            </div>
          </div>

          <div className="border border-white/20 rounded-4xl p-6 sm:p-10">
            <form className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-white/80 text-sm">Nombre</label>
                  <input
                    className="bg-transparent border border-white/20 rounded-3xl px-5 py-3 text-white outline-none focus:border-white/50 transition"
                    type="text"
                    placeholder="Tu nombre"
                    name="name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/80 text-sm">Email</label>
                  <input
                    className="bg-transparent border border-white/20 rounded-3xl px-5 py-3 text-white outline-none focus:border-white/50 transition"
                    type="email"
                    placeholder="tunombre@email.com"
                    name="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/80 text-sm">Asunto</label>
                <input
                  className="bg-transparent border border-white/20 rounded-3xl px-5 py-3 text-white outline-none focus:border-white/50 transition"
                  type="text"
                  placeholder="Quiero un sitio web / rediseño / landing…"
                  name="subject"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/80 text-sm">Tipo de proyecto</label>
                <select
                  name="type"
                  className="bg-[#0B0B14] border border-white/20 rounded-3xl px-5 py-3 text-white outline-none focus:border-white/50 transition"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Elegí una opción
                  </option>
                  <option value="uxui">Diseño UX/UI</option>
                  <option value="frontend">Desarrollo Frontend</option>
                  <option value="branding">Branding Digital</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/80 text-sm">Mensaje</label>
                <textarea
                  className="bg-transparent border border-white/20 rounded-4xl px-5 py-4 text-white outline-none focus:border-white/50 transition min-h-[160px] resize-none"
                  placeholder="Contanos un poco sobre tu idea, objetivos y tiempos..."
                  name="message"
                />
              </div>

              <button
                type="submit"
                className="mt-2 py-3 px-8 rounded-3xl border-2 border-white text-white font-medium lg:text-lg w-full sm:w-max hover:bg-white hover:text-[#0B0B14] transition"
              >
                Enviar mensaje
              </button>

              <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                Al enviar este formulario, aceptás que te contactemos para responder tu consulta.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}