import AddModal from "@/components/AddModal";
import type { GenreType } from "@/components/genrePage/GenreType";
import useGet from "@/components/hooks/useGet"
import MovieGenreAddForm from "@/components/moveGenre/MovieGenreAddForm";
import MovieGenreTablePage from "@/components/moveGenre/MovieGenreTablePage";
import type { MovieGenreType } from "@/components/moveGenre/MovieGenreType";
import type { MovieType } from "@/components/moviePage/MovieType";
import { useState } from "react";

const MovieGenrePage = () => {
  const [open, setOpen] = useState(false);
  
  const {data} = useGet <MovieGenreType[]>({url: "movie_genre", key:["movie_genre"]})
  const {data:genre} = useGet <GenreType[]>({url: "genre", key:["genre"]})
  const {data:movies} = useGet <MovieType[]>({url: "movie", key:["movies"]})
  
  return (
    <div>
      <AddModal open={open} setOpen={setOpen} text={"Movie and Genre"}>
        <MovieGenreAddForm genre={genre} movies={movies} setOpen={setOpen}/>
      </AddModal>
      <MovieGenreTablePage data={data} genre={genre} movies={movies}/>
    </div>
  )
}

export default MovieGenrePage