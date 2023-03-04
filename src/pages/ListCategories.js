import React from 'react'

import Header from '../components/Header'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const ListCategories = () => {
  const {booksState, categoriesState } = useSelector(state => state)
  return (
    <div>
      <Header />
      <div className='container d-flex justify-content-end mt-2'><Link to={"/add-category"} className='btn btn-primary'>
        Kategori Ekle
        </Link></div>
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
            
            <table className="mt-2 table table-bordered border-secondary">
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
     <td>
      <button className='btn btn-sm btn-danger'>Sil</button>
      <button className='btn btn-sm btn-secondary mx-2'>Güncelle</button>
      </td>
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