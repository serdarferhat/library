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
// if(book===null)return null  yerine  ? işareti

  return (
    <>
    <Header/>
    {/* <h1>Kitap Adı:{book?.title}</h1>
    <h1>Yazarı:{book?.author}</h1>
    <h1>Yayın evi:{book?.publisher}</h1>
    <h1>ISBN:{book?.isbn===""?"-":book?.isbn}</h1>
    <h1>Durumu:{book?.isRead===true?"Okundu":"Okunmadı"}</h1>
    <h1>Kategori:{category?.name}</h1> */}
    <h3 className='text-center mt-4'>Kitap Detayı </h3>
    <table class="container table table-bordered mt-4">
      <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Kitap Adı</td>
      <td>{book?.title}</td>   
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Yazarı</td>
      <td>{book?.author}</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Yayın evi</td>
      <td>{book?.publisher}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td >ISBN</td>
      <td>{book?.isbn===""?"-":book?.isbn}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td >Durumu</td>
      <td>{book?.isRead===true?"Okundu":"Okunmadı"}</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td className='col-5'>Kategori</td>
      <td className='col-6'>{category?.name}</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default BookDetail