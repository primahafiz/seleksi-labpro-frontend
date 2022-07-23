import React from 'react'
import {Helmet} from "react-helmet";

function RegisVerification() {
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
                  <a className="nav-link text-white" href="/admin">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white font-weight-bold" href="#">Regis Data</a>
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
        <div className="container mb-3">
            <h4 className='my-4 mx-5'>Unverify Registration Data</h4>
            <div className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border rounded-2">
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                    <a href="https://storage.cloud.google.com/bnmo-data/ktm-13520022%20(1).jpg_1658317327116">
                            <img className='img-fluid' src='https://storage.cloud.google.com/bnmo-data/ktm-13520022%20(1).jpg_1658317327116' alt="" style={{ height:'100px' }}/>
                        </a>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <h5>Primesz</h5>
                        <p>Primanda Adyatma Hafiz</p>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center"></div>
                    <div className="col-md-12 col-lg-1 mt-2 text-center mx-3">
                        <button className='btn btn-success'>Accept</button>
                    </div>
                    <div className="col-md-12  col-lg-1 mt-2 text-center mx-3">
                        <button className='btn btn-danger'>Reject</button>
                    </div>
            </div>
            <div className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border">
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                    <a href="https://storage.cloud.google.com/bnmo-data/ktm-13520022%20(1).jpg_1658317327116">
                            <img className='img-fluid' src='https://storage.cloud.google.com/bnmo-data/ktm-13520022%20(1).jpg_1658317327116' alt="" style={{ height:'100px' }}/>
                        </a>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <h5>Primesz</h5>
                        <p>Primanda Adyatma Hafiz</p>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center"></div>
                    <div className="col-md-12 col-lg-1 mt-2 text-center mx-3">
                        <button className='btn btn-success'>Accept</button>
                    </div>
                    <div className="col-md-12  col-lg-1 mt-2 text-center mx-3">
                        <button className='btn btn-danger'>Reject</button>
                    </div>
            </div>
            <div className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border">
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <a href="https://storage.cloud.google.com/bnmo-data/ktm-13520022%20(1).jpg_1658317327116">
                            <img className='img-fluid' src='https://storage.cloud.google.com/bnmo-data/ktm-13520022%20(1).jpg_1658317327116' alt="" style={{ height:'100px' }}/>
                        </a>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <h5>Primesz</h5>
                        <p>Primanda Adyatma Hafiz</p>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-2 text-center"></div>
                    <div className="col-md-12 col-lg-1 mt-2 text-center mx-3">
                        <button className='btn btn-success'>Accept</button>
                    </div>
                    <div className="col-md-12  col-lg-1 mt-2 text-center mx-3">
                        <button className='btn btn-danger'>Reject</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default RegisVerification