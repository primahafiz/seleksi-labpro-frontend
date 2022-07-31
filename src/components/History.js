import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Helmet} from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong, faCircleCheck, faCircleXmark, faHourglass} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"

function History() {

  const [transactionHistory, setTransactionHistory] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [maxPage, setMaxPage] = useState(0)
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    checkAccess()
  },[])

  const checkAccess = async () => {
    const response = await axios.get("https://api-bnmo.herokuapp.com/api/isCustomer",{
      withCredentials:true
    });
    console.log(response.data)
    if(response.data.illegalAccessRedirect){
      navigate(response.data.illegalAccessRedirect)
    }else{
      await getTransactionHistory()
    }
  }

  const getTransactionHistory = async (page) => {
    const response = await axios.get("https://api-bnmo.herokuapp.com/api/history",
    {
      params : {
        page : page
      }
    },
    {
      withCredentials:true
    });
    setTransactionHistory(response.data.ans);
    setUsername(response.data.username)
    setMaxPage(response.data.maxPage)
  }

  const toNextPage = async () => {
    if(currentPage != maxPage){
      await getTransactionHistory(currentPage+1)
      setCurrentPage(currentPage+1)
    }
  }

  const toPreviousPage = async() => {
    if(currentPage != 1){
      await getTransactionHistory(currentPage-1)
      setCurrentPage(currentPage-1)
    }
  }

  const logoutUser = async (e) => {
    e.preventDefault()
    await axios.post("https://api-bnmo.herokuapp.com/api/logout",{
      withCredentials:true
    });
    navigate('/login')
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
                  <a className="nav-link text-white" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/request">Request</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/transfer" >Transfer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white font-weight-bold" href="/history">History</a>
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
        <div className="container mb-3">
            <h4 className='my-4 mx-5'>History Transaction</h4>
            {transactionHistory.map((trans,index) => {
                if(trans.TypeTransaction == 'request'){
                  if(trans.IsProceed == 0){
                    return (
                    <div className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border rounded-2">
                      <div className="col-md-12 col-lg-3 mt-2 text-center">
                          <h5>Request Transaction</h5>
                      </div>
                      <div className="col-md-12 col-lg-3 mt-2 text-center">
                          <a className='font-weight-bold mx-3'>Pending</a>
                          <FontAwesomeIcon icon={faHourglass}/>
                      </div>
                      <div className="col-md-12 col-lg-1 mt-2 text-center"></div>
                      <div className="col-md-12 col-lg-2 mt-2 text-center">
                            <p>{trans.createdAt}</p>
                        </div>
                      <div className="col-md-12 col-lg-2 mt-2 text-center mx-3">
                          {trans.RequestValue<0?
                            (<h5>{trans.RequestValue} {trans.RequestCurrency}</h5>):
                            (<h5>+{trans.RequestValue} {trans.RequestCurrency}</h5>)
                          }
                      </div>
                    </div>
                   )
                  }
                  else{
                    if(trans.IsAccepted == 0){
                      return (
                        <div className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border rounded-2">
                          <div className="col-md-12 col-lg-3 mt-2 text-center">
                              <h5>Request Transaction</h5>
                          </div>
                          <div className="col-md-12 col-lg-3 mt-2 text-center">
                              <a className='font-weight-bold mx-3'>Declined</a>
                              <FontAwesomeIcon icon={faCircleXmark} style={{color:'red'}}/>
                          </div>
                          <div className="col-md-12 col-lg-1 mt-2 text-center"></div>
                          <div className="col-md-12 col-lg-2 mt-2 text-center">
                            <p>{trans.createdAt}</p>
                          </div>
                          <div className="col-md-12 col-lg-2 mt-2 text-center mx-3">
                          {trans.RequestValue<0?
                            (<h5>{trans.RequestValue} {trans.RequestCurrency}</h5>):
                            (<h5>+{trans.RequestValue} {trans.RequestCurrency}</h5>)
                          }
                          </div>
                        </div>
                      )
                    }else{
                        return (
                          <div className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border rounded-2">
                            <div className="col-md-12 col-lg-3 mt-2 text-center">
                                <h5>Request Transaction</h5>
                            </div>
                            <div className="col-md-12 col-lg-3 mt-2 text-center">
                                <a className='font-weight-bold mx-3'>Accepted</a>
                                <FontAwesomeIcon icon={faCircleCheck} style={{color:'green'}}/>
                            </div>
                            <div className="col-md-12 col-lg-1 mt-2 text-center"></div>
                            <div className="col-md-12 col-lg-2 mt-2 text-center">
                              <p>{trans.createdAt}</p>
                            </div>
                            <div className="col-md-12 col-lg-2 mt-2 text-center mx-3">
                            {trans.RequestValue<0?
                            (<h5>{trans.RequestValue} {trans.RequestCurrency}</h5>):
                            (<h5>+{trans.RequestValue} {trans.RequestCurrency}</h5>)
                            }
                            </div>
                          </div>
                        )
                    }
                  }
                }else{
                    if(trans.UsernameSender == username){
                      return (
                        <div className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border rounded-2">
                          <div className="col-md-12 col-lg-3 mt-2 text-center">
                              <h5>Transfer Transaction</h5>
                          </div>
                          <div className="col-md-12 col-lg-3 mt-2 text-center">
                              <a className='font-weight-bold mx-3'>{trans.UsernameSender}</a>
                              <FontAwesomeIcon icon={faArrowRightLong}/>
                              <a className='font-weight-bold mx-3'>{trans.UsernameReceiver}</a>
                          </div>
                          <div className="col-md-12 col-lg-1 mt-2 text-center"></div>
                          <div className="col-md-12 col-lg-2 mt-2 text-center">
                            <p>{trans.createdAt}</p>
                          </div>
                          <div className="col-md-12 col-lg-2 mt-2 text-center mx-3">
                              <h5>- {trans.TransferValue} {trans.TransferCurrency}</h5>
                          </div>
                        </div>
                      )
                    }else{
                      return(
                        <div className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border rounded-2">
                          <div className="col-md-12 col-lg-3 mt-2 text-center">
                              <h5>Transfer Transaction</h5>
                          </div>
                          <div className="col-md-12 col-lg-3 mt-2 text-center">
                              <a className='font-weight-bold mx-3'>{trans.UsernameReceiver}</a>
                              <FontAwesomeIcon icon={faArrowLeftLong}/>
                              <a className='font-weight-bold mx-3'>{trans.UsernameSender}</a>
                          </div>
                          <div className="col-md-12 col-lg-1 mt-2 text-center"></div>
                          <div className="col-md-12 col-lg-2 mt-2 text-center">
                            <p>{trans.createdAt}</p>
                          </div>
                          <div className="col-md-12 col-lg-2 mt-2 text-center mx-3">
                              <h5>+ {trans.TransferValue} {trans.TransferCurrency}</h5>
                          </div>
                        </div>
                      )
                    }
                }
            
            })}
        </div>
        <div className="pagination justify-content-center my-3">
          <li class="page-item"><button class="page-link" href="#" onClick={toPreviousPage} style={{ width : '90px' }}>Previous</button></li>
          <li class="page-item"><button class="page-link" href="#">{currentPage}</button></li>
          <li class="page-item"><button class="page-link" href="#" onClick={toNextPage} style={{ width : '90px' }}>Next</button></li>
        </div>
    </div>
  )
}

export default History