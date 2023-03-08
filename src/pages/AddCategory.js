import React, { useState } from 'react'

import Header from '../components/Header'

import { useSelector, useDispatch } from 'react-redux'
import actionTypes from "../redux/actions/actionTypes"

import { useNavigate } from 'react-router-dom'

import api from "../api/api"
import urls from "../api/urls"

const AddCategory = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { categoriesState } = useSelector(state => state)
  const [form, setForm] = useState({
    id: String(new Date().getTime()),
    name: ""
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    // kategori boş olamaz ----değer verirken
    // daha önce kayıtlı kategori kayıt edilemez 
    if (form.name === "") {
      alert("Kitabınızın Kategorisini Giriniz!!!")
      return
    }
    const hasCategory = categoriesState.categories.find(item => item.name.toLocaleLowerCase("tr-TR") === form.name.toLocaleLowerCase("tr-TR"));
    console.log(hasCategory)
    if (hasCategory !== undefined) {
      alert(`${form.name} adıyla kitap kategorisi zaten vardır..`)
      return
    }
    api.post(urls.categories, form)
      .then(res => {
        dispatch({ type: actionTypes.categoryTypes.ADD_CATEGORY, payload: form })
        navigate("/list-categories")
      })
  }



  return (
    <div>
      <Header />
      <div className='container mt-4'>
        <form onSubmit={handleSubmit}>
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
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
            />
            <div className="d-flex justify-content-center my-5">
              <button className="btn btn-secondary w-50" type="submit">
                Kaydet
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCategory