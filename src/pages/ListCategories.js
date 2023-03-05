import React,{useState} from 'react'

import Header from '../components/Header'

import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import GeneralModal from '../components/GeneralModal'

import api from "../api/api";
import urls from "../api/urls"

import actionTypes from "../redux/actions/actionTypes"


const ListCategories = () => {
  const dispatch=useDispatch()
  const {booksState, categoriesState } = useSelector(state => state);
  const [showModal,setShowModal]=useState(false)
  const [willDlt,setWillDlt]=useState()
  const dltCategory=(id)=>{
    api.delete(`${urls.categories}/${id}`)
    .then(res=>{
      dispatch({type:actionTypes.categoryTypes.DELETE_CATEGORY,payload:id})
      dispatch({type:actionTypes.bookTypes.DELETE_BOOKS_CATEGORY,payload:id})
      setShowModal(false)
    })
  }
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
      <button onClick={()=>{
        setShowModal(true)
        setWillDlt(category.id)
      }} className='btn btn-sm btn-danger'>Sil</button>
      <button className='btn btn-sm btn-secondary mx-2'>Güncelle</button>
      </td>
   </tr>
  ))}
  </tbody>
</table>
        )}
      </div>
      {
       showModal===true && (
        <GeneralModal
        title="Silme işleminden emin misiniz?"
        content="Kategori silindiğinde kategoriye ait tüm kitapları da silmiş olursunuz!!!"
        secondaryBtnText='Vazgeç'
        secondaryBtnOnclick={()=>setShowModal(false)}
        buttonText="Sil"
        buttonOnClick={()=>{dltCategory(willDlt)}}
        />
       )
      }
    </div>
  )
}

export default ListCategories