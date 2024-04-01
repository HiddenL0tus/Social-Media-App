import React from 'react';
import Post from './Post'; 

function Feed({ posts }) {
  return (
    <div className="feed">
      <h2>Feed</h2>
      <div className="posts">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;