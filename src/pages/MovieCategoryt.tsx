import AddModal from "@/components/AddModal";
import type { CategoryType } from "@/components/categoryPage/CategoryType";
import useGet from "@/components/hooks/useGet"
import MovieCategoryAddForm from "@/components/movieCategory/MovieCategoryAddForm";
import MovieCategoryTablePage from "@/components/movieCategory/MovieCategoryTablePage";
import type { MovieCategoryType } from "@/components/movieCategory/MovieCategoryType";
import type { MovieType } from "@/components/moviePage/MovieType";
import { useState } from "react";

const MovieCategory = () => {
  const [open, setOpen] = useState(false);
  
  const {data} = useGet <MovieCategoryType[]>({url: "movie_category", key:["movie_category"]})
  const {data:category} = useGet <CategoryType[]>({url: "category", key:["category"]})
  const {data:movies} = useGet <MovieType[]>({url: "movie", key:["movies"]})

  console.log(category);
  
  return (
    <div>
      <AddModal open={open} setOpen={setOpen} text={"Movie and Category"}>
        <MovieCategoryAddForm category={category} movies={movies} setOpen={setOpen}/>
      </AddModal>
      <MovieCategoryTablePage data={data} category={category} movies={movies}/>
    </div>
  )
}

export default MovieCategory