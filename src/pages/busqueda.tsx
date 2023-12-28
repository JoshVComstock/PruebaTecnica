import CardMovie from "./cardMovie";
import Loading from "../components/loading";
import useStore from "../store/movies";
import MovieList from "../components/movieList";
interface busquedaProps {
    filtro: string
}
const Busqueda = ({ filtro }: busquedaProps) => {
    const { data } = useStore();

    return (
        <div className='w-full min-h-full  p-10 '>
            {
                !data ? (
                    <Loading />
                ) :
                    (
                        <MovieList list={data.filter(item => item.title.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()))} title={"Busqueda"} />
                    )
            }
        </div>
    )
}
export default Busqueda