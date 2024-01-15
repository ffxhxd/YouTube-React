import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Fahad Farooq",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Arun",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Aqeel beigh",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Fahad Farooq",
            text: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay kumar",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Fahad Farooq",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Random guy",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Fahad Farooq",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Fahad Farooq",
            text: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ruhbaiz",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Fahad",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Arjun",
            text: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-4 p-2">
      <h1 className="text-3xl font-bold mb-2">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
