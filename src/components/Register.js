import React from 'react'
import {Helmet} from "react-helmet";

function Register() {
  return (
    <div className='container'>
         <Helmet>
                <style>{'body { background-color: #f4f5f6; }'}</style>
        </Helmet>
        <div>
            <div className='row mt-3 mx-1 justify-content-md-center align-items-center'>
                <div className='my-2 border border-dark border-opacity-25 border-2 rounded-1 bg-white col-12 col-md-8 col-lg-6 p-5'>
                    <h2>Register Account</h2>
                    <form action="" className='mt-4'>
                        <div className='border-top border-bottom py-3'>
                            <div className="mb-3">
                                <label className="form-label font-weight-bold fs-6">Username</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label font-weight-bold fs-6">Name</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label font-weight-bold fs-6">Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label font-weight-bold fs-6">Upload Identity Card</label>
                                <input className="form-control-file" type="file"/>
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