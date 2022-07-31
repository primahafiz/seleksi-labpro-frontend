import React, {useState,useEffect} from 'react'
import {Helmet} from "react-helmet";
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function RegisVerification() {

  const [regisData,setRegisData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    checkAccess()
  },[])

  const checkAccess = async () => {
    const response = await axios.get("https://api-bnmo.herokuapp.com/api/isAdmin",{
      withCredentials:true
    });
    console.log(response.data)
    if(response.data.illegalAccessRedirect){
      navigate(response.data.illegalAccessRedirect)
    }else{
      await getRegisData()
    }
  }

  const getRegisData = async () => {
    const response = await axios.get("https://api-bnmo.herokuapp.com/api/admin/verify-registration",{
      withCredentials:true
    });
    setRegisData(response.data.data);
  }

  const acceptRegis = async(username) => {
    await axios.put(`https://api-bnmo.herokuapp.com/api/admin/verify-registration/accept/${username}`,{
      withCredentials:true
    });
    window.location.reload()
  }

  const declineRegis = async(username) => {
    await axios.put(`https://api-bnmo.herokuapp.com/api/admin/verify-registration/decline/${username}`,{
      withCredentials:true
    });
    window.location.reload()
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
                  <a className="nav-link text-white" href="/admin">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white font-weight-bold" href="/admin/verify-registration">Regis Data</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/admin/verify-request" aria-disabled="true">Request Data</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/admin/search" aria-disabled="true">Search Customer</a>
                </li>
              </ul>
              <form onSubmit={logoutUser} className="form-inline">
                <button className="btn shadow-none text-white border-0 px-0" type="submit">Log out</button>
              </form>
            </div>
          </nav>
        </div>
        <div className="container mb-3">
            <h4 className='my-4 mx-5'>Unverified Registration Data</h4>
            {regisData.map((user,index) => (
                <div key={user.Username} className="row justify-content-center align-items-center bg-white mt-3 p-4 mx-5 border rounded-2">
                        <div className="col-md-12 col-lg-3 mt-2 text-center">
                        <a href={user.Photo}>
                                <img className='img-fluid' src={user.Photo} alt="" style={{ height:'100px' }}/>
                            </a>
                        </div>
                        <div className="col-md-12 col-lg-3 mt-2 text-center">
                            <h5>{user.Username}</h5>
                            <p>{user.Name}</p>
                        </div>
                        <div className="col-md-12 col-lg-2 mt-2 text-center">
                            <p>{user.formattedDate}</p>
                        </div>
                        <div className="col-md-12 col-lg-1 mt-2 text-center"></div>
                        <div className="col-md-12 col-lg-1 mt-2 text-center mx-3">
                            <button className='btn btn-success' onClick={() => acceptRegis(user.Username)}>Accept</button>
                        </div>
                        <div className="col-md-12  col-lg-1 mt-2 text-center mx-3">
                            <button className='btn btn-danger' onClick={() => declineRegis(user.Username)}>Decline</button>
                        </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RegisVerification