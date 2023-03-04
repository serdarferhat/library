import React from 'react'

import Header from '../components/Header'

import { useSelector } from 'react-redux'


const ListCategories = () => {
  const {booksState, categoriesState } = useSelector(state => state)
  return (
    <div>
      <Header />
      <div className='container'>
        {
          categoriesState.categories.length === 0 && (
            <div className="alert alert-danger" role="alert">
              Kayıtlı bir kategori yok!!
            </div>
          )
        }
        {
          categoriesState.categories.length > 0 && (
            
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Sıra</th>
      <th scope="col">Kategori Adı</th>
      <th scope="col">Kitap Sayısı</th>
      <th scope="col">İşlemler</th>
    </tr>
  </thead>
  <tbody>
  {categoriesState.categories.map((category,index)=>(
     <tr key={index}>
     <th scope="row">{index+1}</th>
     <td>{category.name}</td>
     <td>{booksState.books.filter(item=>item.categoryId===category.id).length}</td>
     <td>@mdo</td>
   </tr>
  ))}
  </tbody>
</table>
            
            )
        }
      </div>
    </div>
  )
}

export default ListCategories