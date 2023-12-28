import { Link, Outlet } from 'react-router-dom';
import Logo from "../assets/logo-gray.png";
import "../styles/nav.css";
import buscar from "../assets/icons/lupa.svg";
import Footer from './footer';
import { useState } from 'react';
import MovieList from './movieList';
import useStore from '../store/movies';
import Busqueda from '../pages/busqueda';
import Paginacion from './paginacion';

const Nav = () => {
  const [filtro, setFiltro] = useState("");
  const { data } = useStore();
  const listFil = data?.filter(item => (
    item.title == "filtro"
  ))
  const linkStyle = "hover:text-white";
  return (
    <div className='w-full h-full relative'>
      <header className='w-full h-20 bg-gray-900 flex justify-evenly items-center' >
        <img src={Logo} alt="logo de la pagina" id="logo" className='cursor-pointer' />
        <nav className='md:w-2/5 text-gray-400 flex md:justify-between md:static absolute top-20 bg-gray-900 w-full md:p-0 px-10 gap-4'>
          <Link to={"/"} className={linkStyle}>
            Inicio
          </Link>
          <Link to={"series"} className={linkStyle}>
            Series
          </Link>
          <Link to={"peliculas"} className={linkStyle}>
            Peliculas
          </Link>
        </nav>
        <div className='w-2/7 flex justify-around' >
          <input type="text" className=' border-white border-b-2 outline-none text-gray-500 rounded-[6px] p-1 m-2 text-black' placeholder='Buscar' value={filtro} onChange={(e) => setFiltro(e.target.value)} />
          <button><img src={buscar} alt="icono buscar" /></button>
        </div>
      </header>
      <section className='min-h-[calc(150dvh_-_5rem)] bg-gray-800'>
       
        {
          filtro ? <Busqueda filtro={filtro} /> : <Outlet />
        }
      </section>
      <Footer />
    </div>
  )
}

export default Nav