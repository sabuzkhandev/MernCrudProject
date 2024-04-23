import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Read } from '../../APIServices/CrudServices'
import SideBar from '../common/sideBar'
export default function AllFoodList() {
  let [DataList, setDataList] = useState([])

  useEffect(() => {
    dataFetch()
  }, [])

  const dataFetch = async () => {
    const { data } = await Read()
    setDataList(data.rows)
    //console.log(data)
  }

  const DeleteItem = async (id) => {
    await axios.get(`/api/Delete/${id}`)
    window.location.reload()
  }

  if (DataList?.length > 0) {
    return (
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">All Food List</h1>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  {DataList.map((item, i) => {
                    return (
                      <div className="col-md-3 mb-4" key={i}>
                        <div className="card">
                          <img
                            src={item.food_image}
                            className="card-img-top"
                            alt="ProductImage"
                            height="140"
                          />
                          <div className="card-body">
                            <p className="food-title">{item.food_name}</p>
                            <h5 className="price">Tk. {item.food_price}</h5>
                            <Link
                              to={`/update/${item['_id']}`}
                              className="btn-edit"
                            >
                              <i className="bi bi-pencil-square"></i> Edit
                            </Link>
                            <button
                              onClick={() => DeleteItem(item['_id'])}
                              className="btn-delete"
                            >
                              <i className="bi bi-trash3"></i> Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <p className="text-danger text-center mt-5">Data Not Available</p>
      </div>
    )
  }
}
