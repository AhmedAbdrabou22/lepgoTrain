import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
       <div style="background-color: #000000;">
        <nav className="navbar container  ">
            <div className="container-fluid ">
              <form className="d-flex" role="search" >
                <input className="form-control me-2" type="search" placeholder="ابحث عما تريده" aria-label="Search" />
                 <button type="button" class="btn btn-outline-secondary">ابحث</button>
              </form>
              <Link className="navbar-brand" to={'/'} style="color: #fff;">مطعم جديد</Link>
    
            </div>
          </nav>
    </div>
   
    </div>
  )
}

export default Navbar
