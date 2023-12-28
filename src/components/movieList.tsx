import React from 'react'
import { Movie } from '../interface/Movie'
import CardMovie from '../pages/cardMovie'
import { useSearchParams } from 'react-router-dom'
import Paginacion from './paginacion'
interface ListProps {
    list: Movie[],
    title: string
}
const MovieList = ({ list, title }: ListProps) => {
    const [busqueda] = useSearchParams({
        cantidad: "5",
        pagina: "1"
    });
    const cantidad = busqueda.get("cantidad") || "5";
    const pagina = busqueda.get("pagina") || "1";
    const limiteDatos = list?.slice((Number(pagina) - 1) * Number(cantidad), (Number(pagina) - 1) * Number(cantidad)+Number(cantidad));
    return (
        <>
            <Paginacion total={list.length} />
            <div className="h-[10%] flex justify-start items-center m-5">
                <h1 className="h-full text-white font-bold text-[35px] ">{title}</h1>
            </div>
            <div className="w-full h-[90%] grid grid-cols-[repeat(auto-fill,192px)] gap-y-11 gap-x-11 ">
                {
                    limiteDatos?.sort((a, b) => {
                        if (a.title < b.title) return -1;
                        if (a.title > b.title) return 1;
                        return 0
                    }).map((v, i) => (
                        <CardMovie data={v} key={v.title} i={i} />
                    ))
                }
            </div>
        </>
    )
}

export default MovieList