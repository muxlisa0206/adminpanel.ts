import AddModal from "@/components/AddModal";
import useGet from "@/components/hooks/useGet"
import MovieAddForm from "@/components/moviePage/MovieAddForm";
import MovieTablePage from "@/components/moviePage/MovieTablePage";
import type { MovieType } from "@/components/moviePage/MovieType";
import { useState } from "react";

const ActorPage = () => {
  const [open, setOpen] = useState(false);
  
  const {data} = useGet <MovieType[]>({url: "movie", key:["movies"]})
  console.log(data);
  
  return (
    <div>
      <AddModal open={open} setOpen={setOpen} text={"Movie"}>
        <MovieAddForm setOpen={setOpen}/>
      </AddModal>
      <MovieTablePage data={data}/>
    </div>
  )
}

export default ActorPage