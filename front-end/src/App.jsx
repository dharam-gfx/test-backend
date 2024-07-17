import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [count, setCount] = useState(0);

useState(() => {
  try {
    axios.get('/api/v1/jokes')
      .then(res => {
        setJokes(res.data);
        setCount(res.data.length);
      });
  } catch (error) {
    console.log(error);
  }
});

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-3xl text-green-500 mb-4'>Jokes</h1>
        <p className='text-xl'>Get a random joke</p>
        <p className='text-x'>Count: {count}</p>
        <p className='mt-10 font-bold text-2xl text-purple-500'>joke : {jokes[Math.floor(Math.random() * count)]?.joke}</p>
      </div>
    </div>
  );
};

export default App