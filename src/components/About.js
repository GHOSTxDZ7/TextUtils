import React from 'react'

export default function About(props) {
  return (
    <div className="container" style={{color: props.mode === 'light' ?'black':'white'}}>
        <h1>Know about us:</h1>
        <p>TextUtils is a Utility where you can manipulate you text as per your choice.</p>
        <h1 className='thanks'>Thank-you for using TextUtils</h1>
    </div>
  )
}
