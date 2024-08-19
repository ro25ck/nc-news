import React from 'react'
import './categoryList.css'



function CategoryList() {
  return (
    <ul className='category__list'>
      <li className='category__list-item'><a href="/coding">coding</a></li>
      <li className='category__list-item'><a href="/cooking">cooking</a></li>
      <li className='category__list-item'><a href="/football">football</a></li>
    </ul>
  )
}

export default CategoryList