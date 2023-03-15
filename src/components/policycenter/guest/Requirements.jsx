import React from 'react'
import './Requirements.css'
const Requirements = () => {
  return (
    <div className='container-fluid requirements-root'>
        <div className=' requirements'>
            <div className='row'>
                <div className='col-9'>
                    <h3>Requirements info</h3>
                    <ol>
                        <li>Full Name</li>
                        <li>Valid phone number</li>
                        <li>Valid living address</li>
                        <li>Valid email address</li>
                        <li>Valid Bank account info ( Subject to requirement- for refund issue )</li>
                        <li>ID card ( Subject to requirement- for refund or identify issue )</li>
                    </ol>
                    <p>Customers shall use this BaiBai365.com website platform to buy the products. If someone uses this website, it means that they agree the terms and conditions.</p>
                </div>
                <div className='col-3'>
                    <div>
                    <label for="inputState" className="form-label"><h4>Product category</h4></label>
                    <select id="inputState" className="form-select">
                    <option selected>Select a category</option>
                    <option>Contry Wise</option>
                    <option>Bangladeshi Food Items</option>
                    <option>Indian Food Items</option>
                    <option>Nepali Food Items</option>
                    </select>
                    </div>
                    <div className='translate'>
                    <label for="inputState" className="form-label"><h4>Translate</h4></label>
                    <select id="inputState" className="form-select">
                    <option>Arabic</option>
                    <option>Bengali</option>
                    <option selected>English</option>
                    <option>French</option>
                    <option>Italian</option>
                    <option>Japanese</option>
                    <option>Nepali</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Requirements