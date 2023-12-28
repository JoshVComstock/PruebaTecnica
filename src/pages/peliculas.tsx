import Loading from '../components/loading';
import CardMovie from './cardMovie';
import useStore from '../store/movies';
import MovieList from '../components/movieList';
const Peliculas = () => {
  const { data } = useStore();
  const peliculaFil = data?.filter(item => (
    item.programType == "movie"
  ));
  const limitePeliculas = peliculaFil?.slice(0, 20);
  return (
    <div className='w-full min-h-full bg-gray-800 p-10'>
      {
        !limitePeliculas ? (
          <Loading />
        ) : (
          <MovieList list={limitePeliculas} title='Peliculas' />
        )
      }
    </div>
  )
}

export default Peliculas