import React from 'react'
import { Profile } from '../../Components/Profile/Profile'
import { Navbar } from '../../Components/Navbar/Navbar'
import './Colum1.css'
import { Logo } from '../../Components/LogoSena/Logo'
import { Lineicon } from '../../Components/Lineicon/icons'


export const Colum1 = () => {
  return (
    <div className='colum1'>
       <Profile/>
       <h1 className='name'>JERONIMO ARIAS MOSQUERA</h1>
       <hr className='line'/>
       <Navbar/>
       <Logo/>
       <Lineicon/>
    </div>
  )
}
