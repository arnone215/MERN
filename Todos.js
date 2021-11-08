import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Todos() {

  useEffect(() => {
    axios.get('localhost:3402/message')
      .then(res => {
        console.log(res.data);
      })
  }, [])
  return (
    <div>
      <h1>Todos</h1>
    </div>
  )
}

export default Todos;