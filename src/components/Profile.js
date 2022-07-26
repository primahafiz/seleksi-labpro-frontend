import React, {useState,useEffect} from 'react'
import {Helmet} from "react-helmet";
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';

function Profile() {

    const [username,setUsername] = useState('')
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [balance, setBalance] = useState(0)
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
          await getProfile()
        }
        setLoading(false)
      }
    
      const getProfile = async () => {
        const response = await axios.get("/api/profile",{
          withCredentials:true
        });
        console.log(response.data)
        setUsername(response.data.data.Username)
        setName(response.data.data.Name)
        setPhoto(response.data.data.Photo)
        setBalance(response.data.balance)
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
                    <a className="nav-link text-white" href="/transfer" >Transfer</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/history">History</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white font-weight-bold" href="/profile">Profile</a>
                  </li>
                </ul>
                <form onSubmit={logoutUser} className="form-inline">
                  <button className="btn shadow-none text-white border-0 px-0" type="submit">Log out</button>
                </form>
              </div>
            </nav>
          </div>
          <div className="container bg-white mt-4 border">
              <div className="py-5 px-3">
                  <h3 className='border-bottom border-dark pb-2'>Profile</h3>
                  <div className='row justify-content-center'>
                      <div className="text-dark my-2 col-md-10 col-lg-4 py-5">
                          <img src={photo} alt="" style={{ maxWidth : '100%', maxHeight:'30vh' }}/>
                      </div>
                      <div className="text-dark my-2 col-md-10 col-lg-8 py-5">
                      <table class="table table-striped">
                          <tbody>
                              <tr>
                                  <td className='font-weight-bold'>Username</td>
                                  <td>{username}</td>
                              </tr>
                              <tr>
                                  <td className='font-weight-bold'>Name</td>
                                  <td>{name}</td>
                              </tr>
                              <tr>
                                  <td className='font-weight-bold'>Balance</td>
                                  <td>{balance} IDR</td>
                              </tr>
                          </tbody>
                      </table>   
                      </div>
                  </div>
              </div>
          </div>
        </div>)}
    </div>
  )
}

export default Profile