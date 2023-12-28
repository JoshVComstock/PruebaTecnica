import { create } from "zustand";
import { Movie } from "../interface/Movie";
interface moviesPros {
  data: Movie[] | null;
  setData: (data: Movie[]) => void;
}
const useStore = create<moviesPros>((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));
export default useStore;
