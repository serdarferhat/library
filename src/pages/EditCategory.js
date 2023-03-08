import React, { useState } from 'react'

import Header from '../components/Header'

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { firstBig } from '../utils/firstBig'


const EditCategory = () => {
  const { categoryId } = useParams()
  // console.log(categoryId)
  const { categoriesState } = useSelector(state => state)
  const myCategory = categoriesState.categories.find((item) => item.id === categoryId)
  // console.log(myCategory)
  const [form,setForm]=useState(myCategory)
  const handleEdit=(e)=>{
    e.preventDefault()
    if(!form.name){
      alert("Kategori adı boş olamaz")
      return
    }
    
  }
  return (
    <div>
      <Header />
      .<div className="container">
      <form onSubmit={handleEdit}>
       <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Kategori Adı<span style={{ color: "orangered" }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Roman.."
            value={form.name}
            onChange={(e)=>setForm({...form,name:e.target.value})}
          
          />
           <div className="d-flex justify-content-center my-5">
          <button disabled={firstBig(myCategory.name)===firstBig(form.name).trim()} className="btn btn-secondary w-50" type="submit">
            Güncelle
          </button>
        </div>
        </div>
       </form>
      </div>
    </div>
  )
}

export default EditCategory