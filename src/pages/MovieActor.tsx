import type { ActorType } from "@/components/actorPage/ActorType";
import AddModal from "@/components/AddModal";
import useGet from "@/components/hooks/useGet"
import MovieActorAddForm from "@/components/movieActor/MovieActorAddForm";
import MovieActorTablePage from "@/components/movieActor/MovieActorTablePage";
import type { MovieActorType } from "@/components/movieActor/MovieActorType";
import type { MovieType } from "@/components/moviePage/MovieType";
import { useState } from "react";

const MovieActorPage = () => {
  const [open, setOpen] = useState(false);
  
  const {data} = useGet <MovieActorType[]>({url: "movie_actor", key:["movie_actors"]})
  const {data:actors} = useGet <ActorType[]>({url: "actor", key:["actors"]})
  const {data:movies} = useGet <MovieType[]>({url: "movie", key:["movies"]})

  console.log(actors);
  
  return (
    <div>
      <AddModal open={open} setOpen={setOpen} text={"Movie and Actor"}>
        <MovieActorAddForm actors={actors} movies={movies} setOpen={setOpen}/>
      </AddModal>
      <MovieActorTablePage data={data} actors={actors} movies={movies}/>
    </div>
  )
}

export default MovieActorPage