import ActorAddForm from "@/components/ActorAddForm";
import AddModal from "@/components/AddModal";
import DirectorTable from "@/components/DirectorTable";
import type { DirectorType } from "@/components/DirectorType";
import useGet from "@/components/hooks/useGet";
import { useState } from "react";

const DirectorPage = () => {
  const [open, setOpen] = useState(false);
  
  const {data} = useGet <DirectorType[]>({url: "director", key:["directors"]})
  console.log(data);
  
  return (
    <div>
      <AddModal open={open} setOpen={setOpen} text={"Director"}>
        <ActorAddForm setOpen={setOpen}/>
      </AddModal>
      <DirectorTable data={data}/>
    </div>
  )
}

export default DirectorPage