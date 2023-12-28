import CardMovie from "./cardMovie";
import Loading from "../components/loading";
import useStore from "../store/movies";
import MovieList from "../components/movieList";
const Inicio = () => {
  const { data} = useStore();
  const datosFiltrados = data?.filter(item => (
    item.releaseYear >= 2010
  ))
  const limiteDatos = datosFiltrados?.slice(0, 20);
  return (
    <div className='w-full min-h-full  p-10 '>
      {
        !limiteDatos ? (
          <Loading />
        ) :
          (
            <MovieList list={limiteDatos} title={"Peliculas en linea"}/>
          )
      }
    </div>
  )
}
export default Inicio