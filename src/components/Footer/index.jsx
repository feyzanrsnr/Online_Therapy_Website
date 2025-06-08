import React from 'react'
import { Link } from 'react-router'

const url = 'https://github.com/feyzanrsnr'


function index() {
  return (
    <footer className='footer'>
      <p className='text'>
        Copyright &#169; 2025 |All right received| Designed and Developed by <Link target='blank' to={url} style={{textDecoration:'underline'}}>Feyzanur Sener</Link>
      </p>
      
    </footer>
  )
}

export default index