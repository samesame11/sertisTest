import React from 'react';
import Faker from 'faker';
const CommentDetail = props => {
  console.log(props);
  return (
    <div className="comment">
      <div className="Topic">
          {props.Topic}
      </div>
      <div className="text">{props.content}</div>
      <a href ="/" className="avatar">
        <img alt="avatar" src={props.avatar}/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <br></br>
        <div className="metadata">
          <span className="date">{props.TimeAgo}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;