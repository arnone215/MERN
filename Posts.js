import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Posts.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //api call
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res.data);
      })
  }, [])
  return (
    <div>
      <h1>Posts</h1>
    </div>
  )
}