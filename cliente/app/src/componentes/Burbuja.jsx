import React from 'react'

export default function Burbuja({mensaje}) {
  return (
    <div className="chat chat-end">
    <div className="chat-bubble chat-bubble-info">{mensaje}</div>
  </div>
  )
}
