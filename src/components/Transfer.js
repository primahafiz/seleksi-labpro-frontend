import React, {useState,useEffect} from 'react'
import {Helmet} from "react-helmet";
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';

function Transfer() {

  const [currency,setCurrency] = useState([])
  const [usernameReceiver, setUsernameReceiver] = useState('')
  const [transferValue, setTransferValue] = useState(0)
  const [transferCurrency, setTransferCurrency] = useState('IDR')
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    checkAccess()
  },[])

  const checkAccess = async () => {
    const response = await axios.get("/api/isCustomer",{
      withCredentials:true
    });
    console.log(response.data)
    if(response.data.illegalAccessRedirect){
      navigate(response.data.illegalAccessRedirect)
    }else{
      await getCurrency()
    }
    setLoading(false)
  }

  const getCurrency = async () => {
    const response = await axios.get("/api/currency",{
      withCredentials:true
    });
    console.log(response)
    setCurrency(response.data.currency)
  }

  const addTransfer = async (e) => {
    e.preventDefault()
    const response = await axios.post("/api/transfer",
    {
      usernameReceiver,
      transferValue,
      transferCurrency
    },{
      withCredentials:true
    });
    if(response.data.error){
      setErrorMsg(response.data.error)
    }else{
      window.location.reload()
    }
  }

  const logoutUser = async (e) => {
    e.preventDefault()
    await axios.post("/api/logout",{
      withCredentials:true
    });
    navigate('/login')
  }

  return (
  
    <div>
        <Helmet>
                <style>{'body { background-color: #f4f5f6; }'}</style>
        </Helmet>
        {loading? (
          <div className="d-flex justify-content-md-center align-items-center vh-100">
          <Spinner animation="border" size="lg" />
        </div>) :
        (<div>
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
                    <a className="nav-link text-white" href="/request">Request</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white font-weight-bold" href="/transfer">Transfer</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/history">History</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/profile">Profile</a>
                  </li>
                </ul>
                <form onSubmit={logoutUser} className="form-inline">
                  <button className="btn shadow-none text-white border-0 px-0" type="submit">Log out</button>
                </form>
              </div>
            </nav>
          </div>
          <div>
              <div className='row mx-2 mb-2 justify-content-md-center align-items-center'>
                  <div className='mt-5 border border-dark border-opacity-25 border-2 rounded-1 bg-white col-12 col-md-8 col-lg-6 p-5'>
                      <h2>Transfer Transaction</h2>
                      <form className='mt-4'>
                          <div className='border-top border-bottom py-3'>
                          <div className="mb-3">
                                  <label className="form-label font-weight-bold fs-6">Username Receiver</label>
                                  <input type='name' className="form-control" value={usernameReceiver} onChange={(e) => setUsernameReceiver(e.target.value)}/>
                              </div>
                              <div className="mb-3">
                                  <label className="form-label font-weight-bold fs-6">Value</label>
                                  <input type="number" className="form-control" value={transferValue} onChange={(e) => setTransferValue(parseInt(e.target.value,10))}/>
                              </div>
                              <div className="mb-3">
                                  <label className="form-label font-weight-bold fs-6">Currency</label>
                                  <select class="custom-select my-1 mr-sm-2" value={transferCurrency} onChange={(e) => setTransferCurrency(e.target.value)}>
                                      {currency.map((cur,index) => (
                                        <option key={cur} value={cur}>{cur}</option>
                                      ))}
                                  </select>
                              </div>
                              <div className="mb-3">
                                <a className="text-danger">{errorMsg}</a>
                              </div>
                          </div>
                          <div className='d-flex justify-content-between mt-4'>
                              <button type="submit" class="btn font-weight-bold fs-6 text-white" style={{backgroundColor : '#137cbd'}} onClick={addTransfer}>Submit</button>
                          </div>
                      
                      </form>
                  </div>
              </div>
          </div>
        </div>)}
    </div>
  )
}

export default Transfer