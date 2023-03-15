import React from 'react'
import { Link } from 'react-router-dom'
import './Vendorregister.css'
const Vendorregister = () => {
  return (
    <div>
        <div className='vendorRegisterPage'>
        <div className="row justify-content-center">
            <div className='col-md-5'>
                <h2>Vendor Registration</h2><br/>
                <input placeholder='Email' type='email' className='inputField'/> <br/><br/>
                <input placeholder='Store Name' type='text' className='inputField'/> <br/><br/>
                <p>https://baibai365.com/store/[your_store]</p>
                {/* <input placeholder='Phone' type='tel' className='inputField'/> <br/><br/> */}
                <input placeholder='Password' type='password' className='inputField'/> <br/><br/>
                <input placeholder='Confirm Password' type='password' className='inputField'/> <br/><br/>
                <p className='rememberMe'>Accept <Link to='/terms'>Terms & Condition</Link></p>
                <input type="checkbox" className='form-check-input'/> <br/>
                <button className='btn btn-warning w-50 p-2'>Register</button> 
                <br/>
                <br/>
                <p>Already have an account?<Link to="/login">Login here</Link></p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Vendorregister