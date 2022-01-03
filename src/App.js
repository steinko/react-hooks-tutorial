import React, { useState } from 'react'
function App () {
  const [message, setMessage] = useState('')
  return (
                <div>
                   <p>{message}</p>
                   <button onClick= {() => setMessage('Hello World')}>
                      Display Hello World
                  </button>
                </div>
  )
}

export default App
