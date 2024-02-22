import {useNavigate} from 'react-router-dom';

export function MealItem({item}) {


    const navigate = useNavigate();

  return (
    <div 
        className=' flex justify-center items-center flex-col border p-4 rounded cursor-pointer'
        onClick={()=> navigate('/meal/' + item.idMeal )}
    >
        <img src={item.strMealThumb} alt={item.strMeal} />
        <div className=' text-center font-bold text-white'>{item.strMeal}</div>
    </div>
  )
}
