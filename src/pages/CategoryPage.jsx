
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from '../api';
import { MealList } from '../components/MealList';
import { useNavigate } from "react-router-dom";


export  function CategoryPage() {

  const [meals, setMeals] = useState([]);
  const {name,descr} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getFilteredCategory(name).then(data=>{
      setMeals(data.meals);
    })
  },[])

  return (
    <div className=" mx-auto p-8 pt-[9rem]">
      <button className=" px-3 py-2 bg-orange-500 rounded text-white my-2 cursor-pointer" onClick={()=> navigate(-1)}>Go Back</button>
      <div>{descr}</div>
      <MealList meals={meals}/>
    </div>
  )
}
