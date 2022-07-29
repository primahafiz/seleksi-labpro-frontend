import React, {useState,useEffect} from 'react'
import {Helmet} from "react-helmet"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Search() {

    const [searchInput, setSearchInput] = useState('')
    const [searchData, setSearchData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      checkAccess()
    })

    const checkAccess = async () => {
      const response = await axios.get("/api/isAdmin",{
        withCredentials:true
      });
      console.log(response.data)
      if(response.data.illegalAccessRedirect){
        navigate(response.data.illegalAccessRedirect)
      }
    }

    const getSearchData = async (e) => {
        setSearchInput(e.target.value)
        const response = await axios.get("/api/search",
        {
            params : {
                searchInput : e.target.value
        }
        },{
          withCredentials:true
        });
        setSearchData(response.data.data);
      }

      const getProfileUrl = (username) => {
        return `/admin/profile/${username}`
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
                  <a className="nav-link text-white" href="/admin/verify-registration">Regis Data</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/admin/verify-request" aria-disabled="true">Request Data</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white font-weight-bold" href="/admin/search" aria-disabled="true">Search Customer</a>
                </li>
              </ul>
              <form onSubmit={logoutUser} className="form-inline">
                <button className="btn shadow-none text-white border-0 px-0" type="submit">Log out</button>
              </form>
            </div>
          </nav>
        </div>
        <div className="container mx-3 mt-4">
            <div className="row justify-content-center align-items-center">
                <input class="col-9 form-control mr-sm-2 mb-4" type="search" placeholder="Search by username" aria-label="Search" value={searchInput} onChange={(e) => getSearchData(e)}/>
            </div>
            <div className="row justify-content-center" style={{ maxHeight : '70vh' , overflow:'auto'}}>
                {searchData.map((customer,index) => (
                    <a href={getProfileUrl(customer.Username)} className="text-decoration-none col-9 my-2 bg-white border p-2 rounded">
                        <a className='text-decoration-none'>{customer.Username}</a>
                        <a className='text-decoration-none'> - </a>
                        <a className='text-decoration-none'>{customer.Name}</a>
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Search