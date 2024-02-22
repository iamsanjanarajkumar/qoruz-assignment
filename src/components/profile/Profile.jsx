import React from 'react'
import './profile.css'

function Profile() {
  return (
   <div className="container">
     <div className='d-flex justify-content-between p-2 align-items-center'>
        <div className="profile-left d-flex gap-2">
            <img src="https://storage.zoominfo.com/5564123797" alt="" />
            <div>
                <span className="fs-6  text-secondary d-block">Curated by</span>
                <span className="fs-5 d-block fw-bold">Jithin</span>
                <span className="small  text-secondary d-block">Qoruz</span>
            </div>
        </div>
        <p className='fs-5 d-none d-md-block'>Updated on Feb 25th 2024</p>
    </div>
   </div>
  )
}

export default Profile