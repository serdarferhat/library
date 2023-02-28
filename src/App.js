import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

import Home from "./pages/Home";
import AddBook from "./pages/AddBook";

import axios from "axios";
import actionTypes from "./redux/actions/actionTypes";
import Error from "./pages/Error";
import BookDetail from "./pages/BookDetail";

function App() {
  const dispatch = useDispatch();
  const {booksState,categoriesState}=useSelector(state=>state)

  useEffect(() => {
    //fetch books
    dispatch({ type: actionTypes.bookTypes.FETCH_BOOKS_START });
    axios
      .get("http://localhost:3004/books")
      .then((res) => {
        dispatch({
          type: actionTypes.bookTypes.FETCH_BOOKS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.bookTypes.FETCH_BOOKS_FAIL,
          payload: "Kitaplar çekilirken bir hata oluştu",
        });
      });
    //fetch categories
    dispatch({ type: actionTypes.categoryTypes.FETCH_CATEGORIES_START });
    axios
      .get("http://localhost:3004/categories")
      .then((res) => {
        dispatch({
          type: actionTypes.categoryTypes.FETCH_CATEGORIES_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.categoryTypes.FETCH_CATEGORIES_FAIL,
          payload: "Kategoriler çekilirken hata oluştu"
        })
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(booksState.success === false || categoriesState.success === false){
    return <h1>Loading...</h1>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book-detail/:bookId" element={<BookDetail/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
