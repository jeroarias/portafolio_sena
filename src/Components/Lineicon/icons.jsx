import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import './icons.css';

export const Lineicon = () => {
    return(
        <div className="lineicon">
            <a className="colora" target="blank" href="https://www.linkedin.com/in/jeronimo-arias-mosquera-87ab1529a/"><BsLinkedin /></a>
            <a className="colora" target="blank" href="https://www.facebook.com/santijeroo?locale=es_LA"><BsFacebook /></a>
            <a className="colora" target="blank" href="https://www.instagram.com/arias_jer0/"><BsInstagram /></a>
            <a className="colora" target="blank" href="https://cdn.discordapp.com/attachments/1143997610345115799/1214279455858761738/404.jpg?ex=65f888de&is=65e613de&hm=9796d43389c7a61649dd68c33379f409e7c0dfdca17d3d65ec80214b4393741f&"><BsTwitter /></a>
            <a className="colora" target="blank" href="https://cdn.discordapp.com/attachments/1143997610345115799/1214278555278770196/wp.png?ex=65f88807&is=65e61307&hm=16893abde45a340f4d302b3acb0ca47e40afeb295db276abea7822d2bbd26e23&"><BsWhatsapp /></a>
        </div>
    )
}