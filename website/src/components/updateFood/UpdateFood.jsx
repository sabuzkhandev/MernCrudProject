import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBar from '../common/sideBar'
export default function UpdateFood() {
  let { id } = useParams()
  const [Existing, setExisting] = useState([])

  const ExistingInfo = async (id) => {
    let res = await axios.get(`/api/ReadById/${id}`)
    setExisting(res.data['rows'][0])
  }

  useEffect(() => {
    ;(async () => {
      await ExistingInfo(id)
    })()
  }, [])

  let navigate = useNavigate()
  const UpdateData = async (event) => {
    event.preventDefault()
    let formData = new FormData(event.target)
    let food_name = formData.get('food_name')
    let food_code = formData.get('food_code')
    let food_image = formData.get('food_image')
    let food_category = formData.get('food_category')
    let qty = formData.get('qty')
    let food_price = formData.get('food_price')

    if (
      !food_name ||
      !food_code ||
      !food_image ||
      !food_category ||
      !qty ||
      !food_price
    ) {
      alert('Please fill out all fields')
      return
    }

    await axios.post(`/api/update/${id}`, {
      food_name: food_name,
      food_code: food_code,
      food_image: food_image,
      food_category: food_category,
      qty: parseInt(qty),
      food_price: parseFloat(food_price),
    })

    navigate('/')
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <SideBar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Update Food Item</h1>
            </div>

            <div className="row">
              <div className="col-md-12">
                <form onSubmit={UpdateData}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label htmlFor="food_name" className="form-label">
                          Food Name
                        </label>
                        <input
                          defaultValue={
                            Existing !== null && Existing['food_name']
                          }
                          type="text"
                          className="form-control"
                          name="food_name"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label htmlFor="food_code" className="form-label">
                          Food Code
                        </label>
                        <input
                          defaultValue={
                            Existing !== null && Existing['food_code']
                          }
                          type="text"
                          className="form-control"
                          name="food_code"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label htmlFor="food_image" className="form-label">
                          Food Image
                        </label>
                        <input
                          defaultValue={
                            Existing !== null && Existing['food_image']
                          }
                          type="text"
                          className="form-control"
                          name="food_image"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label htmlFor="food_category" className="form-label">
                          Food Category
                        </label>
                        <input
                          defaultValue={
                            Existing !== null && Existing['food_category']
                          }
                          type="text"
                          className="form-control"
                          name="food_category"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label htmlFor="qty" className="form-label">
                          Qty
                        </label>
                        <input
                          defaultValue={Existing !== null && Existing['qty']}
                          type="number"
                          className="form-control"
                          name="qty"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label htmlFor="food_price" className="form-label">
                          Price
                        </label>
                        <input
                          defaultValue={
                            Existing !== null && Existing['food_price']
                          }
                          type="number"
                          step="0.001"
                          className="form-control"
                          name="food_price"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-1">
                    <button type="submit" className="btn custom-btn">
                      <i className="bi bi-arrow-clockwise"></i> Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
