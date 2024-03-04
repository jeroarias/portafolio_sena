import React from "react";
import './Colum2.css'
import { Subimg } from "../../Components/Subimg/Subimg";
import { Projects} from "../../Components/spaceproject/spaceprojects";
import { References } from "../../Components/Refrences/Reference";
import { Experience } from "../../Components/Experience/Experience";

export const Colum2 = () => {
    return(
        <div className="colum2">
            <div className="text">
                <Subimg content='PROFILE' />
                <p>I am a passionate software developer with a strong
 academic background and outstanding soft skills. My
 self-taught approach has allowed me to acquire solid
 knowledge and solve complex problems. I am
 committed to contributing to the success of
 companies in the software development industry,
 bringing energy, creativity, and analytical skills.</p>
                <Subimg content='PROJECTS' />
                <div className="ProjectsPace">
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam."/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam."/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam."/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam."/>
                
                </div>
                <Subimg content="REFERENCES"/>
                <div className="Referencespace" >
                <References name="Brian Castro Bedoya" post="Developer" phone="300 3606702" adres="castro@gmail.com"/>    
                <References name="Jhon James Valencia Cardona" post="Developer" phone="300 22971" adres="valencia@gmail.com"/>    
                <References name="Santiago Arias Mosquera" post="Developer" phone="3022606983" adres="sarias@gmail.com"/>
                </div>

                <Subimg content="EXPERIENCE"/>
                <div className="Experiencespace" >
                    
                <Experience tecno="REACT" level="Basico"/>
                <Experience tecno="JS" level="Basico"/>
                <Experience tecno="NODE_JS" level="Basico"/>
                <Experience tecno="JAVA" level="Basico"/>
                </div>

            </div>
        </div>
    )
}