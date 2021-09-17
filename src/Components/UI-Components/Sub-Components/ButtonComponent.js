import React from 'react'
import './buttonComponent.css'

const ButtonComponent = ({color, bgColor, borderRad, outline, text, disabled, bootstrapClasses}) => {
   return (
      <button className={bootstrapClasses}>{text}</button>
   )
}

export default ButtonComponent