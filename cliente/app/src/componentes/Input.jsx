import React from 'react'

export default function InputB() {
  return (
    <div className='flex px-1 gap-x-2'>
 <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
 <button className="btn btn-active btn-primary w-16">Enviar</button>
    </div>
   
  )
}
