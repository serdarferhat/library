import React,{useState} from 'react'

import Header from '../components/Header'

import { useSelector } from 'react-redux'

const AddCategory = () => {
  const {categoriesState}=useSelector(state=>state)
  const [form,setForm]=useState({
    id:String(new Date().getTime()),
    name:""
  })
  const handleSubmit=(event)=>{
    event.preventDefault()
    // kategori boş olamaz ----değer verirken
    // daha önce kayıtlı kategori kayıt edilemez 
    if(form.name===""){ alert( "Kitabınızın Kategorisini Giriniz!!!")
     return
    }
   

  }
  return (
    <div>
     <Header/>
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