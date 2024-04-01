import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Post from './components/Post';
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';



function App() {
  const [count, setCount] = useState(0)

  const [posts, setPosts] = useState([]);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    
    <div className="App">
      <h1>Fakebook!</h1>
      
        {/* CreatePostForm */}

        <CreatePostForm onCreatePost={handleCreatePost} />

      <br />

        {/* Feed */}

        <Feed posts={posts} /> 
      
        
        {/* Post */} 
    
    </div>

  )
}

export default App
