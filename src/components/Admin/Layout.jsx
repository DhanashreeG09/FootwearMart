import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate()

  function logoutUser() {
    localStorage.clear();
    navigate("/adminlogin")
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-3">
          <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
            <div class="position-sticky">
              <div class="list-group list-group-flush mx-3 mt-4">
                <Link to={'/admin'} class="list-group-item list-group-item-action py-2 ripple "
                  aria-current="true">
                  <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Dashboard</span>
                </Link>
                <Link to={'/admin/product'} class="list-group-item list-group-item-action py-2 ripple ">
                  <i class="fas fa-chart-area fa-fw me-3"></i><span>Product</span>
                </Link>
                <Link to={'/admin/addproduct'} class="list-group-item list-group-item-action py-2 ripple"
                ><i class="fas fa-lock fa-fw me-3"></i><span>Add Products</span>
                </Link>

                <a class="list-group-item list-group-item-action py-2 ripple"
                ><i class="fas fa-chart-line fa-fw me-3"></i><span>SideBar</span>
                </a>
                <li className='nav-link link-light'>
                  <button onClick={() => logoutUser()} className='btn btn-md' type='button' style={{ backgroundColor: "rgb(136, 200, 188)" }}>LogOut</button>
                </li>

              </div>
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <Outlet />
        </div>

      </div>
    </div>
  )
}
