import AddModal from "@/components/AddModal";
import GenreAddForm from "@/components/genrePage/GenreAddForm";
import GenreTablePage from "@/components/genrePage/GenreTablePage";
import type { GenreType } from "@/components/genrePage/GenreType";
import useGet from "@/components/hooks/useGet"
import { useState } from "react";

const GenrePage = () => {
  const [open, setOpen] = useState(false);
  
  const {data} = useGet <GenreType[]>({url: "genre", key:["genre"]})
  console.log(data);
  
  return (
    <div>
      <AddModal open={open} setOpen={setOpen} text={"Genre"}>
        <GenreAddForm setOpen={setOpen}/>
      </AddModal>
      <GenreTablePage data={data}/>
    </div>
  )
}

export default GenrePage