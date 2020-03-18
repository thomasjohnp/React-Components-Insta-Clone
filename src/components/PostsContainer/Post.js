// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import dummyData from "../../dummy-data";
import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likeCount, setLikeCount] = useState(props.post.likes);

  const updateLikes = () => {
    setLikeCount(likeCount => likeCount + 1);
  };

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>

      <LikeSection likeCount={likeCount} addLike={updateLikes} />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
