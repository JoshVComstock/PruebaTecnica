import React from 'react'
import { Movie } from '../interface/Movie'
import CardMovie from '../pages/cardMovie'
interface ListProps {
    list: Movie[],
    title: string
}
const MovieList = ({ list, title }: ListProps) => {
    return (
        <>
            <div className="h-[10%] flex justify-start items-center m-5">
                <h1 className="h-full text-white font-bold text-[35px] ">{title}</h1>
            </div>
            <div className="w-full h-[90%] grid grid-cols-[repeat(auto-fill,192px)] gap-y-11 gap-x-11 ">
                {
                    list?.sort((a, b) => {
                        if (a.title < b.title) return -1;
                        if (a.title > b.title) return 1;
                        return 0
                    }).map((v, i) => (
                        <CardMovie data={v} key={i} i={i} />
                    ))
                }
            </div>
        </>

    )
}

export default MovieList