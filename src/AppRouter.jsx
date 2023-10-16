import { Route, Routes } from "react-router-dom";
import { HomePage, CategoryPage } from "./pages";
import { Navbar } from "./components";
import { Name } from "./components/Name";

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </>
  );
};
