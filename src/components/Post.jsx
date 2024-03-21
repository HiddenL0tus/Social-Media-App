import Comment from './Comment';
import React, { useState } from 'react';

function Post(){

    const [likes, setLikes] = useState(0);

    function handleLike(){
        setLikes(likes + 1);
      }

    return(
      <div>
        <h3>Test Post</h3>
        <p>This is a test post we'll edit later!</p>
        <p>Likes: {likes}</p>

        <button onClick={handleLike}>Like</button>

        <p>Likes: 30</p>
        <p>Comments:</p>

        <Comment content="This is a test comment!" />
        <Comment content="This is another test comment!" />
        <Comment content="This is yet another test comment!" />
        
      </div>
    )
  }
  export default Post