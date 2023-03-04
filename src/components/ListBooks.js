/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

import { Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux";

import check from "../assets/images/check.png"

import GeneralModal from "./GeneralModal";

import api from "../api/api";
import urls from "../api/urls";

import actionTypes from "../redux/actions/actionTypes";

const ListBooks = () => {
  const dispatch = useDispatch()
  const { booksState, categoriesState } = useSelector((state) => state);
  // console.log(booksState);
  // console.log(categoriesState);
  const [showModal, setShowModal] = useState(false);
  const [dltBook, setDltBook] = useState("")
  const deleteBook = (id) => {
    api.delete(`${urls.books}/${id}`)
      .then(res => {
        dispatch({
          type: actionTypes.bookTypes.DELETE_BOOK,
          payload: id
        })
        setShowModal(false)
      })
  }
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-end my-3">
        <Link to={"/add-book"} className="btn btn-primary">Yeni Kitap Ekle</Link>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Sıra No</th>
            <th scope="col">Kitap Adı</th>
            <th scope="col">Yazarı</th>
            <th scope="col">Kategori</th>
            <th scope="col">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {booksState.books.map((book, index) => {
            const myCategory = categoriesState.categories.find(
              (item) => item.id === book.categoryId
            );
            return (
              <tr key={book.id}>
                <th>{index + 1}{book.isRead === true && <img style={{ width: "20px" }} src={check} />}</th>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{myCategory.name}</td>
                <td className="d-flex">
                  <Link to={`/book-detail/${book.id}`}>Detay</Link>
                  <button onClick={() => {
                    setShowModal(true)
                    setDltBook(book.id)
                  }} className="mx-2 btn btn-sm btn-danger"> Sil</button>
                  <Link to={`/edit-book/${book.id}`} className="btn btn-sm btn-secondary">Güncelle</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {
        showModal === true && (
          <GeneralModal
            title={"Kitap Silinecek"}
            content={"Kitabı silmek istediğinden emin misin?"}
            secondaryBtnText="Vazgeç"
            secondaryBtnOnclick={() => setShowModal(false)}
            buttonText="Sil"
            buttonOnClick={() => deleteBook(dltBook)}
          />
        )
      }
    </div>
  );
};

export default ListBooks;
