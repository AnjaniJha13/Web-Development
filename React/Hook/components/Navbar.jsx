import React, { useEffect } from 'react'

const Navbar = ({color}) => {
   //Case1: Run on every render
   useEffect(() => {
    alert("Hey I will run on every render")
  })

 //Case2: Run only on first render
  useEffect(() => {
    alert("Hey welcome to my page.This is the first render")
    return () => {
      alert("component was unmounted")
    }
  }, [])
  
//Case3: Run only when certain values change
    useEffect(() => {
      alert("Hey I am running because color was changed")
    }, [color])
 
     
  return (
    <div>
        I am navbar of {color} color  hehe..
      
    </div>
  )
}

export default Navbar
