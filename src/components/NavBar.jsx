import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-lg bg-primary py-3 shadow-sm">
        <div class="container">
          <nav class="navbar-brand fw-bold fs-1" to="/products">ShopKart.</nav>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

              <li class="nav-item ">
                <a class="nav-link" href="/products">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
              </li>

            </ul>
            <div className="buttons">
              <button className="btn">
                <NavLink to='/cart' className='btn btn-outline-dark'>
                  <i className="fa fa-shopping-cart"></i></NavLink>
              </button>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;