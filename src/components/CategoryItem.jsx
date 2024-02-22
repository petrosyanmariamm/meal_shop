import {Link} from 'react-router-dom';


export function CategoryItem({item}) {

  return (
    <div className=' flex justify-center items-center flex-col border p-4 rounded'>
        <img src={item.strCategoryThumb} alt={item.strCategory} />
        <div className=' text-center font-extrabold text-2xl text-orange-400'>{item.strCategory}</div>
        <div>{
            item.strCategoryDescription.length > 100 ? item.strCategoryDescription.slice(0, 100) + '...' : item.strCategoryDescription
        }</div>
        <Link className=' bg-orange-400 px-4 py-2 rounded text-white hover:text-orange-600 hover:bg-orange-200 duration-1000 mt-4' to={'/category/' + item.strCategory+ '/' + item.strCategoryDescription}>Show All {item.strCategory}...</Link>
    </div>
  )
}
