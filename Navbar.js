import React from 'react';
import { Link , Outlet } from 'react-router-dom';
import {useSelector} from 'react-redux';


const Navbar =()=> {
  const cartCounter = useSelector(state => state.cart.cartCounter)
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-white positon-fixed w-100 top-0 start-0 shadow">
        <div className="container-fluid p-0">
        <Link to="/" className="navbar-brand text-uppercase fw-800" >

  
  <img src="data:image/jpeg;base64,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"
   alt="" width="80" height="60" />
</Link>



     



          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/men">Men</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link"  aria-current="page" to="/Women">Women</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" aria-current="page" to="/Kids">Kids</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" aria-current="page" to="/Beauty">Beauty</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" aria-current="page" to="/Living">Living</Link>
              </li>
              

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            
            <Link className='icon mt-2 px-3' to='/cart'>
              <span className="fas fa-shopping-bag"></span>{cartCounter}
              </Link>


          </div>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default Navbar ;
