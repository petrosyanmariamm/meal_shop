
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMealById} from '../api';
import { useNavigate } from "react-router-dom";



export  function DetailPage() {

const {id} = useParams();
const [meal, setMeal] = useState({});
const [showVideo, setShowVideo] = useState(false)
const navigate = useNavigate();

useEffect(()=>{
  getMealById(id).then(data=>{
    console.log(data.meals[0]);
    setMeal(data.meals[0]);
  })
}, [])


  return (
    <div className=" grid sm:grid-cols-2">
        <div className=" left-block pt-[10rem] pb-[4rem] pl-[5rem]">
            <img src={meal.strMealThumb} alt={meal.strMeal}/>
        </div>
        <div className=" right-block flex justify-center items-center flex-col">
            <div><span className=" font-bold">Area - </span>{meal.strArea}</div>
            <div><span  className=" font-bold">Category - </span>{meal.strCategory}</div>
            <div><span  className=" font-bold">Meal - </span>{meal.strMeal}</div>
            <button  className=" font-bold cursor-pointer" onClick={()=> setShowVideo(!showVideo)}>Show Video</button>
            <button className=" px-3 py-2 bg-orange-500 rounded text-white mt-2 cursor-pointer" onClick={()=> navigate(-1)}>Go Back</button>
        </div>

        {
            showVideo &&
            <div className=" fixed top-0 left-0 right-0 bottom-0 bg-black/30 flex justify-center items-center cursor-pointer" onClick={()=> setShowVideo(false)}>
             <div className=' text-3xl font-bold cursor-pointer absolute top-4 right-4 text-red-950' onClick={()=> setShowVideo(false)}> X </div>
             <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + meal.strYoutube.slice(-11)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        }
      
    </div>
  )
}
