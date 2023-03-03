import React from 'react'

import Header from '../components/Header'

import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'



const EditBook = () => {
                const params=useParams();
                const {booksState,categoriesState}=useSelector(state=>state)
                // console.log(params)
                const myBook=booksState.books.find(item=>item.id===params.bookId)
                // console.log(myBook)

                return (
                                <div>
                                                <Header />
                                                <div className="container my-5">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Kitap Adı<span style={{ color: "orangered" }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Sineklerin Tanrısı"
//             value={form.title}
//             onChange={(event) =>
//               setForm({ ...form, title: event.target.value })
//             }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Yazarı<span style={{ color: "orangered" }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="William Golding"
//             value={form.author}
//             onChange={(event) =>
//               setForm({ ...form, author: event.target.value })
//             }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="publisher" className="form-label">
            Yayın Evi<span style={{ color: "orangered" }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="publisher"
            placeholder="İş Bankası Yayınları"
//             value={form.publisher}
//             onChange={(event) =>
//               setForm({ ...form, publisher: event.target.value })
//             }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">
            ISBN<span style={{ color: "orangered" }}>*</span>
          </label>
          <input
            type="number"
            className="form-control"
            id="isbn"
            placeholder="xxxxxxxxxxx"
//             value={form.isbn}
//             onChange={(event) => {
//               if (event.target.value.length <= 11) {
//                 setForm({ ...form, isbn: event.target.value });
//               }
//             }}
          />
        </div>
        <select
//           value={form.categoryId}
//           onChange={(event) =>
//             setForm({ ...form, categoryId: event.target.value })
//           }
          className="form-select"
          aria-label="Default select example"
        >
          {categoriesState.categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
//             value={form.isRead}
//             onChange={() => setForm({ ...form, isRead: !form.isRead })}
            id="isRead"
          />
          <label className="form-check-label" htmlFor="isRead">
            Bu kitabı okudum
          </label>
        </div>
        <div className="d-flex justify-content-center my-5">
          <button className="btn btn-secondary w-50" type="submit">
            Kaydet
          </button>
        </div>
      </form>
      {/* {showModal === true && (
        <GeneralModal
          title={"Başarılı"}
          content="Kitap başarıyla kaydedildi"
          buttonText={"Kapat"}
          buttonOnClick={() => navigate("/")}
        />
      )} */}
    </div>
                                </div>
                )
}

export default EditBook