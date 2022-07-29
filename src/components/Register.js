import axios from 'axios';
import React, {useState} from 'react'
import {Helmet} from "react-helmet";
import { useNavigate } from "react-router-dom"

function Register() {
    const [username,setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState(null)
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('')

    const addUser = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('username',username)
        formData.append('password',password)
        formData.append('name',name)
        formData.append('photo',photo)
        const response = await axios.post('/api/register', formData,{withCredentials:true})
        if(response.data.error){
            setErrorMsg(response.data.error)
        }else{
            navigate(response.data.redirectPath)
        }
    }

    const handleChange = async(e) => {
        if(e.target.files[0]){
            setPhoto(e.target.files[0])
        }
    
    }

  return (
    <div className='container'>
         <Helmet>
                <style>{'body { background-color: #f4f5f6; }'}</style>
        </Helmet>
        <div>
            <div className='row mt-3 mx-1 justify-content-md-center align-items-center'>
                <div className='my-2 border border-dark border-opacity-25 border-2 rounded-1 bg-white col-12 col-md-8 col-lg-6 p-5'>
                    <h2>Register Account</h2>
                    <form onSubmit={addUser} className='mt-4'>
                        <div className='border-top border-bottom py-3'>
                            <div className="mb-3">
                                <label className="form-label font-weight-bold fs-6">Username</label>
                                <input className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label font-weight-bold fs-6">Name</label>
                                <input className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label font-weight-bold fs-6">Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label font-weight-bold fs-6">Upload Identity Card</label>
                                <input className="form-control-file" type="file" onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                              <a className="text-danger">{errorMsg}</a>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between mt-4'>
                            <button type="submit" class="btn font-weight-bold fs-6 text-white" style={{backgroundColor : '#137cbd'}}>Register</button>
                            <p>
                                Have account already?&nbsp;
                                <a href="/login">Log in now</a>
                            </p>
                        </div>
                    
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register