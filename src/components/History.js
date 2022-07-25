import React from 'react'
import {Helmet} from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong, faCircleCheck, faCircleXmark, faHourglass} from "@fortawesome/free-solid-svg-icons";

function History() {
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
                  <a className="nav-link text-white" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Request</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Transfer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white font-weight-bold" href="#" tabindex="-1" aria-disabled="true">History</a>
                </li>
              </ul>
              <form className="form-inline">
                <button className="btn shadow-none text-white border-0 px-0" type="submit">Log out</button>
              </form>
            </div>
          </nav>
        </div>
        <div className="container mb-3">
            <h4 className='my-4 mx-5'>History Transaction</h4>
            <div className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border rounded-2">
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <h5>Request Transaction</h5>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <a className='font-weight-bold mx-3'>Accepted</a>
                        <FontAwesomeIcon icon={faCircleCheck} style={{color:'green'}}/>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center"></div>
                    <div className="col-md-12 col-lg-2 mt-2 text-center mx-3">
                        <h5>+ 300 USD</h5>
                    </div>
            </div>
            <div className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border rounded-2">
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <h5>Request Transaction</h5>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <a className='font-weight-bold mx-3'>Declined</a>
                        <FontAwesomeIcon icon={faCircleXmark} style={{color:'red'}}/>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center"></div>
                    <div className="col-md-12 col-lg-2 mt-2 text-center mx-3">
                        <h5>+ 300 USD</h5>
                    </div>
            </div>
            <div className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border rounded-2">
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <h5>Request Transaction</h5>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <a className='font-weight-bold mx-3'>Pending</a>
                        <FontAwesomeIcon icon={faHourglass}/>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center"></div>
                    <div className="col-md-12 col-lg-2 mt-2 text-center mx-3">
                        <h5>+ 300 USD</h5>
                    </div>
            </div>
            <div className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border rounded-2">
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <h5>Transfer Transaction</h5>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <a className='font-weight-bold mx-3'>Primesz</a>
                        <FontAwesomeIcon icon={faArrowRightLong}/>
                        <a className='font-weight-bold mx-3'>Tayo</a>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center"></div>
                    <div className="col-md-12 col-lg-2 mt-2 text-center mx-3">
                        <h5>+ 30000 USD</h5>
                    </div>
            </div>
            <div className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border rounded-2">
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <h5>Transfer Transaction</h5>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <a className='font-weight-bold mx-3'>Primesz</a>
                        <FontAwesomeIcon icon={faArrowLeftLong}/>
                        <a className='font-weight-bold mx-3'>Tayo</a>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center"></div>
                    <div className="col-md-12 col-lg-2 mt-2 text-center mx-3">
                        <h5>- 30000 USD</h5>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default History