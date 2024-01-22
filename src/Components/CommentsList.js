import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  console.log(comments);
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-3 border border-t-0 border-b-0 border-r-0 border-l-black ml-5">
        <CommentsList comments={comment?.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
