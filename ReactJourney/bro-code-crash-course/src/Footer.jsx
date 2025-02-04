import React from 'react'
import Picture from './components/Picture/Picture'

function Footer() {


  return (
    <>
        <hr/>
        <Picture/>
        <footer>
            <p>&copy; {new Date().getFullYear()} Your website name</p>
        </footer>
    </>
  )
}

export default Footer