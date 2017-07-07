import React, { PropTypes } from 'react';

export default function PostList({ posts }) {
  const emptyMessage = (
    <p>There are no posts yet</p>
  )

  const postList = (
    <p>List of Posts</p>
  )
  return(
    <div>
      {posts.length === 0 ? emptyMessage : postList}
    </div>

  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}
