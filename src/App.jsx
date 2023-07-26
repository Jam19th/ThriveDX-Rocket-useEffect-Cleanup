//Importing Dependencies
import React, { useState } from 'react';
import './App.css';
import RocketLauncher from './RocketLauncher'

function App() {
  let [launch, setLaunch] = useState(true)
  let [rocketName, setRocketName] = useState('Apollo')

  const handleChange = (e) => {
    setRocketName(e.target.value)
  }

  return (
    <main>
      <h1>Learning Cleanup!</h1>
      <button onClick={() => setLaunch(!launch)}>
        {launch ? 'Abort Launch' : 'Launch Rocket'}
      </button>
      <h2>{rocketName}</h2>
      {/* Changing the input will run a component update and trigger a cleanup */}
      <input type="text" placeholder='Rocket Name' onChange={handleChange} />
      {launch ? <RocketLauncher /> : null}
    </main>
  );
}

export default App;