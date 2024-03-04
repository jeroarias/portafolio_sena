import React from "react"
import './References.css'
 
export const References = ({name,post,phone,adres}) => {
    return(
        <div className="ContentReference" >
            <h2 className="NameR" >{name}</h2>
            <p className="PostR" >{post}</p>
            <p className="PhoneR" >{phone}</p>
            <p className="AdresR" >{adres}</p>
        </div>
    )
}
