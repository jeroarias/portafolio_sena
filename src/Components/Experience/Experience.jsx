import React from "react"
import './Experience.css'
import code from '../../assets/code.png'

export const Experience = ({tecno,level}) => {
    return(
        <div className="ContentExperience" >      
            <img className="Experienceimg" src={code}/>
            <h2 className="tecnoname">{tecno}</h2>
            <div className="contentvar">
                <div className="Progress" >
                <hr className="VarProgress"/>
                </div>
                <p className="Level">{level}</p>
            </div>
   
        </div>
        
    )
}