import React from "react"
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Inicio from "./pages/inicio";
import Series from "./pages/series";
import Peliculas from "./pages/peliculas";
import Nav from "./components/nav";
import { useEffect } from "react";
import useStore from "./store/movies";
import { useGet } from "./hook/useGet";
import { Movie } from "./interface/Movie";
function App() {
  const { data, setData } = useStore();
  const { res } = useGet<Movie[]>("videoteca", data == null);
  useEffect(() => {
    if (res) {
      setData(res);
    }
  }, [res])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/series" element={<Series />} />
          <Route path="/peliculas" element={<Peliculas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
