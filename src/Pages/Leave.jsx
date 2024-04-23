import React from 'react'
import {Link} from "react-router-dom"
const Leave=()=>{
 




  return (
    <>
        <div className='l-main'>
        <div className='leave-con'>
        <Link to="/">

        <button className='leave-back'><i class="ri-close-line"></i></button>
        </Link>
          <form>
            <label>Member</label>
            <input className='input' type='text' />

            <div>
            <label>Select a policy: </label>
            <select className='policy'>
              <option value="causal">Causal</option>
              <option>Medical</option>
            </select>
            <h6 className='text'>What type of time off are they taking?</h6>
            </div>
            
              <div className='date'>
              <h5 className='day'>Days</h5>
            <label > Start Date</label>
            <input className='s-date' type='date' placeholder='Start date' required/><br></br>
            <label> End Date(optional)</label>
            <input   className='e-date' type='date' placeholder='End date'/>
           </div>


           <div className='notes' >
          <h5 className='m'> <i class="ri-menu-fill"></i></h5>
            <textarea className='reason'  type="text" cols="30" rows="5" placeholder='Add a reason or note (optional)'></textarea>
           </div>

           <div className='btnn'>
            <button className='btns'>Cancel</button>
            <button className='btns'>Submit</button>
           </div>
           </form>

          
        </div>

      </div>
    </>
  )
}

export default Leave