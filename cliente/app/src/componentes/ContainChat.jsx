import React from 'react'
import InputB from './Input'
import Burbuja from './Burbuja'

export default function ContainChat() {
  return (
    <div className="shadow bg-slate-100 w-96 h-[31rem] shadow-primary rounded-md flex flex-col py-2 px-1">
    
     <h1 className='font-black text-2xl w-full text-center'>Chat</h1>
     <div className='w-full h-full flex  flex-col justify-end py-1'>
<Burbuja mensaje={"hola"}/>
</div>
     <InputB/>
    </div>
  )
}
