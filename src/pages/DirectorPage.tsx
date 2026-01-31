import AddModal from "@/components/AddModal";
import DirectorAddForm from "@/components/directorPage/DirectorAddForm";
import DirectorTable from "@/components/directorPage/DirectorTable";
import type { DirectorType } from "@/components/directorPage/DirectorType";
import useGet from "@/components/hooks/useGet";
import { useState } from "react";

const DirectorPage = () => {
  const [open, setOpen] = useState(false);
  
  const {data} = useGet <DirectorType[]>({url: "director", key:["directors"]})
  console.log(data);
  
  return (
    <div>
      <AddModal open={open} setOpen={setOpen} text={"Director"}>
        <DirectorAddForm setOpen={setOpen}/>
      </AddModal>
      <DirectorTable data={data}/>
    </div>
  )
}

export default DirectorPage