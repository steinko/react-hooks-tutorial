import React, { useState } from 'react';
function App() {
	 const [message] = useState("Hello World");
  return (
    <div>
      <p> {message}</p>
    </div>
  );
}

export default App;
