import React, { useEffect } from 'react'
import Nav from '../componentes/Nav'
import Conteo from '../componentes/Conteo'
import ContainChat from '../componentes/ContainChat'
import notificar from '../services/conectados/notificar';

export default function Home() {


    useEffect(()=>{
       notificar();
    });
  return (
    <div className='w-full flex flex-col'>
        <Nav/>

        <div className='px-4 flex gap-x-2 w-1/2 items-start mt-10 '>
        <Conteo/>
        <ContainChat/>
        </div>
        
        
    
      
 
    </div>
  )
}
