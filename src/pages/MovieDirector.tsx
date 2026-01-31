import AddModal from "@/components/AddModal";
import type { DirectorType } from "@/components/directorPage/DirectorType";
import useGet from "@/components/hooks/useGet"
import MovieDirectorAddForm from "@/components/movieDirector/MovieDirectorAddForm";
import MovieDirectorTablePage from "@/components/movieDirector/MovieDirectorTablePage";
import type { MovieDirectorType } from "@/components/movieDirector/MovieDirectorType";
import type { MovieType } from "@/components/moviePage/MovieType";
import { useState } from "react";

const MovieDirectorPage = () => {
  const [open, setOpen] = useState(false);
  
  const {data} = useGet <MovieDirectorType[]>({url: "movie_director", key:["movie_director"]})
  const {data:director} = useGet <DirectorType[]>({url: "director", key:["director"]})
  const {data:movies} = useGet <MovieType[]>({url: "movie", key:["movies"]})
  
  return (
    <div>
      <AddModal open={open} setOpen={setOpen} text={"Movie and Director"}>
        <MovieDirectorAddForm director={director} movies={movies} setOpen={setOpen}/>
      </AddModal>
      <MovieDirectorTablePage data={data} director={director} movies={movies}/>
    </div>
  )
}

export default MovieDirectorPage