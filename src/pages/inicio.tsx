import CardMovie from "./cardMovie";
import Loading from "../components/loading";
import useStore from "../store/movies";
import MovieList from "../components/movieList";
const Inicio = () => {
  const { data} = useStore();
  const datosFiltrados = data?.filter(item => (
    item.releaseYear >= 2010
  ))
  return (
    <div className='w-full min-h-full  p-10 '>
      {
        !datosFiltrados ? (
          <Loading />
        ) :
          (
            <MovieList list={datosFiltrados} title={"Peliculas en linea"}/>
          )
      }
    </div>
  )
}
export default Inicio