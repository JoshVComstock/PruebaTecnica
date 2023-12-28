import React from 'react'
import { Movie } from '../interface/Movie'
interface cajaProps{
    info:Movie
}

const Caja = ({ info }:cajaProps) => {
    return (
        <div className=' max-w-full flex flex-row flex-wrap'>
            <img src={info.images['Poster Art'].url} alt={info.title} className='w-[200px] rounded-[10px]' />
            <div className='p-[10px] w-[400px] max-w-full '>
                <h1 className='text-[50px] font-bold text-white'>{info.title}</h1>
                <p className='text-gray-300 text-[20px]'>{info.title}</p>
                <p className='text-gray-400 text-sm'>Año emision : {info.releaseYear}</p>
                <p className='text-white'>{info.description}</p>
                <p className='text-gray-400'>Clase : {info.programType}</p>
                <div className='w-full flex justify-end'>
                    <button className='bg-gray-200 w-[110px] p-2 rounded-[7px] text-gray-600 hover:opacity-80'>Ver pelicula</button>
                </div>
            </div>
        </div>
    )
}
export default Caja