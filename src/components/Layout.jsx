import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";

export const Layout = (props) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

