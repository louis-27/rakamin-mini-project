import { Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, ProductPage } from "./pages";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Routes>

      <Footer />
    </>
  );
}
