/* eslint-disable react/prop-types */


function PostCard({ username, content, likes, onLike, onDelete }) {
    return (
      <div className="post-card">
        <h4 className="post-username">{username}</h4>
        <p className="post-content">{content}</p>
        <div className="post-actions">
          <button className="like-button" onClick={onLike}>Like</button> <span className="likes-count">{likes}</span>
          <button className="delete-button" onClick={onDelete}>❌</button>
        </div>
      </div>
    );
  }
  
  
  export default PostCard;