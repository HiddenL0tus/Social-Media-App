import Comment from './Comment';
import React, { useState } from 'react';

function Post({post}){

    const [likes, setLikes] = useState(0);

    function handleLike(){
        setLikes(likes + 1);
      }

    return(
      <div className="post">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        

        <p>Likes: {likes}</p>

        <button onClick={handleLike}>Like</button>

        <p>Comments:</p>

        <Comment content="This is a test comment!" />
        <Comment content="This is another test comment!" />
        <Comment content="This is yet another test comment!" />
        
      </div>
      
    )
  }
  export default Post