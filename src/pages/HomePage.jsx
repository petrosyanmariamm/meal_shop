

import { useEffect, useState } from 'react';
import { getAllCategories } from '../api';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';



export  function HomePage() {

  const [categories, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);

  useEffect(()=>{
    getAllCategories().then(data=>{
      console.log(data.categories);
      setCategories(data.categories);
    })
  }, [])

  const search = (value)=>{
    const arr = categories.filter(el=> el.strCategory.toLowerCase().includes(value.toLowerCase()) ||
    el.strCategoryDescription.toLowerCase().includes(value.toLowerCase()));
    setFilteredCategory(arr);
  }

  return (
    <div className=' mx-auto p-8 pt-[9rem]'>
      <Search search={search}/>
      <CategoryList categories={filteredCategory.length ? filteredCategory : categories}/>
      
    </div>
  )
}
