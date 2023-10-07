import { useContext, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([])

  useEffect(
    () => {
      fetch('/api/comments/' + eventId)
        .then(res => res.json())
        .then( data => setComments(data.comments))
    },[]
  )
  console.log(comments)

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {

  //   notificationCtx.showNotification({
  //     title: 'Adding a comment',
  //     message: 'Preparing a to add comment',
  //     status: 'pending'
  //   })

  //   // send data to API
  //   fetch(`/api/comments/${eventId}`, {
  //     method: 'POST',
  //     body: JSON.stringify(commentData),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then( res => {
  //       if (res.ok) {
  //         return res.json()
  //       }
  //       return res.json().then(data => {
  //         throw new Error(data.message || 'Something went wrong!')
  //       })
  //     })
  //     .then( data => {
  //       notificationCtx.showNotification({
  //         title: 'Success',
  //         message: 'Sucessfully saved your comment',
  //         status: 'success'
  //       })
  //     })
  //     .catch( error => {
  //       notificationCtx.showNotification({
  //         title: 'Error',
  //         message: error.message || 'Something went wrong',
  //         status: 'error'
  //       })
  //     }
  //     )
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;