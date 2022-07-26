import { Route, Routes } from "react-router-dom";
import { Home, About } from "./pages";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}
