import { Movie } from "../interface/Movie";
import Modal from "../components/modal";
import { useState } from "react";
import Caja from "../components/caja";
interface MovieProps {
    data: Movie,
    i: number
}

const CardMovie = ({ data, i }: MovieProps) => {
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }
    return (
        <>
            <Modal open={open} close={closeModal}>
                <Caja info={data}/>
            </Modal>
            <div key={i} className="w-48 cursor-pointer m-5" onClick={openModal}>
                <img src={data.images["Poster Art"].url} alt={data.title} className="w-full rounded-[10px] hover:border-2 border-white peer transition-all duration-400 hover:opacity-80" />
                <h2 className="text-gray-400 peer-hover:text-white m-2 text-[18px]">{data.title}</h2>
            </div>
        </>
    )
}

export default CardMovie