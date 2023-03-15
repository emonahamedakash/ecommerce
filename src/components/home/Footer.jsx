import { Link } from 'react-router-dom'
import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer container-fluid'>
        <div className='footerMain'>
            <div className='row'>
                <div className='col-md-3'>
                    <h3>
                        Offline Store
                    </h3><hr/>
                    <p className='footerptag'>
                    Post No: 169-0073<br/>
                    Tokyo, Shinjuku Ku, Hyakunin 2-10-8 F1<br/>
                    Cell1. : 080 4170 1199<br/>
                    Cell2. : 080 3311 0101<br/>
                    </p>
                </div>
                <div className='col-md-3'>
                    <h3>
                        Important Links
                    </h3><hr/>
                    <p className='footerptag'>
                    <Link to='/allcategory' className='footerLinks'>All Category</Link><br/>
                    <Link to='/about' className='footerLinks'>About Us</Link><br/>
                    <Link to='/contact' className='footerLinks'>Contact Us</Link><br/>
                    <Link to='/seller' className='footerLinks'>Seller Center</Link>
                    </p>
                </div>
                <div className='col-md-3'>
                    <h3>
                        Head Office
                    </h3><hr/>
                    <p className='footerptag'>
                    169-0074 Tokyo, Shinjuku Kita Shinjuku 3-4-3 Plaza Kita Shinjuku Building 104<br/>
                    Phone : 03 4400 1662<br/>
                    Fax : 03 4400 1663<br/>
                    Cell : 080 4170 1199<br/>
                    </p>
                </div>
                <div className='col-md-3'>
                    <h3>
                        Our Mobile App
                    </h3><hr/>
                    <p>
                    <img className='appstorelogo' src='https://www.trianglemarketingclub.com/dev-site/wp-content/uploads/2018/01/Android-App-Store-logos.png' alt='appstore'/>
                    </p>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <hr/>
            <p>© 2022 BaiBai365.com</p>
            <hr/>
        </div>
    </div>
  )
}
