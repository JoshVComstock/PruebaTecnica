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
  const { res, estado, getData } = useGet<Movie[]>("videoteca", data == null);
  useEffect(() => {
    if (res) {
      setData(res);
    }
  }, [res])
  return (
    <BrowserRouter>
      {
        estado === "error" ? <div className="w-full h-full bg-transparent absolute flex justify-center items-center z-10 flex-col gap-9">
          <p className="text-gray-500">Error al obtener los datos</p>
          <button className='bg-gray-200 w-[150px] p-2 rounded-[7px] text-gray-600 hover:opacity-80' onClick={getData}>Volver a cargar</button>
        </div> : null
      }
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
