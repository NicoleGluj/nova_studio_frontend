import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

