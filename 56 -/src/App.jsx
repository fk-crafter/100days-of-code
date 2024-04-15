import { useState } from 'react';
import PostCard from './PostCard';

function App() {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');

  const [posts, setPosts] = useState([
    { username: 'John Doe', content: 'Lorem ipsum 1', likes: 20 },
    { username: 'John Doe2', content: 'Lorem ipsum 2', likes: 12 },
    { username: 'John Doe3', content: 'Lorem ipsum 3', likes: 2 },
    { username: 'John Doe4', content: 'Lorem ipsum 4', likes: 30 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([{ username, content, likes: 0 }, ...posts]);
    setUsername('');
    setContent('');
  };

  const handleLike = (index) => {
    const newPosts = [...posts];
    newPosts[index].likes += 1;
    setPosts(newPosts);
  };

  const handleDelete = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  return (
    <div className="app">

  <form onSubmit={handleSubmit} className="post-form">
    <input
      type="text"
      placeholder="Username"
      className="input-username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

    <input
      type="text"
      placeholder="Content"
      className="input-content"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />

    <button type="submit" className="submit-button">Post</button>
  </form>
  
  <div className="posts-container">
    {posts.map((post, index) => (
      <PostCard
        key={index}
        username={post.username}
        content={post.content}
        likes={post.likes}
        onLike={() => handleLike(index)}
        onDelete={() => handleDelete(index)}
      />
    ))}
  </div>
</div>
  );
}

export default App;