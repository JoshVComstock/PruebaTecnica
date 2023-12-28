import CardMovie from './cardMovie';
import Loading from '../components/loading';
import useStore from '../store/movies';
import MovieList from '../components/movieList';
const Series = () => {
  const { data } = useStore();
  const datosSerie = data?.filter(item => (
    item.programType == "series"
  ));
  const limiteSerie = datosSerie?.slice(0, 20);
  return (
    <div className='w-full min-h-full bg-gray-800 p-10'>
      {
        !limiteSerie ? (
          <Loading />
        ) : (
          <MovieList list={limiteSerie} title='Series'/>
        )
      }
    </div>
  )
}

export default Series