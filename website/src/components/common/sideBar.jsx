import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            <i className="bi bi-cloud-fog2"></i> CRUD FOOD
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link d-flex align-items-center gap-2 active"
              >
                <i className="bi bi-card-text"></i>
                All Foods
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/create"
                className="nav-link d-flex align-items-center gap-2"
                aria-current="page"
              >
                <i className="bi bi-cart3"></i> Create Food
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
