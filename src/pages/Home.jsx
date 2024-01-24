import React from 'react'
import { Link } from 'react-router-dom/dist'

const Home = () => {
  return (
    <div className='min-h-screen text-red-400 bg-gray-700 flex flex-col items-center justify-center'>
        move to TBC x USAID page from navbar or you can <Link to="/usaid" className='text-blue-500'>click here</Link>
       
    </div>

  )
}

export default Home