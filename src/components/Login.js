import axios from 'axios';
import React, {useState} from 'react'
import {Helmet} from "react-helmet";
import { useNavigate } from "react-router-dom"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()

    const loginUser = async(e) => {
        e.preventDefault()
        const response = await axios.post('https://api-bnmo.herokuapp.com/api/login', {
            username,
            password
        },{
            withCredentials:true
        })
        if(response.data.error){
            setErrorMsg(response.data.error)
        }else{
            navigate(response.data.redirectPath)
        }
        
    }

  return (
    <div className='container'>
        <Helmet>
                <style>{'body { background-color: #f4f5f6; }'}</style>
        </Helmet>
        <div className='mt-5'>
            <div className='row mt-5 mx-1 justify-content-md-center align-items-center'>
                <div className='mt-5 border border-dark border-opacity-25 border-2 rounded-1 bg-white col-12 col-md-8 col-lg-6 p-5'>
                    <h2>Log in</h2>
                    <form onSubmit={loginUser} className='mt-4'>
                        <div className='border-top border-bottom py-3'>
                            <div className="mb-3">
                                <label className="form-label font-weight-bold fs-6">Username</label>
                                <input className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label font-weight-bold fs-6">Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                              <a className="text-danger">{errorMsg}</a>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between mt-4'>
                            <button type="submit" class="btn font-weight-bold fs-6 text-white" style={{backgroundColor : '#137cbd'}}>Log in</button>
                            <p>
                                Don't have account? &nbsp;
                                <a href="/register">Register now</a>
                            </p>
                        </div>
                    
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login