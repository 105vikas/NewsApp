import React from 'react'
import loading from './Loding.gif'

function Spinner(){
    return (
      <div className='text-center'>
        <img className="my-3" src={loading} alt="loading" />
      </div>
    )
}
export default Spinner