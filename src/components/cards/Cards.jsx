import React from 'react'
import './cards.css'
import Profile from '../profile/Profile'


const Cards = () => {
  return (

   <>
   <div className="d-none d-md-block">
    <Profile/>
   </div>
   <div className="bg-light">
     <div className='container py-3'>
        <div className="">
            {
                Array(12).fill(null).map((_, index)=>(
                    <div className="py-2 my-card p-2 rounded-4 mb-3 bg-white">
            
            <div className="row">
            <div className="col-12 col-md-1">
               <div className="d-flex gap-2">
               <img src="https://media.licdn.com/dms/image/C510BAQGRzovMfL6kuQ/company-logo_200_200/0/1630592888210/mslagency_logo?e=2147483647&v=beta&t=X_vYJb7eon75d2M95HErhI7vFprWmzioqPGOmh0h4j8" alt="" className="left-image" />
               <div className="top-right d-block d-md-none">
                <h3>MSL(Global)</h3>
               <p className=''> <i class="bi bi-buildings"></i>1,001-5,000 employees</p>
               </div>
               </div>
            </div>
            <div className="col-12 col-md-9">
            <div>
                    <h3 className='d-none d-md-block'>MSL(Global)</h3>
                    
                    <div className='d-flex gap-3 mt-3 flex-wrap'>
                        <small className='bg-light p-1 rounded-2 small'>Brand Management</small>
                        <small className='bg-light p-1 small rounded-2'>Community Management</small>
                    </div>
                    <p className='fs-5 mt-3'>The Mavericks: Transforming brands through strategic reputation management and consumer management</p>
                    <div className='d-flex gap-2'>
                    <p className=' d-none d-md-block'><i class="bi bi-buildings mx-1"></i> 1,001-5,000 employees</p>
                    <p className='fs-6'><i class="bi bi-geo-alt mx-1"></i>Paris</p>
                    <p className='fs-6'><i class="bi bi-calendar2-week mx-1"></i>2009</p>
                    <p className='fs-6 '><i class="bi bi-boombox mx-1"></i>PR Agency</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-2">
                <div className=" d-flex align-items-center h-100 mb-3">
                <button className='btn-main btn btn-outline-dark w-100 fs-4 rounded-3'>Post Brief <i className='bi bi-arrow-up-right'></i></button>
                </div>
           
            </div>
            </div>
            <hr className='d-none d-md-block'/>
            </div>
                ))
            }
        </div>
       
    </div>
    
   </div>
   <div className="d-block d-md-none">
    <Profile/>
   </div>
   </>
  )
}

export default Cards
