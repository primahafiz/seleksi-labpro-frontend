import React, {useState,useEffect} from 'react'
import {Helmet} from "react-helmet";
import axios from 'axios'

function RequestVerification() {

  const [requestData,setRequestData] = useState([])
  
  useEffect(() => {
    getRequestData()
  },[])

  const getRequestData = async () => {
    const response = await axios.get("/api/admin/verify-request",{
      withCredentials:true
    });
    setRequestData(response.data.data);
  }

  const acceptRequest = async (id) => {
    const response = await axios.put(`/api/admin/verify-request/accept/${id}`,{
      withCredentials:true
    });
    window.location.reload()
  }

  const declineRequest = async (id) => {
    const response = await axios.put(`/api/admin/verify-request/decline/${id}`,{
      withCredentials:true
    });
    window.location.reload()
  }

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
                  <a className="nav-link text-white" href="#">Regis Data</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white font-weight-bold" href="#" tabindex="-1" aria-disabled="true">Request Data</a>
                </li>
              </ul>
              <form className="form-inline">
                <button className="btn shadow-none text-white border-0 px-0" type="submit">Log out</button>
              </form>
            </div>
          </nav>
        </div>
        <div className="container mb-3">
            <h4 className='my-4 mx-5'>Unverified Request Data</h4>
            {requestData.map((reqData,index) => (
              <div key={reqData.IDRequest} className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border rounded-2">
                      <div className="col-md-12 col-lg-3 mt-2 text-center">
                          <h5>{reqData.Username}</h5>
                      </div>
                      <div className="col-md-12 col-lg-3 mt-2 text-center">
                          {reqData.RequestValue<0?
                          (<h5>{reqData.RequestValue} {reqData.RequestCurrency}</h5>):
                          (<h5>+{reqData.RequestValue} {reqData.RequestCurrency}</h5>)
                          }
                      </div>
                      <div className="col-md-12 col-lg-3 mt-2 text-center"></div>
                      <div className="col-md-12 col-lg-1 mt-2 text-center mx-3">
                          <button className='btn btn-success' onClick={() => acceptRequest(reqData.IDRequest)}>Accept</button>
                      </div>
                      <div className="col-md-12  col-lg-1 mt-2 text-center mx-3">
                          <button className='btn btn-danger' onClick={() => declineRequest(reqData.IDRequest)}>Decline</button>
                      </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default RequestVerification