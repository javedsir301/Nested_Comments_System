import Comments from "./components/comments/comments";
import { commentData } from "./data/commentData";
import { useState } from "react";
import useFunctions from "./useFunctions";

function App() {
  const [comments, setComments] = useState(commentData);
  const { addComment,deleteComment } = useFunctions();

  const handleAddComment = (commentId, comment) => {
   const updateTree= addComment(comments, commentId, comment);
   setComments(updateTree);
  };
 
  const handleCommentDelete = (commentId) =>{
     const updateTree = deleteComment(comments,commentId);
     setComments(updateTree);
  }
  

  return (
    <div className="App">
      <Comments
        key={comments.id}
        comments={comments}
        handleAddComment={handleAddComment}

      handleCommentDelete={handleCommentDelete}
      />
    </div>
  );
}

export default App;
