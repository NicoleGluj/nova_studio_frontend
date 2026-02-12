import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <section className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-center">
            <h2 className="text-xl font-medium">
              <span className="font-bold">NOVA</span> Studio
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 lg:gap-16">
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-base hover:text-gray-900">
                Home
              </Link>
              <Link to="/aboutUs" className="text-base hover:text-gray-900">
                About Us
              </Link>
              <Link to="/services" className="text-base hover:text-gray-900">
                Services
              </Link>
              <Link to="/contact" className="text-base hover:text-gray-900">
                Contact
              </Link>
            </nav>

            <div className="w-full">
              <p className="font-medium">Contact</p>

              <textarea
                placeholder="Dejanos tu mensaje..."
                className="mt-3 h-28 w-full resize-none rounded-2xl border border-gray-300 p-4 text-sm outline-none focus:border-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-8">
          <a href="" className="transition-transform duration-300 hover:scale-110">
            <span className="sr-only">Facebook</span>
            <FaFacebook size={26} color="#3b5998" />
          </a>

          <a href="" className="transition-transform duration-300 hover:scale-110">
            <span className="sr-only">Instagram</span>
            <FaInstagram size={26} color="#E1306C" />
          </a>

          <a href="" className="transition-transform duration-300 hover:scale-110">
            <span className="sr-only">WhatsApp</span>
            <FaWhatsapp size={26} color="#25D366" />
          </a>
        </div>

        <p className="mt-10 text-center text-sm sm:text-base font-light text-gray-700">
          2026 NovaStudio. Todos los derechos reservados.
        </p>
      </section>
    </footer>
  )
}
