import React,{useEffect,useState} from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import api from '../api/api'
import urls from '../api/urls'

const BookDetail = () => {
const params=useParams()
console.log(params); 
const [book,setBook]=useState(null)
const [category,setCategory]=useState()
useEffect(()=>{
/* axios.get(`http://localhost:3004/books/${params.bookId}`)*/
    api.get(`${urls.books}/${params.bookId}`)
    .then(resBook=>{setBook(resBook.data)
    api.get(`${urls.categories}/${resBook.data.categoryId}`)
    .then(resCat=>{setCategory(resCat.data)})
    })
    .catch(res=>{})
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
// if(book===null)return null  ? işareti

  return (
    <>
    <Header/>
    <h1>Kitap Adı:{book?.title}</h1>
    <h1>Yazarı:{book?.author}</h1>
    <h1>Yayın evi:{book?.publisher}</h1>
    <h1>ISBN:{book?.isbn===""?"-":book?.isbn}</h1>
    <h1>Durumu:{book?.isRead===true?"Okundu":"Okunmadı"}</h1>
    <h1>Kategori:{category?.name}</h1>
    </>
  )
}

export default BookDetail