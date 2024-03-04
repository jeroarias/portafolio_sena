import React from 'react'
import logoSena from '../../assets/logoSena.png'
import './Subimg.css'

export const Subimg = ({content}) => {
  return (
    <>
    <div className="Content">
        <img className="imgLogo" src={logoSena} alt="logo" />
        <h2 className="subContent">{content}</h2>
    </div>
    <hr className="linegreen" />
    </>
  )
}
