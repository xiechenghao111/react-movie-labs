import React from "react";

const PeopleReview =  ({ review }) => {
  return (
    <>
      <p>Review By: {review.author} </p>
      <p>{review.content} </p>
    </>
  );
};
export default PeopleReview