import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css';

export const Nav = () => {
  return (
   <>
    <div className='menu'>
    <Link to="/clock"><h3><i class="ri-timer-flash-line"></i></h3></Link>
      <Link to="/leave"> <h3><i class="ri-play-fill"></i></h3></Link>
      {/* <h3 className='clock'><Clock/></h3> */}
     
      {/* <button onClick={navigationToLeave}>leave</button> */}
      {/* <input type="submit" onClick={navigationToLeave} value="Leave" /> */}
      {/* <h3  onClick={()=>setShowModal(true)}><i class="ri-play-fill"></i></h3> */}
     </div>
      {/* {showModal &&  <Leave onClose={()=>setShowModal(false)}/> } */}
   </>
  )
}
