import { useLayoutEffect, useRef } from "react";
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../Estilos/Depoimentos.css';
import dados from '../Dados/DepoimentosData.json';


function Depoimentos({sectionRef }){
    const el = useRef();
    const tl = useRef();



    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
       const ctx = gsap.context(() => {
        tl.current = gsap.timeline({
            scrollTrigger:{
                trigger: ".cliente",
                scrub: true,
                start: "top 800px",
                end: "bottom 700px"
            }
        })
        .fromTo("#pri", {
            opacity: 0,
            y: -100,
        }, {
            opacity:1,
            y: 0
        })
        .fromTo("#seg", {
            opacity: 0,
            y: -100,
        }, {
            opacity:1,
            y: 0
        })
        .fromTo("#ter", {
            opacity: 0,
            y: -100,
        }, {
            opacity:1,
            y: 0
        })
       }, el)

        return () =>{
            gsap.killTweensOf(".cliente")
        }

    }, [])
    return(
    
        <div className="clientes" id="leo" ref={el}>
            
        {
            dados.map( (dados,i) => {
                return(
                     i % 2 === 0 ? (
                    <div className="cliente direito" key={i} id={dados.id}>
                        <div className="foto-perfil">
                        <img src = {dados.imagem}/>
                        </div>
                        <div className="textos">
                        <h1>{dados.nome}</h1>
                        <p>{dados.text}</p>
                        </div>
                    </div>
                    ) :(
                        <div className="cliente esquerdo" key={i} id={dados.id}>
                        <div className="foto-perfil">
                        <img src = {dados.imagem}/>
                        </div>
                        <div className="textos">
                        <h1>{dados.nome}</h1>
                        <p>{dados.text}</p>
                        </div>
                    </div>
                    )
                )
            })
        }
        </div>
       
    )
}
export default Depoimentos
