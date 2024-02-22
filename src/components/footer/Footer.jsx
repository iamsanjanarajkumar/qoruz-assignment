import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footerWrapper">
        <div className='container' >
       <footer className="py-5">
        <div className="row">
            <div className="col-md-5 description">
             <h5>Qoruz</h5>
             <p>Qoruz is an influencer marketing and intelligence platform, that enables superior influencer discovery, quick and easy influencer outreach.</p>
             <ul className="nav">
                <li className="nav-item mb-2">
                    <a  className='nav-link text-danger'><i class="bi bi-facebook"></i></a>
                </li>
                <li className="nav-item mb-2">
                    <a  className='nav-link text-danger'><i class="bi bi-instagram"></i></a>
                </li> 
                <li className="nav-item mb-2">
                    <a  className='nav-link text-danger'><i class="bi bi-twitter"></i></a>
                </li>
                <li className="nav-item mb-2">
                    <a className='nav-link text-danger'><i class="bi bi-linkedin"></i></a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-2 mb-3">
              
              <ul className="nav flex-column">
              <h5 className='text-danger d-flex'>Company<i class="bi bi-caret-down-fill d-block d-md-none mx-1"></i></h5>
                <li className="nav-item mb-2">
                    <a  className='nav-link p-0 text-white'>About us</a>
                </li>
                <li className="nav-item mb-2">
                    <a  className='nav-link p-0 text-white'>Pricing</a>
                </li>
                <li className="nav-item mb-2">
                    <a  className='nav-link p-0 text-white'>Book a demo</a>
                </li>
                <li className="nav-item mb-2">
                    <a  className='nav-link p-0 text-white'>Terms of use</a>
                </li>
                <li className="nav-item mb-2">
                    <a  className='nav-link p-0 text-white'>Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-2 mb-3">
              
              <ul className="nav flex-column">
              <h5 className='text-danger d-flex'>Why Qoruz<i class="bi bi-caret-down-fill d-block d-md-none mx-1"></i></h5>
                <li className="nav-item mb-2">
                    <a  className='nav-link p-0 text-white'>For Brands</a>
                </li>
                <li className="nav-item mb-2">
                    <a  className='nav-link p-0 text-white'>For Agencies</a>
                </li> 
              </ul>
            </div>
            <div className="col-12 col-md-2 mb-3">
              
              <ul className="nav flex-column">
              <h5 className='text-danger d-flex'>Resources<i class="bi bi-caret-down-fill d-block d-md-none mx-1"></i></h5>

                <li className="nav-item mb-2">
                    <a  className='nav-link p-0 text-white'>Find creators</a>
                </li>
                <li className="nav-item mb-2">
                    <a  className='nav-link p-0 text-white'>Case study</a>
                </li>
                <li className="nav-item mb-2">
                    <a  className='nav-link p-0 text-white'>Reports</a>
                </li>
                <li className="nav-item mb-2">
                    <a  className='nav-link p-0 text-white'>Blogs</a>
                </li>
                <li className="nav-item mb-2">
                    <a  className='nav-link p-0 text-white'>Playbooks</a>
                </li>
                <li className="nav-item mb-2">
                    <a  className='nav-link p-0 text-white'>Compare</a>
                </li>
                <li className="nav-item mb-2">
                    <a  className='nav-link p-0 text-white'>Marketing Tools</a>
                </li>
              </ul>
            </div>
        </div>
       <div className="copy d-flex gap-3">
       <p className='small'>2023 Qoruz, inc. All rights reserved</p>
       <div className="icons d-flex gap-2 text-danger d-block d-md-none">
       <i class="bi bi-facebook"></i>
       <i class="bi bi-instagram"></i>
       <i class="bi bi-twitter"></i>
       <i class="bi bi-linkedin"></i>
       </div>
       </div>
       </footer>
    </div>
    </div>
  )
}

export default Footer
