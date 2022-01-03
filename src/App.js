import React, { useState, useEffect } from 'react'
function App () {
  const [message, setMessage] = useState('')
  useEffect(() => { setMessage('Hello World') })
  return (
                <div>
                   <p>{message}</p>
                </div>
  )
}

export default App
