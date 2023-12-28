import Face from "../assets/social/facebook-white.svg";
import IG from "../assets/social/instagram-white.svg";
import Tw from "../assets/social/twitter-white.svg";
import Logo from "../assets/logo-gray.png";
import Ubicacion from "../assets/icons/ubicacion.svg";
import Gmail from "../assets/icons/gmail.svg";
import Phone from "../assets/icons/phone.svg";
import Enviar from "../assets/icons/enviar.svg";
import "../styles/nav.css";
import { useState } from "react";
const Footer = () => {
  const [gmail, setGmail] = useState("");
  const handleEnviar = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(gmail)) {
      alert('Correo electrónico no válido');
    }
    else{
      alert("Correo enviado");
    }
  }
  return (
    <footer className="w-full min-h-[350px] bg-gray-900 flex flex-col p-5" >
      <div className="w-[100%] h-full flex flex-row items-center flex-wrap justify-between gap-y-8">
        <div className="max-w-full w-[380px] h-full flex items-start flex-col justify-around text-gray-300 gap-10"><img src={Logo} alt="logo de la imagen" id="logo" width={130} />
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quam nemo unde, impedit cumque natus ullam vel explicabo ipsum necessitatibus reiciendis aliquid dolorum ipsa quae numquam, sit incidunt hic beatae?</p></div>
        <div className=" max-w-full w-[380px] h-full flex items-start flex-col justify-around text-gray-300 gap-10"><h2 className="text-3xl font-bold">Servicios</h2>
          <div className="flex justify-around flex-col">
            <div className="flex flex-row m-2">
              <img src={Ubicacion} alt="iconogmail" id="fooimg" />
              <p>Plaza principal 14 de septiembre</p>
            </div>
            <div className="flex flex-row m-2">
              <img src={Phone} alt="iconogmail" id="fooimg" />
              <p>+591 68540821</p>
            </div>
            <div className="flex flex-row m-2">
              <img src={Gmail} alt="iconogmail" id="fooimg" />
              <p>Peliculas@gmail.com</p>
            </div>
          </div></div>
        <div className=" max-w-full w-[380px] h-full flex items-start flex-col justify-around text-gray-300 gap-10"><h2 className="text-3xl font-bold">Redes sociales</h2>
          <div className="flex flex-row ">
            <img src={Face} alt="Logo facebook" id="fooimg" />
            <img src={IG} alt="Logo instagram" id="fooimg" />
            <img src={Tw} alt="logo twitter" id="fooimg" />
          </div>
          <p>Mas informacion</p>
          <form className="flex">
            <input type="email" className="p-2 rounded-[6px] outline-none text-gray-500" placeholder="Correo" required value={gmail} onChange={(e) => setGmail(e.target.value)} />
            <button type="submit"><img src={Enviar} alt="icono enviar" id="fooimg" onClick={handleEnviar} /></button>
          </form>
        </div>
      </div>
      <p className="text-white">Copyright 2023©</p>
    </footer>
  )
}

export default Footer