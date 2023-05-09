import React from 'react'
import "./button.css"
 
const Button = ({ className, onClick, text }) => {
  return <button className={className} onClick={onClick}>{text}</button>
}

export default Button