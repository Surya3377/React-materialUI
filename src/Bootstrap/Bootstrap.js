import React from 'react'

const Bootstrap = () => {
  return (
    <div className='container mt-3'>
       <h1 className='bg-muted p-3 text-red'>this bg is muted</h1>       
       <h1 className='bg-success p-3'>this bg is muted</h1>
       <h1 className='bg-success'>this bg is muted</h1>
       <h1 className='bg-info'>this bg is muted</h1>
       <h1 className='bg-warning text-white'>this bg is muted</h1>
       <h1 className='bg-danger'>this bg is muted</h1>
       <h1 className='bg-dark'>this bg is muted</h1>
       <h1 className='bg-light'>this bg is muted</h1>
       <h1 className='bg-white'>this bg is muted</h1>
       <button className=' btn bg-red text-red disabled '>primary</button>
    </div>
  )
}

export default Bootstrap
