import type { ActorType } from "@/components/actorPage/ActorType";
import AddModal from "@/components/AddModal";
import useGet from "@/components/hooks/useGet"
import TablePage from "@/components/actorPage/Table";
import { useState } from "react";
import ActorAddForm from "@/components/actorPage/ActorAddForm";

const ActorPage = () => {
  const [open, setOpen] = useState(false);
  
  const {data} = useGet <ActorType[]>({url: "actor", key:["actors"]})
  console.log(data);
  
  return (
    <div>
      <AddModal open={open} setOpen={setOpen} text={"Actor"}>
        <ActorAddForm setOpen={setOpen}/>
      </AddModal>
      <TablePage data={data}/>
    </div>
  )
}

export default ActorPage