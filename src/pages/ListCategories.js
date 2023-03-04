import React from 'react'

import Header from '../components/Header'

import { useSelector } from 'react-redux'


const ListCategories = () => {
                const {categoriesState}=useSelector(state=>state)
  return (
    <div>
    <Header/>
    {/* {
     categoriesState.categories.length===0 &&(
                
     )
    } */}
                  </div>
  )
}

export default ListCategories