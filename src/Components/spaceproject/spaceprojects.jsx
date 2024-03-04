import React from "react"
import './spaceprojects.css'
import developimg from '../../assets/developimg.png'


export const Projects = ({title,text}) => {
    return(
        <div className="ContentProject" >
            <div className="Imgspace" >
                <img className="Developimg" src={developimg} alt="develop" />
            </div>      
            <div className="TextCub" >
                <h2 className="TitleProject">{title}</h2>
                <p className="TextProject">{text}</p>
                 <a className="LinkProject" href='../pages/Homes/Home1'>Ir al proyecto</a>
            </div>

        </div>
    )
}
