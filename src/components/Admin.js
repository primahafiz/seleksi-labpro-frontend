import React from 'react'
import {Helmet} from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpFromBracket, faIdCard} from "@fortawesome/free-solid-svg-icons";


function Admin() {
  return (
    <div>
         <Helmet>
                <style>{'body { background-color: #f4f5f6; }'}</style>
        </Helmet>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light px-4" style={{backgroundColor : '#137cbd'}}>
            <a className="navbar-brand text-white" href="#">BNMO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white font-weight-bold" href="/admin">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Regis Data</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Request Data</a>
                </li>
              </ul>
              <form className="form-inline">
                <button className="btn shadow-none text-white border-0 px-0" type="submit">Log out</button>
              </form>
            </div>
          </nav>
        </div>
        <div className="container-lg">
          <div className='row row-eq-height mt-5 mx-2 justify-content-center align-items-center' >
              <a href='/' className="text-dark text-decoration-none border m-2 col-9 col-sm-5 col-lg-3 bg-white px-3 py-5 text-center">
                  <span>
                      <FontAwesomeIcon icon={faIdCard} size="4x"/>
                  </span>
                  <h3 className='mt-5'>Regis Data</h3>
                  <p className='mt-5'>Verify customer's registration data</p>
              </a>
              <a href='/' className="text-dark text-decoration-none border m-2 col-9 col-sm-5 col-lg-3 bg-white px-3 py-5 text-center">
                  <span>
                      <FontAwesomeIcon icon={faArrowUpFromBracket} size="4x"/>
                  </span>
                  <h3 className='mt-5'>Request Data</h3>
                  <p className='mt-5'>Verify customer's request transaction</p>
              </a>
          </div>
        </div>
      </div>
  )
}

export default Admin