import Loading from "../components/loading";
import useStore from "../store/movies";
import MovieList from "../components/movieList";
import Paginacion from "../components/paginacion";
import { useState } from "react";

interface busquedaProps {
    filtro: string
}
const Busqueda = ({ filtro }: busquedaProps) => {
    const { data } = useStore();
   
    return (
        <div className='w-full min-h-full  p-10 '>
            {
                !data ? (
                    <Loading />
                ) :
                    (
                        <>
                            <MovieList list={data.filter(item => {
                                const lowerCaseTitle = item.title.toLocaleLowerCase();
                                const includesTitle = lowerCaseTitle.includes(filtro.toLocaleLowerCase());
                                const datosFiltrados =
                                    item.releaseYear >= parseInt(filtro)
                                return includesTitle || datosFiltrados
                            })} title={"Busqueda"} />
                        </>
                    )
            }
        </div>
    )
}
export default Busqueda