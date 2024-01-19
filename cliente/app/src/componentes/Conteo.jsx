import React from 'react'

import useLongPolling from '../hooks/UseLongPoll'
export default function Conteo() {
    const data = useLongPolling('http://localhost:3000/conexion', 5000);
  return (
    <>
     <div className="stats shadow shadow-primary w-[12rem]">
  
  <div className="stat">
    <div className="stat-title">usuarios conectados</div>
    <div className="stat-value">

        {data ? data.totalAlumnos : 1}
    </div>

  </div>
  
</div>
    </>
   
  )
}
