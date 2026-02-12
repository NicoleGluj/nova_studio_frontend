import { Link } from "react-router-dom"
import icon from "../assets/icon-header.png"
import { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export const Header = () => {

  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // CERRAR CON ESC
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // BLOQUEAR SCROLL CON MENU ABIERTO
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // TECLADO CON FOCO EN EL MENU
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);


  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 py-3 px-6 flex items-center justify-between">
        <div className="flex items-center ">
          <img
            className="size-14"
            src={icon}
            alt="logo nova studio" />
          <h2 className="text-white font-medium">
            <span className="font-bold">NOVA</span> Studio
          </h2>
        </div>

        <div>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex rounded-lg md:hidden text-white"
          >
            <Bars3Icon className="h-7 w-7" />
          </button>
        </div>

        <nav className="hidden  items-center gap-10 text-white font-medium md:flex">
          <Link to={"/"}>[ Home ]</Link>
          <Link to={"/aboutUs"}>[ About Us ]</Link>
          <Link to={"/services"}>[ Services ]</Link>
          <Link to={"/contact"}>[ Contact ]</Link>
        </nav>

        <div
          className={[
            "fixed inset-0 z-50 md:hidden",
            open ? "pointer-events-auto" : "pointer-events-none",
          ].join(" ")}
          aria-hidden={!open}
        >
          {/* OVERLAY / FILTRO OSCURO POR DETRAS */}
          <div
            onClick={() => setOpen(false)}
            className={[
              "absolute inset-0 bg-black/40 transition-opacity",
              open ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />

          {/* MENU LATERAL */}
          <aside
            id="mobile-menu"
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            className={[
              "absolute right-0 top-0 h-screen w-[85%] max-w-sm bg-white shadow-xl outline-none",
              "transition-transform duration-200 ease-out p-4",
              open ? "translate-x-0" : "translate-x-full",
            ].join(" ")}
          >
            <div className="flex items-center justify-between border-b border-gray-400 px-4 py-3">
              <span className="text-sm font-semibold">
                MENÚ
              </span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2"
              >
                <XMarkIcon className="h-7 w-7" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-4 border-b border-gray-400">
              <Link to={"/"}> Home </Link>
              <Link to={"/aboutUs"}> About Us </Link>
              <Link to={"/services"}> Services </Link>
              <Link to={"/contact"}> Contact </Link>
            </nav>
          </aside>
        </div>
      </header >
    </>
  )
}