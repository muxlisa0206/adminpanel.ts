import AddModal from "@/components/AddModal";
import CategoryAddForm from "@/components/categoryPage/CategoryAddForm";
import CategoryTablePage from "@/components/categoryPage/CategoryTablePage";
import type { CategoryType } from "@/components/categoryPage/CategoryType";
import useGet from "@/components/hooks/useGet"
import { useState } from "react";

const CategoryPage = () => {
  const [open, setOpen] = useState(false);
  
  const {data} = useGet <CategoryType[]>({url: "category", key:["category"]})
  console.log(data);
  
  return (
    <div>
      <AddModal open={open} setOpen={setOpen} text={"Category"}>
        <CategoryAddForm setOpen={setOpen}/>
      </AddModal>
      <CategoryTablePage data={data}/>
    </div>
  )
}

export default CategoryPage